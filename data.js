/* =========================
   CONFIGURATION DES ÉTAGES
========================= */

const museumData = {
  defaultFloor: 0,

  floors: {
    "2": {
      label: "Étage 2",

      area: {
        x: 2,
        y: 0,
        width: 96,
        height: 25
      }
    },

    "1": {
      label: "Étage 1",

      area: {
        x: 1,
        y: 25,
        width: 97,
        height: 25
      }
    },

    "0": {
      label: "Étage 0",

      area: {
        x: 1,
        y: 50,
        width: 98,
        height: 25
      }
    },

    "-1": {
      label: "Étage -1",

      area: {
        x: 1,
        y: 75,
        width: 98,
        height: 26
      }
    }
  },
  artworks: [

    {
      id: "jardin-des-delices",
      title: "Le Jardin des délices",
      artist: "Bosch",
      floor: 0,
      room: "56A",
      year: "1490-1500",
      medium: "Huile sur bois - 220 × 386 cm",
    image: "images/jardin-des-delices.webp",
     anchor: "#jardin-des-delices",
      position: { x: 49, y: 65 }
    },
  
    {
      id: "triptyque-adoration-mages",
      title: "Triptyque de l'Adoration des Mages",
      artist: "Hans Memling",
      floor: 0,
      room: "58A",
      year: "Vers 1470",
      medium: "Huile sur bois - 95 × 271 cm",
    image: "images/triptyque-adoration-mages.webp",
     anchor: "#triptyque-adoration-mages",
      position: { x: 56, y: 66.5 }
    },
  
    {
      id: "descente",
      title: "Descente",
      artist: "Van der Weyden",
      floor: 0,
      room: "58",
      year: "Vers 1435",
      medium: "Huile sur bois - 220 × 262 cm",
    image: "images/descente.webp",
     anchor: "#descente",
      position: { x: 58, y: 66 }
    },
  
    {
      id: "autoportrait",
      title: "Autoportrait",
      artist: "Dürer",
      floor: 0,
      room: "55B",
      year: "1498",
      medium: "Huile sur panneau - 52 × 41 cm",
    image: "images/autoportrait.webp",
     anchor: "#autoportrait",
      position: { x: 53.5, y: 62.5 }
    },
  
    {
      id: "cardinal",
      title: "Le Cardinal",
      artist: "Rafael",
      floor: 0,
      room: "49",
      year: "1510",
      medium: "Huile sur bois - 79 × 61 cm",
    image: "images/cardinal.webp",
     anchor: "#cardinal",
      position: { x: 55, y: 61.5 }
    },
  
    {
      id: "trois-mai-1808",
      title: "Le trois mai 1808 à Madrid",
      artist: "Goya",
      floor: 0,
      room: "64",
      year: "1814",
      medium: "Huile sur toile - 268 × 347 cm",
    image: "images/trois-mai-1808.webp",
     anchor: "#trois-mai-1808",
      position: { x: 21.5, y: 55.5 }
    },
  
    {
      id: "annonciation",
      title: "L'Annonciation",
      artist: "Fra Angelico",
      floor: 0,
      room: "56B",
      year: "1426",
      medium: "Tempera sur panneau de bois - 162,3 × 191,5 cm",
    image: "images/annonciation.webp",
     anchor: "#annonciation",
      position: { x: 55, y: 63.5 }
    },
  
    {
      id: "charles-quint-muhlberg",
      title: "Portrait équestre de Charles Quint à Mühlberg",
      artist: "Le Titien",
      floor: 1,
      room: "27",
      year: "1548",
      medium: "Huile sur toile - 335 x 283 cm",
    image: "images/charles-quint-muhlberg.webp",
     anchor: "#charles-quint-muhlberg",
      position: { x: 48, y: 35 }
    },
  
    {
      id: "david-goliath",
      title: "David vainqueur de Goliath",
      artist: "Caravage",
      floor: 1,
      room: "7A",
      year: "entre 1599 et 1605",
      medium: "Huile sur toile - 110 × 91 cm",
    image: "images/david-goliath.webp",
     anchor: "#david-goliath",
        position: { x: 57, y: 43 }
    },
  
    {
      id: "isaac-jacob",
      title: "Isaac et Jacob",
      artist: "Ribera",
      floor: 1,
      room: "9",
      year: "1637",
      medium: "Huile sur toile - 110 × 291.5 cm",
    image: "images/isaac-jacob.webp",
     anchor: "#isaac-jacob",
      position: { x: 54, y: 40 }
    },
  
    {
      id: "chevalier-main-poitrine",
      title: "Le chevalier à la main sur la poitrine",
      artist: "Le Greco",
      floor: 1,
      room: "8B",
      year: "1578-1580",
      medium: "peinture à l'huile sur toile - 81,8 × 65,8 cm",
    image: "images/chevalier-main-poitrine.webp",
     anchor: "#chevalier-main-poitrine",
      position: { x: 62, y: 39.5 }
    },
  
    {
      id: "lavement-pieds",
      title: "Le Lavement des pieds",
      artist: "Tintoret",
      floor: 1,
      room: "25",
      year: "1548-1549",
      medium: "Huile sur toile - 210 × 533 cm",
    image: "images/lavement-pieds.webp",
     anchor: "#lavement-pieds",
      position: { x: 65, y: 39 }
    },
  
    {
      id: "les-menines",
      title: "Les Ménines",
      artist: "Diego Velázquez",
      floor: 1,
      room: "12",
      year: "1656",
      medium: "Huile sur toile, 320 x 279 cm",
    image: "images/les-menines.webp",
     anchor: "#les-menines",
      position: { x: 46, y: 36 }
    },
  
    {
      id: "immaculee-conception",
      title: "L'Immaculée Conception dite « Los Venerables »",
      artist: "Murillo",
      floor: 1,
      room: "16",
      year: "Entre 1660 et 1665",
      medium: "Huile sur toile - 274 × 190 cm",
    image: "images/immaculee-conception.webp",
     anchor: "#immaculee-conception",
      position: { x: 26, y: 34 }
    },
  
    {
      id: "trois-graces",
      title: "Les Trois Grâces",
      artist: "Rubens",
      floor: 1,
      room: "29",
      year: "1639",
      medium: "Huile sur toile - 221 × 181 cm",
    image: "images/trois-graces.webp",
     anchor: "#trois-graces",
      position: { x: 33, y: 32 }
    },
  
    {
      id: "famille-charles-iv",
      title: "La Famille de Charles IV",
      artist: "Goya",
      floor: 1,
      room: "32",
      year: "1800",
      medium: "Huile sur toile - 280 × 336 cm",
    image: "images/famille-charles-iv.webp",
     anchor: "#famille-charles-iv",
      position: { x: 28, y: 30 }
    },
  
    {
      id: "maja-nue",
      title: "La Maja nue",
      artist: "Goya",
      floor: 1,
      room: "38",
      year: "1795-1800",
      medium: "Huile sur toile - 97 × 190 cm",
    image: "images/maja-nue.webp",
     anchor: "#maja",
      position: { x: 22, y: 25.5 }
    },
  
    {
      id: "judith-holoferne",
      title: "Judith lors du banquet d'Holopherne",
      artist: "Rembrandt",
      floor: 2,
      room: "76",
      year: "1634",
      medium: "Huile sur toile - 143 × 154,7 cm",
    image: "images/judith-holoferne.webp",
     anchor: "#judith-holoferne",
      position: { x: 90, y: 17 }
    },
  
    {
      id: "aire-ete",
      title: "L'aire ou l'Été",
      artist: "Goya",
      floor: 2,
      room: "85",
      year: "1786",
      medium: "Huile sur toile - 276 × 641 cm",
    image: "images/aire-ete.webp",
     anchor: "#aire-ete",
      position: { x: 13, y: 2 }
    },
  
    {
      id: "saturne",
      title: "Saturne dévorant un de ses fils",
      artist: "Goya",
      floor: 0,
      room: "67",
      year: "1819-1823",
      medium: "Peinture murale transférée sur toile - 146 × 83 cm",
    image: "images/saturne.webp",
     anchor: "#saturne",
      position: { x: 10, y: 53.5 }
   }
  
  ]
};
