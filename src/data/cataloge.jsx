// data/cataloge.jsx
const catalogoModelos = [
    {
        id: 1,
        category: "Planes",
        name: "Heinkel H111",
        description: "A meticulously detailed 1/72 scale model of the iconic Germany fighter plane.",
        scale: "1/72",
        image: '/gallery/_RYC0112.JPG',
        labels: ["WWII", "Germany", "Fighter", "IPMS Orizaba 2024"]
      },
      {
        id: 2,
        category: "Ships",
        name: "Fujimi Chibi Maruko",
        description: "",
        scale: "1/350",
        image: '/gallery/_RYC0145.JPG',
        labels: ["IPMS Orizaba 2024"]
      },
      {
        id: 3,
        category: "Vehicles",
        name: "Batimoviles",
        description: "Varios modelos de batimoviles.",
        scale: "1/35",
        image: '/gallery/_RYC0113.JPG',
        labels: ["WWII", "Soviet", "Tank"]
      },
      {
        id: 4,
        category: "Fantasy",
        name: "",
        description: "",
        scale: "1/24",
        image: '',
        labels: ["Dragon", "Fantasy", "Diorama"]
      },
      {
        id: 5,
        category: "",
        name: "",
        description: "",
        scale: "1/144",
        image: '',
        labels: ["Star Wars", "Spacecraft", "Sci-Fi"]
      },
      {
        id: 6,
        category: "Space Vehicles",
        name: "Gemini GT4",
        description: "",
        scale: "",
        image: '/gallery/_RYC0116.JPG',
        labels: ["NASA", "Moon Landing", "Historical"]
      },
      {
        id: 7,
        category: "",
        name: "",
        description: "A dramatic 1/35 scale diorama depicting the Normandy landings of World War II.",
        scale: "1/35",
        image: '',
        labels: ["WWII", "Historical", "Military"]
      },
      {
        id: 8,
        category: "Planes",
        name: "F-4 PHANTOM II, U. S. NAVY & U. S. MARINE",
        description: "",
        scale: "1/35",
        image: '/gallery/_RYC0118.JPG',
        labels: ["WWII", "US", "Military", "IPMS Orizaba 2024"]
      },
      {
        id: 9,
        category: "Helicopter",
        name: "D-Day Beach Landing",
        description: "",
        scale: "1/35",
        image: '/gallery/_RYC0122.JPG',
        labels: ["WWII", "Historical", "Military"]
      },
      {
        id: 10,
        category: "Planes",
        name: "F-4 PHANTOM II, U. S. NAVY & U. S. MARINE",
        description: "",
        scale: "1/35",
        image: '/gallery/_RYC0120.JPG',
        labels: ["WWII", "Historical", "Military"]
      },
      {
        id: 11,
        category: "Space Vehicles",
        name: "Gemini GT4",
        description: "",
        scale: "",
        image: '/gallery/_RYC0117.JPG',
        labels: ["NASA", "Moon Landing", "Historical"]
      },
      {
        id: 12,
        category: "Planes",
        name: "Thunderbolt Eggplane",
        description: "",
        scale: "1/35",
        image: '/gallery/_RYC0193.JPG',
        labels: ["WWII", "Historical", "Military"]
      },
      {
        id: 13,
        category: "Ships",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0147.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 14,
        category: "Ships",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0149.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 15,
        category: "Vehicles",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0153.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 16,
        category: "Dioramas",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0165.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 17,
        category: "Dioramas",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0151.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 18,
        category: "Tanks",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0160.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 19,
        category: "Vehicles",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0178.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 20,
        category: "Vehicles",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0181.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 21,
        category: "Helicopter",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0197.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 22,
        category: "Vehicles",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0203.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 23,
        category: "Vehicles",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0213.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 24,
        category: "Vehicles",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0224.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 25,
        category: "Vehicles",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0251.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 26,
        category: "Vehicles",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0253.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 27,
        category: "Vehicles",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0203.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 28,
        category: "Sci-Fi",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0257.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 29,
        category: "Sci-Fi",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0258.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 30,
        category: "Vehicles",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0302.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 31,
        category: "Vehicles",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0305.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 32,
        category: "Planes",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0317.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 33,
        category: "Tanks",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0325.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 34,
        category: "Planes",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0365.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
      {
        id: 35,
        category: "Planes",
        name: "USS Missouri",
        description: "A 1/350 scale model of the famous American battleship, with intricate deck details.",
        scale: "1/350",
        image: '/gallery/_RYC0366.JPG',
        labels: ["WWII", "American", "Battleship"]
      },
  ];
  
  export default catalogoModelos;
  