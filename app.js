/* =========================
   ÉLÉMENTS DU PLAN
========================= */

const mapViewport =
  document.getElementById(
    "map-viewport"
  );

const mapStage =
  document.getElementById(
    "map-stage"
  );

const zoomInButton =
  document.getElementById(
    "zoom-in"
  );

const zoomOutButton =
  document.getElementById(
    "zoom-out"
  );

const resetMapButton =
  document.getElementById(
    "reset-map"
  );

const floorTabs =
  document.querySelectorAll(
    ".floor-tab"
  );

const shadeTop =
  document.querySelector(
    ".shade-top"
  );

const shadeRight =
  document.querySelector(
    ".shade-right"
  );

const shadeBottom =
  document.querySelector(
    ".shade-bottom"
  );

const shadeLeft =
  document.querySelector(
    ".shade-left"
  );

const markersContainer =
  document.getElementById(
    "artwork-markers"
  );

const moveUpButton =
  document.getElementById(
    "move-up"
  );

const moveDownButton =
  document.getElementById(
    "move-down"
  );

const moveLeftButton =
  document.getElementById(
    "move-left"
  );

const moveRightButton =
  document.getElementById(
    "move-right"
  );

/* Distance parcourue à chaque clic */

const PAN_STEP = 60;

const artworkPanel =
  document.getElementById(
    "artwork-panel"
  );

const museumWorkspace =
  document.querySelector(
    ".museum-workspace"
  );

const closeArtworkPanelButton =
  document.getElementById(
    "close-artwork-panel"
  );

const panelArtworkImage =
  document.getElementById(
    "panel-artwork-image"
  );

const panelArtworkTitle =
  document.getElementById(
    "panel-artwork-title"
  );

const panelArtworkArtist =
  document.getElementById(
    "panel-artwork-artist"
  );

const panelArtworkYear =
  document.getElementById(
    "panel-artwork-year"
  );

const panelArtworkFloor =
  document.getElementById(
    "panel-artwork-floor"
  );

const panelArtworkRoom =
  document.getElementById(
    "panel-artwork-room"
  );

const panelArtworkMedium =
  document.getElementById(
    "panel-artwork-medium"
  );

const panelArticleLink =
  document.getElementById(
    "panel-article-link"
  );

const activePointers =
  new Map();

let lastPinchDistance = null;
let lastPinchCenter = null;

/* =========================
   ÉTAT DU PLAN
========================= */

const mapState = {
  scale: 1,
  x: 0,
  y: 0,

  isDragging: false,

  pointerStartX: 0,
  pointerStartY: 0,

  mapStartX: 0,
  mapStartY: 0
};


/* =========================
   RÉGLAGES DU ZOOM
========================= */

const MIN_SCALE = 0.65;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.2;


/* =========================
   OUTILS
========================= */

function clamp(value, minimum, maximum) {
  return Math.min(
    Math.max(value, minimum),
    maximum
  );
}


/* =========================
   APPLIQUER LA TRANSFORMATION
========================= */

function updateMapTransform() {
  mapStage.style.transform = `
    translate(-50%, -50%)
    translate(${mapState.x}px, ${mapState.y}px)
    scale(${mapState.scale})
  `;

  updateMarkerScale();
}


/* =========================
   ADAPTER LA TAILLE DES PALETTES AU ZOOM
========================= */

function updateMarkerScale() {
  const markerScale = Math.max(
    0.05,
    1 / Math.pow(mapState.scale, 1)
  );

  const markers =
    document.querySelectorAll(
      ".artwork-marker"
    );

  markers.forEach(function (marker) {
    marker.style.setProperty(
      "--marker-scale",
      markerScale
    );
  });
}


/* =========================
   APPLIQUER UN NIVEAU DE ZOOM
========================= */

function setZoom(newScale, origin = null) {
  const oldScale = mapState.scale;

  const limitedScale = clamp(
    newScale,
    MIN_SCALE,
    MAX_SCALE
  );

  if (limitedScale === oldScale) {
    return;
  }

  /*
   * Lorsque origin est fourni, le zoom se fait
   * autour de ce point plutôt qu'au centre.
   */
  if (origin) {
    const viewportRect =
      mapViewport.getBoundingClientRect();

    /*
     * Position du curseur par rapport
     * au centre du cadre.
     */
    const cursorX =
      origin.clientX -
      viewportRect.left -
      viewportRect.width / 2;

    const cursorY =
      origin.clientY -
      viewportRect.top -
      viewportRect.height / 2;

    const zoomRatio =
      limitedScale / oldScale;

    /*
     * Ajustement de la position afin que
     * le point sous le curseur reste immobile.
     */
    mapState.x =
      cursorX -
      (cursorX - mapState.x) * zoomRatio;

    mapState.y =
      cursorY -
      (cursorY - mapState.y) * zoomRatio;
  }

  mapState.scale = limitedScale;

  updateMapTransform();
}


