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
let boundaryGesture = null;
const toggleRouteButton =
  document.getElementById(
    "toggle-route-button"
  );
const travelOptimRouteLayer =
  document.getElementById(
    "traveloptim-route"
  );
const travelOptimRouteLine =
  document.getElementById(
    "traveloptim-route-line"
  );
  const travelOptimRouteMarkers =
  document.getElementById(
    "traveloptim-route-markers"
  );
/* =========================
   ÉTAT DU PLAN
========================= */
let currentFloor = Number(museumData.defaultFloor);

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
const MIN_SCALE = 1;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.2;
/* =========================
   POINTS DU PARCOURS
========================= */
const travelOptimPath = [
  {
    "x": 55.34,
    "y": 95.47
  },
  {
    "x": 36.71,
    "y": 89.51
  },
  {
    "x": 45.63,
    "y": 85.78
  },
  {
    "x": 48.26,
    "y": 86.89
  },
  {
    "x": 44.14,
    "y": 88.67
  },
  {
    "x": 54.09,
    "y": 92.01
  },
  {
    "x": 59.23,
    "y": 89.84
  },
  {
    "x": 56.03,
    "y": 88.56
  },
  {
    "x": 59.46,
    "y": 87.06
  },
  {
    "x": 52.03,
    "y": 85.33
  },
  {
    "x": 56.37,
    "y": 84.22
  },
  {
    "x": 39.8,
    "y": 78.82
  },
  {
    "x": 37.29,
    "y": 80.1
  },
  {
    "x": 29.17,
    "y": 77.76
  },
  {
    "x": 25.74,
    "y": 78.93
  },
  {
    "x": 5.63,
    "y": 72.53
  },
  {
    "x": 13.06,
    "y": 73.59
  },
  {
    "x": 16.14,
    "y": 72.87
  },
  {
    "x": 24.37,
    "y": 75.2
  },
  {
    "x": 28.03,
    "y": 73.37
  },
  {
    "x": 15.69,
    "y": 68.8
  },
  {
    "x": 13.63,
    "y": 5.34
  },
  {
    "x": 8.94,
    "y": 6.74
  },
  {
    "x": 8.94,
    "y": 38.74
  },
  {
    "x": 12.03,
    "y": 40.13
  },
  {
    "x": 9.97,
    "y": 41.3
  },
  {
    "x": 4.71,
    "y": 40.41
  },
  {
    "x": 9.74,
    "y": 42.7
  },
  {
    "x": 20.94,
    "y": 37.24
  },
  {
    "x": 19.11,
    "y": 35.35
  },
  {
    "x": 31.69,
    "y": 39.24
  },
  {
    "x": 26.43,
    "y": 41.75
  },
  {
    "x": 37.17,
    "y": 45.76
  },
  {
    "x": 35.91,
    "y": 47.65
  },
  {
    "x": 28.83,
    "y": 45.87
  },
  {
    "x": 26.09,
    "y": 46.98
  },
  {
    "x": 36.49,
    "y": 50.82
  },
  {
    "x": 34.54,
    "y": 52.83
  },
  {
    "x": 41.4,
    "y": 51.82
  },
  {
    "x": 43.46,
    "y": 52.66
  },
  {
    "x": 49.4,
    "y": 49.88
  },
  {
    "x": 64.14,
    "y": 54.66
  },
  {
    "x": 55.8,
    "y": 53.83
  },
  {
    "x": 59.23,
    "y": 55.61
  },
  {
    "x": 56.37,
    "y": 56.78
  },
  {
    "x": 48.94,
    "y": 54.44
  },
  {
    "x": 44.6,
    "y": 56.17
  },
  {
    "x": 55.57,
    "y": 59.9
  },
  {
    "x": 60.49,
    "y": 58.45
  },
  {
    "x": 81.4,
    "y": 64.91
  },
  {
    "x": 76.03,
    "y": 61.12
  },
  {
    "x": 80.83,
    "y": 59.62
  },
  {
    "x": 85.97,
    "y": 62.68
  },
  {
    "x": 85.86,
    "y": 30.73
  },
  {
    "x": 81.86,
    "y": 31.73
  },
  {
    "x": 69.86,
    "y": 28.33
  },
  {
    "x": 83.23,
    "y": 23.6
  },
  {
    "x": 95.34,
    "y": 27.44
  },
  {
    "x": 90.89,
    "y": 28.72
  },
  {
    "x": 90.89,
    "y": 60.9
  },
  {
    "x": 91.46,
    "y": 64.24
  }
];
function renderTravelOptimRoute() {
  const points = travelOptimPath
    .map(
      function (point) {
        return `${point.x},${point.y}`;
      }
    )
    .join(" ");
  travelOptimRouteLine.setAttribute(
    "points",
    points
  );
}
function setTravelOptimRouteVisibility(
  isVisible
) {
  travelOptimRouteLayer.classList.toggle(
    "is-visible",
    isVisible
  );
  travelOptimRouteLayer.setAttribute(
    "aria-hidden",
    String(!isVisible)
  );
  travelOptimRouteMarkers.classList.toggle(
    "is-visible",
    isVisible
  );
  travelOptimRouteMarkers.setAttribute(
    "aria-hidden",
    String(!isVisible)
  );
  toggleRouteButton.classList.toggle(
    "is-active",
    isVisible
  );
  toggleRouteButton.setAttribute(
    "aria-pressed",
    String(isVisible)
  );
    const t = translations[currentLanguage];

  toggleRouteButton.textContent =
    isVisible
      ? t.hideRoute
      : t.showRoute;
}
toggleRouteButton.addEventListener(
  "click",
  function () {
    const isVisible =
      travelOptimRouteLayer.classList.contains(
        "is-visible"
      );
    setTravelOptimRouteVisibility(
      !isVisible
    );
  }
);
function createTravelOptimRouteMarker(
  point,
  type,
  symbol,
  label
) {
  const marker =
    document.createElement("div");
  marker.className =
    `traveloptim-route-marker traveloptim-route-marker-${type}`;
  marker.style.left =
    `${point.x}%`;
  marker.style.top =
    `${point.y}%`;
  marker.textContent =
    symbol;
  marker.setAttribute(
    "aria-label",
    label
  );
  travelOptimRouteMarkers.appendChild(
    marker
  );
}
function renderTravelOptimRouteMarkers() {
  travelOptimRouteMarkers.innerHTML = "";
  if (travelOptimPath.length < 2) {
    return;
  }
  const firstPoint =
    travelOptimPath[0];
  const lastPoint =
    travelOptimPath[
      travelOptimPath.length - 1
    ];
  createTravelOptimRouteMarker(
    firstPoint,
    "start",
    "▶",
    "Début du parcours TravelOptim"
  );
  createTravelOptimRouteMarker(
    lastPoint,
    "end",
    "■",
    "Fin du parcours TravelOptim"
  );
  updateTravelOptimRouteMarkerScale();
}
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
/* =========================
   LIMITES DE DÉPLACEMENT DU PLAN
========================= */
// Limites souples sur mobile : marge supplémentaire autour du plan.
const MOBILE_PAN_MARGIN = 72;
const MOBILE_MIN_SCALE = 0.45;

