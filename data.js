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
      medium: "Huile sur bois - 186 × 325 cm",
    image: "images/jardin-des-delices.webp",
     anchor: "#jardin-des-delices",
     featured: true,

      position: { x: 49, y: 65 }
    },
  
    {
      id: "triptyque-adoration-mages",
      title: "Triptyque de l'Adoration des Mages",
      artist: "Hans Memling",
      floor: 0,
      room: "58A",
      year: "1470 - 1472",
      medium: "Huile sur bois - 95 × 271 cm",
    image: "images/triptyque-adoration-mages.webp",
      position: { x: 56, y: 66.5 }
    },
  
    {
      id: "descente",
      title: "La Descente de croix",
      artist: "Van der Weyden",
      floor: 0,
      room: "58",
      year: "Vers 1443",
      medium: "Huile sur bois - 204 × 259 cm",
    image: "images/descente.webp",
      position: { x: 58, y: 66 }
    },

    {
      id: "triomphe-mort",
      title: "Le Triomphe de la Mort",
      artist: "Pieter Bruegel",
      floor: 0,
      room: "55A",
      year: "1552-1563",
      medium: "Huile sur panneau - 117 × 162 cm",
    image: "images/triomphe-mort.webp",
      position: { x: 46, y: 64.5 }
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
      position: { x: 53.5, y: 62.5 }
    },
  
    {
      id: "annonciation",
      title: "L'Annonciation",
      artist: "Fra Angelico",
      floor: 0,
      room: "56B",
      year: "1425 - 1426",
      medium: "Tempera sur panneau de bois - 190 × 191 cm",
    image: "images/annonciation.webp",
     anchor: "#annonciation",
     featured: true,
      position: { x: 55, y: 63.5 }
    },

    {
      id: "cardinal",
      title: "Le Cardinal",
      artist: "Rafael",
      floor: 0,
      room: "49",
      year: "1510 - 1511",
      medium: "Huile sur bois - 79 × 61 cm",
    image: "images/cardinal.webp",
      position: { x: 55, y: 61.5 }
    },

    {
      id: "testament-isabelle",
      title: "Le Testament de la reine Isabelle",
      artist: "Eduardo Rosales",
      floor: 0,
      room: "61B",
      year: "1684",
      medium: "Huile sur toile - 287 × 398 cm",
    image: "images/testament-isabelle.webp",
      position: { x: 35, y: 59 }
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
     featured: true,

      position: { x: 21.5, y: 56.5 }
    },
  
    {
      id: "execution-torrijos",
      title: "Exécution de Torrijos et ses compagnons",
      artist: "Goya",
      floor: 0,
      room: "75",
      year: "1888",
      medium: "Huile sur toile - 392 × 602 cm",
    image: "images/execution-torrijos.webp",
      position: { x: 36.5, y: 57.5 }
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
      position: { x: 28, y: 30 }
    },
  
    {
      id: "maja-nue",
      title: "La Maja nue",
      artist: "Goya",
      floor: 1,
      room: "38",
      year: "1795-1800",
      medium: "Huile sur toile - 97 × 191 cm",
    image: "images/maja-nue.webp",
     anchor: "#maja-nue",
     featured: true,
      position: { x: 22, y: 25.5 }
    },
  
    {
      id: "maja-vetue",
      title: "La Maja vêtue",
      artist: "Goya",
      floor: 1,
      room: "38",
      year: "1800-1807",
      medium: "Huile sur toile - 95 × 188 cm",
    image: "images/maja-vetue.webp",
      position: { x: 19, y: 26 }
    },

    {
      id: "immaculee-conception",
      title: "L’immaculée Conception",
      artist: "Tiepolo",
      floor: 1,
      room: "23",
      year: "1767-1769",
      medium: "Huile sur toile - 281 × 155 cm",
    image: "images/immaculee-conception.webp",
      position: { x: 7, y: 29 }
    },

    {
      id: "aire-ete",
      title: "L'aire ou l'Été",
      artist: "Goya",
      floor: 2,
      room: "85",
      year: "1786",
      medium: "Huile sur toile - 277 × 642 cm",
    image: "images/aire-ete.webp",
      position: { x: 13, y: 2 }
    },

    {
      id: "saturne",
      title: "Saturne dévorant un de ses fils",
      artist: "Goya",
      floor: 0,
      room: "67",
      year: "1820-1823",
      medium: "Revêtement mural transféré sur toile - 143 × 81 cm",
    image: "images/saturne.webp",
      position: { x: 10, y: 54 }
    },

    {
      id: "chevalier-main-poitrine",
      title: "Le chevalier à la main sur la poitrine",
      artist: "Le Greco",
      floor: 1,
      room: "8B",
      year: "Vers 1580",
      medium: "peinture à l'huile sur toile - 82 × 66 cm",
    image: "images/chevalier-main-poitrine.webp",
      position: { x: 62, y: 39.5 }
    },

    {
      id: "isaac-jacob",
      title: "Isaac et Jacob",
      artist: "Ribera",
      floor: 1,
      room: "9",
      year: "1637",
      medium: "Huile sur toile - 110 × 291 cm",
    image: "images/isaac-jacob.webp",
      position: { x: 54, y: 40 }
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
     featured: true,
      position: { x: 46, y: 36 }
    },

    {
      id: "fileuses",
      title: "Les Fileuses",
      artist: "Diego Velázquez",
      floor: 1,
      room: "15A",
      year: "1655-1660",
      medium: "Huile sur toile - 220 x 289 cm",
    image: "images/fileuses.webp",
      position: { x: 30, y: 36 }
   },

   {
    id: "triomphe-bacchus",
    title: "Le Triomphe de Bacchus",
    artist: "Diego Velázquez",
    floor: 1,
    room: "10",
    year: "1628-1629",
    medium: "Huile sur toile - 165 x 225 cm",
  image: "images/triomphe-bacchus.webp",
    position: { x: 47, y: 39 }
   },   

   {
    id: "adoration-mages",
    title: "L’Adoration des Mages",
    artist: "Juan Bautista",
    floor: 1,
    room: "9B",
    year: "1612-1614",
    medium: "Huile sur toile - 315 x 175 cm",
  image: "images/adoration-mages.webp",
    position: { x: 55, y: 38.5 }
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
      position: { x: 48, y: 35 }
    },
  
    {
      id: "david-goliath",
      title: "David vainqueur de Goliath",
      artist: "Caravage",
      floor: 1,
      room: "7A",
      year: "1600",
      medium: "Huile sur toile - 110 × 91 cm",
    image: "images/david-goliath.webp",
        position: { x: 57, y: 43 }
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
      position: { x: 65, y: 39 }
    },
  
    {
      id: "los-venerables",
      title: "L'Immaculée Conception dite « Los Venerables »",
      artist: "Murillo",
      floor: 1,
      room: "16",
      year: "1660-1665",
      medium: "Huile sur toile - 274 × 190 cm",
    image: "images/los-venerables.webp",
      position: { x: 27, y: 34 }
    },
  
    {
      id: "trois-graces",
      title: "Les Trois Grâces",
      artist: "Rubens",
      floor: 1,
      room: "29",
      year: "1630-1635",
      medium: "Huile sur toile - 220 × 182 cm",
    image: "images/trois-graces.webp",
     anchor: "#trois-graces",
     featured: true,
      position: { x: 33, y: 32 }
    },
  
    {
      id: "jardin-amour",
      title: "Le Jardin de l’Amour",
      artist: "Rubens",
      floor: 1,
      room: "29",
      year: "1630-1635",
      medium: "Huile sur toile - 199 × 286 cm",
    image: "images/jardin-amour.webp",
      position: { x: 30, y: 31 }
    },   

    {
      id: "judith-holoferne",
      title: "Judith lors du banquet d'Holopherne",
      artist: "Rembrandt",
      floor: 2,
      room: "76",
      year: "1634",
      medium: "Huile sur toile - 143 × 155 cm",
    image: "images/judith-holoferne.webp",
      position: { x: 90, y: 17 }
    },

    {
      id: "sens-vue",
      title: "Les Sens : La Vue",
      artist: "Jan Brueghel et Rubens",
      floor: 2,
      room: "83",
      year: "1617",
      medium: "Huile sur panneau - 65 × 110 cm",
    image: "images/sens-vue.webp",
      position: { x: 78, y: 20 }
    },

    {
      id: "embarquement-sainte-paule",
      title: "Paysage avec l’embarquement à Ostie de sainte Paule Romaine",
      artist: "Claude Lorrain",
      floor: 1,
      room: "2",
      year: "1639",
      medium: "Huile sur toile - 211 × 145 cm",
    image: "images/embarquement-sainte-paule.webp",
      position: { x: 76, y: 45 }
    },

    {
      id: "parnasse",
      title: "Le Parnasse",
      artist: "Claude Lorrain",
      floor: 1,
      room: "3",
      year: "1630-1631",
      medium: "Huile sur toile - 145 × 197 cm",
    image: "images/parnasse.webp",
      position: { x: 73, y: 44 }
    },   
  
  ]
};