/* =========================
   MODIFIER LE ZOOM
========================= */

function changeZoom(amount, origin = null) {
  setZoom(
    mapState.scale + amount,
    origin
  );
}


/* =========================
   BOUTONS DE ZOOM
========================= */

zoomInButton.addEventListener("click", function () {
  changeZoom(ZOOM_STEP);
});

zoomOutButton.addEventListener("click", function () {
  changeZoom(-ZOOM_STEP);
});


/* =========================
   ZOOM AUTOUR DU CURSEUR
========================= */

mapViewport.addEventListener(
  "wheel",
  function (event) {
    event.preventDefault();

    const zoomAmount =
      event.deltaY < 0
        ? ZOOM_STEP
        : -ZOOM_STEP;

    changeZoom(
      zoomAmount,
      {
        clientX: event.clientX,
        clientY: event.clientY
      }
    );
  },
  {
    passive: false
  }
);

function getPointerDistance(pointerA, pointerB) {
  return Math.hypot(
    pointerB.clientX - pointerA.clientX,
    pointerB.clientY - pointerA.clientY
  );
}

function getPointerCenter(pointerA, pointerB) {
  return {
    clientX:
      (pointerA.clientX + pointerB.clientX) / 2,

    clientY:
      (pointerA.clientY + pointerB.clientY) / 2
  };
}

/* =========================
   DÉBUT DU GESTE
========================= */

mapViewport.addEventListener(
  "pointerdown",
  function (event) {
    if (
      event.target.closest(".map-control-button") ||
      event.target.closest(".artwork-marker")
    ) {
      return;
    }

    mapViewport.setPointerCapture(
      event.pointerId
    );

    activePointers.set(
      event.pointerId,
      {
        clientX: event.clientX,
        clientY: event.clientY
      }
    );

    /*
     * Un seul doigt ou la souris :
     * début du déplacement.
     */
    if (activePointers.size === 1) {
      mapState.isDragging = true;

      mapState.pointerStartX =
        event.clientX;

      mapState.pointerStartY =
        event.clientY;

      mapState.mapStartX =
        mapState.x;

      mapState.mapStartY =
        mapState.y;

      mapViewport.classList.add(
        "is-dragging"
      );
    }

    /*
     * Deux doigts :
     * initialisation du pincement.
     */
    if (activePointers.size === 2) {
      mapState.isDragging = false;

      mapViewport.classList.remove(
        "is-dragging"
      );

      const pointers =
        Array.from(
          activePointers.values()
        );

      lastPinchDistance =
        getPointerDistance(
          pointers[0],
          pointers[1]
        );

      lastPinchCenter =
        getPointerCenter(
          pointers[0],
          pointers[1]
        );
    }

    event.preventDefault();
  }
);


/* =========================
   DÉPLACEMENT ET PINCEMENT
========================= */

mapViewport.addEventListener(
  "pointermove",
  function (event) {
    if (
      !activePointers.has(
        event.pointerId
      )
    ) {
      return;
    }

    activePointers.set(
      event.pointerId,
      {
        clientX: event.clientX,
        clientY: event.clientY
      }
    );

    /*
     * Déplacement avec un doigt.
     */
    if (
      activePointers.size === 1 &&
      mapState.isDragging
    ) {
      const distanceX =
        event.clientX -
        mapState.pointerStartX;

      const distanceY =
        event.clientY -
        mapState.pointerStartY;

      mapState.x =
        mapState.mapStartX +
        distanceX;

      mapState.y =
        mapState.mapStartY +
        distanceY;

      updateMapTransform();

      return;
    }

    /*
     * Zoom et déplacement avec deux doigts.
     */
    if (activePointers.size === 2) {
      const pointers =
        Array.from(
          activePointers.values()
        );

      const currentDistance =
        getPointerDistance(
          pointers[0],
          pointers[1]
        );

      const currentCenter =
        getPointerCenter(
          pointers[0],
          pointers[1]
        );

      if (
        lastPinchDistance &&
        lastPinchCenter
      ) {
        mapState.x +=
          currentCenter.clientX -
          lastPinchCenter.clientX;

        mapState.y +=
          currentCenter.clientY -
          lastPinchCenter.clientY;

        const zoomRatio =
          currentDistance /
          lastPinchDistance;

        setZoom(
          mapState.scale *
          zoomRatio,
          currentCenter
        );
      }

      lastPinchDistance =
        currentDistance;

      lastPinchCenter =
        currentCenter;
    }
  }
);