function isMobileMap() {
  return window.matchMedia("(max-width: 700px)").matches;
}

function getPanLimits() {
  const viewportWidth = mapViewport.clientWidth;
  const viewportHeight = mapViewport.clientHeight;
  const scaledWidth = mapStage.offsetWidth * mapState.scale;
  const scaledHeight = mapStage.offsetHeight * mapState.scale;
  const margin = isMobileMap() ? MOBILE_PAN_MARGIN : 0;

  return {
    maxX: Math.max(0, (scaledWidth - viewportWidth) / 2) + margin,
    maxY: Math.max(0, (scaledHeight - viewportHeight) / 2) + margin
  };
}

function constrainMapPosition() {
  const { maxX, maxY } = getPanLimits();
  mapState.x = clamp(mapState.x, -maxX, maxX);
  mapState.y = clamp(mapState.y, -maxY, maxY);
}

function updateMapTransform() {
  constrainMapPosition();
  mapStage.style.transform = `
    translate(-50%, -50%)
    translate(${mapState.x}px, ${mapState.y}px)
    scale(${mapState.scale})
  `;
  updateMarkerScale();
  updateTravelOptimRouteMarkerScale();
}
function updateTravelOptimRouteMarkerScale() {
  const markerScale = Math.max(
    0.05,
    1 / mapState.scale
  );
  const routeMarkers =
    document.querySelectorAll(
      ".traveloptim-route-marker"
    );
  routeMarkers.forEach(
    function (marker) {
      marker.style.setProperty(
        "--route-marker-scale",
        markerScale
      );
    }
  );
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
   ZOOM MINIMUM ADAPTATIF
========================= */
function getMinimumScale() {
  if (isMobileMap()) return MOBILE_MIN_SCALE;
  const scaleX = mapViewport.clientWidth / mapStage.offsetWidth;
  const scaleY = mapViewport.clientHeight / mapStage.offsetHeight;
  return Math.min(1, scaleX, scaleY);
}

/* =========================
   ZOOM INITIAL MOBILE
========================= */
function getInitialScale() {
  if (window.innerWidth > 700) {
    return 1;
  }
  const viewportWidth = mapViewport.clientWidth;
  const stageWidth = mapStage.offsetWidth;
  // Sur mobile, le plan occupe presque
  // toute la largeur disponible.
  const widthScale = viewportWidth / stageWidth;
  return clamp(
    widthScale * 1.5,
    getMinimumScale(),
    MAX_SCALE
  );
}
/* =========================
   APPLIQUER UN NIVEAU DE ZOOM
========================= */
function setZoom(newScale, origin = null) {
  const oldScale = mapState.scale;
  const limitedScale = clamp(
    newScale,
    getMinimumScale(),
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
    // Sur mobile, un nouveau geste vers une limite déjà atteinte
    // fera défiler la page au lieu de déplacer le plan.
    if (activePointers.size === 0) {
      const limits = getPanLimits();
      boundaryGesture = {
        atTop: mapState.y <= -limits.maxY + 1,
        atBottom: mapState.y >= limits.maxY - 1,
        atLeft: mapState.x <= -limits.maxX + 1,
        atRight: mapState.x >= limits.maxX - 1,
        startX: event.clientX,
        startY: event.clientY,
        scrolling: false,
        decided: false
      };
    }

    mapViewport.setPointerCapture(event.pointerId);
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
      boundaryGesture = null;
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
      if (isMobileMap() && boundaryGesture) {
        const gesture = boundaryGesture;
        if (!gesture.decided && Math.hypot(distanceX, distanceY) > 8) {
          gesture.decided = true;
          const vertical = Math.abs(distanceY) >= Math.abs(distanceX);
          gesture.scrolling = vertical && (
            (distanceY < 0 && gesture.atTop) ||
            (distanceY > 0 && gesture.atBottom)
          );
        }
        if (gesture.scrolling) {
          // L'utilisateur peut sortir de la carte sans barre de défilement.
          const scrollDelta = event.clientY - (gesture.lastY ?? gesture.startY);
          window.scrollBy({ top: -scrollDelta, behavior: "auto" });
          gesture.lastY = event.clientY;
          return;
        }
      }

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
        updateMapTransform();
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
  if (activePointers.size === 0) boundaryGesture = null;

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
   mapState.scale = getInitialScale();
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
  /* =========================
     LIEN VERS L’ARTICLE
  ========================= */
  if (
    artwork.featured === true &&
    artwork.anchor
  ) {
    panelArticleLink.href =
      artwork.anchor;
    panelArticleLink.hidden =
      false;
  } else {
    panelArticleLink.hidden =
      true;
  }

/* =========================================
   NAVIGATION VERS L'ARTICLE TRAVELOPTIM
========================================= */

const PRADO_ARTICLE_URL =
  "https://traveloptim.com/madrid-fr/visiter-musee-prado-madrid/";

panelArticleLink.addEventListener("click", function (event) {

  const anchor = new URL(
    panelArticleLink.href,
    window.location.href
  ).hash;

  if (!/^#[a-z0-9-]+$/.test(anchor)) return;

  event.preventDefault();

  // Plan intégré dans WordPress
  if (window.parent !== window) {

    window.parent.postMessage(
      {
        type: "TRAVELOPTIM_SCROLL_TO_ARTWORK",
        anchor: anchor
      },
      "https://traveloptim.com"
    );

  } else {

  // Plan ouvert en plein écran :
  // ouvrir l'article dans un nouvel onglet
  window.open(
    PRADO_ARTICLE_URL + anchor,
    "_blank",
    "noopener,noreferrer"
  );

}

});
   
  /* =========================
     IMAGE
  ========================= */
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
  /*
   * Incontournable :
   * miniature de l’œuvre.
   *
   * Autres œuvres :
   * palette classique.
   */
  if (
    artwork.featured === true &&
    artwork.image
  ) {
    marker.className =
      "artwork-marker artwork-marker-featured";
    const image =
      document.createElement("img");
    image.src =
      artwork.image;
    image.alt = "";
    image.draggable =
      false;
    marker.appendChild(
      image
    );
  } else {
    marker.className =
      "artwork-marker";
    marker.textContent =
      "🎨";
  }
  marker.setAttribute(
    "aria-label",
    `${artwork.title}, ${artwork.artist}`
  );
  marker.addEventListener(
    "click",
    function (event) {
      event.stopPropagation();
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
   ADAPTATION AU REDIMENSIONNEMENT
========================= */
window.addEventListener("resize", function () {
  mapState.scale = clamp(
    mapState.scale,
    getMinimumScale(),
    MAX_SCALE
  );
  updateMapTransform();
});
/* =========================
   DÉMARRAGE
========================= */
mapState.scale = getInitialScale();
mapState.x = 0;
mapState.y = 0;
updateMapTransform();
selectFloor(
  museumData.defaultFloor
);
displayArtworkMarkers();
renderTravelOptimRoute();
renderTravelOptimRouteMarkers();
setTravelOptimRouteVisibility(
  false
);

/* =========================================
   BILINGUISME — GESTION DES IMAGES DU PLAN
========================================= */

const museumMapImage =
  document.getElementById("museum-map-image");

const languageButtons =
  document.querySelectorAll(".language-button");

let currentLanguage = "fr";

function setMapLanguage(lang) {

  if (lang !== "fr" && lang !== "en") {
    return;
  }

  currentLanguage = lang;

     // Récupérer le dictionnaire de la langue
  const t = translations[lang];

  // Traduire les éléments fixes
  document.querySelectorAll("[data-i18n]").forEach(
    function (element) {
      const key = element.dataset.i18n;

      if (t[key] !== undefined) {
        element.textContent = t[key];
      }
    }
  );

  // Traduire les boutons des étages
  document.querySelectorAll("[data-i18n-floor]").forEach(
    function (button) {
      button.textContent =
        `${t.floor} ${button.dataset.floor}`;
    }
  );

  // Traduire le titre de l'onglet
  document.title = t.pageTitle;

  // Traduire le bouton du parcours selon son état actuel
  const routeIsVisible =
    travelOptimRouteLayer.classList.contains("is-visible");

  toggleRouteButton.textContent =
    routeIsVisible ? t.hideRoute : t.showRoute;

  // Changer l'image du plan
  museumMapImage.src =
    lang === "en"
      ? "images/plan-prado-en.png"
      : "images/plan-prado-fr.png";

  // Adapter le texte alternatif
  museumMapImage.alt =
    lang === "en"
      ? "Floor map of the Prado Museum"
      : "Plan des étages du Museo del Prado";

  // Mettre à jour les boutons
  languageButtons.forEach(function (button) {

    const isActive =
      button.dataset.lang === lang;

    button.classList.toggle(
      "active",
      isActive
    );

    button.setAttribute(
      "aria-pressed",
      String(isActive)
    );

  });

  // Mettre à jour la langue du document
  document.documentElement.lang = lang;

  // Mémoriser la préférence
  try {
    localStorage.setItem(
      "traveloptim-prado-language",
      lang
    );
  } catch (error) {
    // Continuer sans mémorisation si le stockage est indisponible.
  }

}

// Clic sur FR ou EN
languageButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    setMapLanguage(
      button.dataset.lang
    );

  });

});

// Restaurer la langue enregistrée
let savedLanguage = "fr";

try {
  savedLanguage =
    localStorage.getItem(
      "traveloptim-prado-language"
    ) || "fr";
} catch (error) {
  // Français par défaut.
}

setMapLanguage(savedLanguage);
