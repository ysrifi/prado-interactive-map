/* =========================
   CONFIGURATION DES ÉTAGES
========================= */
const museumData = {
  defaultFloor: 0,
  floors: {
    "2": {
      label: "Étage 2",
      area: { x: 0, y: 0, width: 100, height: 34 }
    },
    "1": {
      label: "Étage 1",
      area: { x: 0, y: 34, width: 100, height: 32 }
    },
    "0": {
      label: "Étage 0",
      area: { x: 0, y: 66, width: 100, height: 34 }
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
      position: {
        "x": 46.77,
        "y": 89.9
      }
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
      position: {
        "x": 54.43,
        "y": 92.74
      }
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
      position: {
        "x": 59.8,
        "y": 90.29
      }
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
      position: {
        "x": 42.89,
        "y": 88.73
      }
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
      position: {
        "x": 52.14,
        "y": 84.83
      }
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
      position: {
        "x": 55.23,
        "y": 86.23
      }
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
      position: {
        "x": 65.17,
        "y": 86.28
      }
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
      position: {
        "x": 36.26,
        "y": 79.88
      }
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
      position: {
        "x": 20.37,
        "y": 77.65
      }
    },
    {
      id: "execution-torrijos",
      title: "Exécution de Torrijos et ses compagnons",
      artist: "Antonio Gisbert",
      floor: 0,
      room: "75",
      year: "1888",
      medium: "Huile sur toile - 392 × 602 cm",
    image: "images/execution-torrijos.webp",
      position: {
        "x": 36.71,
        "y": 77.15
      }
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
      position: {
        "x": 27.29,
        "y": 41.87
      }
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
      position: {
        "x": 19.29,
        "y": 35.26
      }
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
      position: {
        "x": 15.29,
        "y": 35.75
      }
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
      position: {
        "x": 4.57,
        "y": 40.13
      }
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
      position: {
        "x": 12.57,
        "y": 6.66
      }
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
      position: {
        "x": 4.14,
        "y": 72.64
      }
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
      position: {
        "x": 59.23,
        "y": 55.05
      }
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
      position: {
        "x": 51.46,
        "y": 56
      }
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
      position: {
        "x": 43.69,
        "y": 52.71
      }
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
      position: {
        "x": 32.42,
        "y": 53.52
      }
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
    position: {
      "x": 47.91,
      "y": 54.83
    }
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
    position: {
      "x": 55.28,
      "y": 54.09
    }
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
      position: {
        "x": 49.74,
        "y": 49.26
      }
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
        position: {
          "x": 55.11,
          "y": 60.51
        }
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
      position: {
        "x": 66.54,
        "y": 54.5
      }
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
      position: {
        "x": 32.86,
        "y": 50.01
      }
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
      position: {
        "x": 37.4,
        "y": 44.92
      }
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
      position: {
        "x": 33.14,
        "y": 44.03
      }
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
      position: {
        "x": 95.14,
        "y": 27.33
      }
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
      position: {
        "x": 81.57,
        "y": 32.41
      }
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
      position: {
        "x": 81.86,
        "y": 64.85
      }
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
      position: {
        "x": 76.83,
        "y": 62.79
      }
    },   
  ]
};