/* =========================
   FIN DU GESTE
========================= */

function endPointerGesture(event) {
  activePointers.delete(
    event.pointerId
  );

  if (activePointers.size === 1) {
    const remainingPointer =
      Array.from(
        activePointers.values()
      )[0];

    mapState.isDragging = true;

    mapState.pointerStartX =
      remainingPointer.clientX;

    mapState.pointerStartY =
      remainingPointer.clientY;

    mapState.mapStartX =
      mapState.x;

    mapState.mapStartY =
      mapState.y;

    mapViewport.classList.add(
      "is-dragging"
    );
  } else {
    mapState.isDragging = false;

    mapViewport.classList.remove(
      "is-dragging"
    );
  }

  if (activePointers.size < 2) {
    lastPinchDistance = null;
    lastPinchCenter = null;
  }
}

mapViewport.addEventListener(
  "pointerup",
  endPointerGesture
);

mapViewport.addEventListener(
  "pointercancel",
  endPointerGesture
);

mapViewport.addEventListener(
  "lostpointercapture",
  endPointerGesture
);


/* =========================
   RECENTRER
========================= */

resetMapButton.addEventListener(
  "click",
  function () {
    mapState.scale = 1;
    mapState.x = 0;
    mapState.y = 0;

    updateMapTransform();
  }
);


/* =========================
   METTRE À JOUR LES OMBRES
========================= */

function updateFloorShades() {
  const floorConfig =
    museumData.floors[String(currentFloor)];

  if (!floorConfig) {
    return;
  }

  const area =
    floorConfig.area;

  const x =
    area.x;

  const y =
    area.y;

  const width =
    area.width;

  const height =
    area.height;

  shadeTop.style.top = "0%";
  shadeTop.style.left = "0%";
  shadeTop.style.width = "100%";
  shadeTop.style.height = `${y}%`;

  shadeBottom.style.top =
    `${y + height}%`;

  shadeBottom.style.left = "0%";
  shadeBottom.style.width = "100%";

  shadeBottom.style.height =
    `${100 - y - height}%`;

  shadeLeft.style.top =
    `${y}%`;

  shadeLeft.style.left = "0%";

  shadeLeft.style.width =
    `${x}%`;

  shadeLeft.style.height =
    `${height}%`;

  shadeRight.style.top =
    `${y}%`;

  shadeRight.style.left =
    `${x + width}%`;

  shadeRight.style.width =
    `${100 - x - width}%`;

  shadeRight.style.height =
    `${height}%`;
}


/* =========================
   SÉLECTIONNER UN ÉTAGE
========================= */

function selectFloor(floor) {
  currentFloor =
    Number(floor);

  floorTabs.forEach(function (tab) {
    const tabFloor =
      Number(tab.dataset.floor);

    const isActive =
      tabFloor === currentFloor;

    tab.classList.toggle(
      "active",
      isActive
    );

    tab.setAttribute(
      "aria-pressed",
      String(isActive)
    );
  });

  updateFloorShades();
}


/* =========================
   CLIC SUR LES ONGLETS
========================= */

floorTabs.forEach(function (tab) {
  tab.addEventListener(
    "click",
    function () {
      selectFloor(
        tab.dataset.floor
      );
    }
  );
});

/* =========================
   REMPLIR LA FICHE DE L’ŒUVRE
========================= */

function fillArtworkPanel(artwork) {
  panelArtworkTitle.textContent =
    artwork.title || "";

  panelArtworkArtist.textContent =
    artwork.artist || "";

  panelArtworkYear.textContent =
    artwork.year || "Information à venir";

  panelArtworkFloor.textContent =
    `Étage ${artwork.floor}`;

  panelArtworkRoom.textContent =
    `Salle ${artwork.room}`;

  panelArtworkMedium.textContent =
    artwork.medium || "Information à venir";

  panelArticleLink.href =
    artwork.anchor || "#";

  if (artwork.image) {
    panelArtworkImage.src =
      artwork.image;

    panelArtworkImage.alt =
      `${artwork.title} — ${artwork.artist}`;

    panelArtworkImage.hidden =
      false;
  } else {
    panelArtworkImage.removeAttribute(
      "src"
    );

    panelArtworkImage.alt = "";

    panelArtworkImage.hidden =
      true;
  }
}


/* =========================
   OUVRIR LA FICHE
========================= */

function openArtworkPanel() {
  museumWorkspace.classList.add(
    "panel-open"
  );

  artworkPanel.setAttribute(
    "aria-hidden",
    "false"
  );

  if (window.innerWidth <= 700) {
    setTimeout(function () {
      artworkPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 280);
  }
}


/* =========================
   FERMER LA FICHE
========================= */

function closeArtworkPanel() {
  museumWorkspace.classList.remove(
    "panel-open"
  );

  artworkPanel.setAttribute(
    "aria-hidden",
    "true"
  );
}


/* =========================
   CRÉER UNE PALETTE
========================= */

function createArtworkMarker(artwork) {
  const marker =
    document.createElement("button");

  marker.type = "button";

  marker.className =
    "artwork-marker";

  marker.dataset.artworkId =
    artwork.id;

  marker.dataset.floor =
    artwork.floor;

  marker.dataset.title =
    artwork.title;

  marker.style.left =
    `${artwork.position.x}%`;

  marker.style.top =
    `${artwork.position.y}%`;

  marker.textContent =
    "🎨";

  marker.setAttribute(
    "aria-label",
    `${artwork.title}, ${artwork.artist}`
  );

  marker.addEventListener(
    "click",
    function (event) {
      event.stopPropagation();

      /*
       * Si l’œuvre appartient à un autre étage,
       * son étage s’allume automatiquement.
       */
      if (
        Number(artwork.floor) !==
        currentFloor
      ) {
        selectFloor(
          artwork.floor
        );
      }

      selectArtworkMarker(
        artwork.id
      );

      fillArtworkPanel(
        artwork
      );

      openArtworkPanel();
    }
  );

  markersContainer.appendChild(
    marker
  );
}


/* =========================
   BOUTON DE FERMETURE
========================= */

closeArtworkPanelButton.addEventListener(
  "click",
  function (event) {
    event.stopPropagation();

    closeArtworkPanel();
  }
);


/* =========================
   AFFICHER LES PALETTES
========================= */

function displayArtworkMarkers() {
  markersContainer.innerHTML = "";

  museumData.artworks.forEach(
    function (artwork) {
      createArtworkMarker(
        artwork
      );
    }
  );

  updateMarkerScale();
}


/* =========================
   SÉLECTIONNER UNE PALETTE
========================= */

function selectArtworkMarker(artworkId) {
  const selectedMarker =
    document.querySelector(
      `.artwork-marker[data-artwork-id="${artworkId}"]`
    );

  const isAlreadySelected =
    selectedMarker &&
    selectedMarker.classList.contains(
      "selected"
    );

  const markers =
    document.querySelectorAll(
      ".artwork-marker"
    );

  markers.forEach(
    function (marker) {
      marker.classList.remove(
        "selected"
      );
    }
  );

  if (
    !isAlreadySelected &&
    selectedMarker
  ) {
    selectedMarker.classList.add(
      "selected"
    );
  }
}


/* =========================
   CLIC SUR LE PLAN
========================= */

mapViewport.addEventListener(
  "click",
  function (event) {
    if (
      event.target.closest(
        ".artwork-marker"
      ) ||
      event.target.closest(
        ".map-control-button"
      )
    ) {
      return;
    }

    closeArtworkPanel();

    document
      .querySelectorAll(
        ".artwork-marker.selected"
      )
      .forEach(
        function (marker) {
          marker.classList.remove(
            "selected"
          );
        }
      );
  }
);


/* =========================
   DÉPLACEMENT AVEC LES FLÈCHES
========================= */

moveUpButton.addEventListener(
  "click",
  function () {
    mapState.y -= PAN_STEP;

    updateMapTransform();
  }
);

moveDownButton.addEventListener(
  "click",
  function () {
    mapState.y += PAN_STEP;

    updateMapTransform();
  }
);

moveLeftButton.addEventListener(
  "click",
  function () {
    mapState.x -= PAN_STEP;

    updateMapTransform();
  }
);

moveRightButton.addEventListener(
  "click",
  function () {
    mapState.x += PAN_STEP;

    updateMapTransform();
  }
);

/* =========================
   DÉMARRAGE
========================= */

updateMapTransform();

selectFloor(
  museumData.defaultFloor
);

displayArtworkMarkers();