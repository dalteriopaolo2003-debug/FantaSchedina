import { firebaseConfig, DATABASE_PATH, FOOTBALL_API_CONFIG, OWNER_CONFIG } from "./firebase-config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase, ref, onValue, set, update, remove } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

const SERIE_A_2026_27 = [
  {
    "id": "1",
    "n": 1,
    "phase": "ANDATA",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "ATALANTA",
        "teamB": "SASSUOLO"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "BOLOGNA",
        "teamB": "LAZIO"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "FROSINONE",
        "teamB": "JUVENTUS"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "GENOA",
        "teamB": "NAPOLI"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "INTER",
        "teamB": "MONZA"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "PARMA",
        "teamB": "CAGLIARI"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "ROMA",
        "teamB": "FIORENTINA"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "TORINO",
        "teamB": "MILAN"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "UDINESE",
        "teamB": "COMO"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "VENEZIA",
        "teamB": "LECCE"
      }
    ]
  },
  {
    "id": "2",
    "n": 2,
    "phase": "ANDATA",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "ATALANTA",
        "teamB": "BOLOGNA"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "CAGLIARI",
        "teamB": "INTER"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "FIORENTINA",
        "teamB": "FROSINONE"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "JUVENTUS",
        "teamB": "PARMA"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "LAZIO",
        "teamB": "GENOA"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "LECCE",
        "teamB": "ROMA"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "MILAN",
        "teamB": "VENEZIA"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "MONZA",
        "teamB": "UDINESE"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "NAPOLI",
        "teamB": "COMO"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "SASSUOLO",
        "teamB": "TORINO"
      }
    ]
  },
  {
    "id": "3",
    "n": 3,
    "phase": "ANDATA",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "BOLOGNA",
        "teamB": "SASSUOLO"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "CAGLIARI",
        "teamB": "LECCE"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "FIORENTINA",
        "teamB": "TORINO"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "FROSINONE",
        "teamB": "VENEZIA"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "GENOA",
        "teamB": "COMO"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "INTER",
        "teamB": "NAPOLI"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "JUVENTUS",
        "teamB": "MILAN"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "PARMA",
        "teamB": "MONZA"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "ROMA",
        "teamB": "ATALANTA"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "UDINESE",
        "teamB": "LAZIO"
      }
    ]
  },
  {
    "id": "4",
    "n": 4,
    "phase": "ANDATA",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "ATALANTA",
        "teamB": "CAGLIARI"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "COMO",
        "teamB": "PARMA"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "GENOA",
        "teamB": "FROSINONE"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "INTER",
        "teamB": "UDINESE"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "LAZIO",
        "teamB": "MILAN"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "LECCE",
        "teamB": "MONZA"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "NAPOLI",
        "teamB": "BOLOGNA"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "SASSUOLO",
        "teamB": "JUVENTUS"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "TORINO",
        "teamB": "ROMA"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "VENEZIA",
        "teamB": "FIORENTINA"
      }
    ]
  },
  {
    "id": "5",
    "n": 5,
    "phase": "ANDATA",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "BOLOGNA",
        "teamB": "TORINO"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "FIORENTINA",
        "teamB": "NAPOLI"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "FROSINONE",
        "teamB": "COMO"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "JUVENTUS",
        "teamB": "ATALANTA"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "MILAN",
        "teamB": "LECCE"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "MONZA",
        "teamB": "SASSUOLO"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "PARMA",
        "teamB": "GENOA"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "ROMA",
        "teamB": "INTER"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "UDINESE",
        "teamB": "CAGLIARI"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "VENEZIA",
        "teamB": "LAZIO"
      }
    ]
  },
  {
    "id": "6",
    "n": 6,
    "phase": "ANDATA",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "ATALANTA",
        "teamB": "VENEZIA"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "CAGLIARI",
        "teamB": "JUVENTUS"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "COMO",
        "teamB": "ROMA"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "GENOA",
        "teamB": "FIORENTINA"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "INTER",
        "teamB": "PARMA"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "LAZIO",
        "teamB": "MONZA"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "LECCE",
        "teamB": "BOLOGNA"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "NAPOLI",
        "teamB": "FROSINONE"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "SASSUOLO",
        "teamB": "MILAN"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "TORINO",
        "teamB": "UDINESE"
      }
    ]
  },
  {
    "id": "7",
    "n": 7,
    "phase": "ANDATA",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "BOLOGNA",
        "teamB": "INTER"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "FIORENTINA",
        "teamB": "COMO"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "FROSINONE",
        "teamB": "SASSUOLO"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "JUVENTUS",
        "teamB": "LAZIO"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "MILAN",
        "teamB": "ATALANTA"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "MONZA",
        "teamB": "CAGLIARI"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "PARMA",
        "teamB": "TORINO"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "ROMA",
        "teamB": "GENOA"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "UDINESE",
        "teamB": "LECCE"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "VENEZIA",
        "teamB": "NAPOLI"
      }
    ]
  },
  {
    "id": "8",
    "n": 8,
    "phase": "ANDATA",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "ATALANTA",
        "teamB": "FROSINONE"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "CAGLIARI",
        "teamB": "BOLOGNA"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "COMO",
        "teamB": "SASSUOLO"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "GENOA",
        "teamB": "VENEZIA"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "INTER",
        "teamB": "FIORENTINA"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "LAZIO",
        "teamB": "PARMA"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "LECCE",
        "teamB": "JUVENTUS"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "NAPOLI",
        "teamB": "ROMA"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "TORINO",
        "teamB": "MONZA"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "UDINESE",
        "teamB": "MILAN"
      }
    ]
  },
  {
    "id": "9",
    "n": 9,
    "phase": "ANDATA",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "FIORENTINA",
        "teamB": "ATALANTA"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "FROSINONE",
        "teamB": "LECCE"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "GENOA",
        "teamB": "JUVENTUS"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "MILAN",
        "teamB": "BOLOGNA"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "MONZA",
        "teamB": "NAPOLI"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "PARMA",
        "teamB": "UDINESE"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "ROMA",
        "teamB": "CAGLIARI"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "SASSUOLO",
        "teamB": "LAZIO"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "TORINO",
        "teamB": "COMO"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "VENEZIA",
        "teamB": "INTER"
      }
    ]
  },
  {
    "id": "10",
    "n": 10,
    "phase": "ANDATA",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "ATALANTA",
        "teamB": "PARMA"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "BOLOGNA",
        "teamB": "MONZA"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "COMO",
        "teamB": "VENEZIA"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "FROSINONE",
        "teamB": "TORINO"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "JUVENTUS",
        "teamB": "NAPOLI"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "LAZIO",
        "teamB": "CAGLIARI"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "LECCE",
        "teamB": "GENOA"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "MILAN",
        "teamB": "INTER"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "SASSUOLO",
        "teamB": "FIORENTINA"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "UDINESE",
        "teamB": "ROMA"
      }
    ]
  },
  {
    "id": "11",
    "n": 11,
    "phase": "ANDATA",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "CAGLIARI",
        "teamB": "FROSINONE"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "FIORENTINA",
        "teamB": "JUVENTUS"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "GENOA",
        "teamB": "MILAN"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "INTER",
        "teamB": "COMO"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "MONZA",
        "teamB": "ATALANTA"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "NAPOLI",
        "teamB": "LAZIO"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "PARMA",
        "teamB": "BOLOGNA"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "ROMA",
        "teamB": "SASSUOLO"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "TORINO",
        "teamB": "LECCE"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "VENEZIA",
        "teamB": "UDINESE"
      }
    ]
  },
  {
    "id": "12",
    "n": 12,
    "phase": "ANDATA",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "ATALANTA",
        "teamB": "INTER"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "BOLOGNA",
        "teamB": "UDINESE"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "COMO",
        "teamB": "CAGLIARI"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "JUVENTUS",
        "teamB": "VENEZIA"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "LAZIO",
        "teamB": "LECCE"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "MILAN",
        "teamB": "FROSINONE"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "MONZA",
        "teamB": "FIORENTINA"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "NAPOLI",
        "teamB": "TORINO"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "PARMA",
        "teamB": "ROMA"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "SASSUOLO",
        "teamB": "GENOA"
      }
    ]
  },
  {
    "id": "13",
    "n": 13,
    "phase": "ANDATA",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "CAGLIARI",
        "teamB": "MILAN"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "COMO",
        "teamB": "JUVENTUS"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "FROSINONE",
        "teamB": "PARMA"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "INTER",
        "teamB": "GENOA"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "LECCE",
        "teamB": "ATALANTA"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "ROMA",
        "teamB": "MONZA"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "SASSUOLO",
        "teamB": "NAPOLI"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "TORINO",
        "teamB": "LAZIO"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "UDINESE",
        "teamB": "FIORENTINA"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "VENEZIA",
        "teamB": "BOLOGNA"
      }
    ]
  },
  {
    "id": "14",
    "n": 14,
    "phase": "ANDATA",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "BOLOGNA",
        "teamB": "ROMA"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "FIORENTINA",
        "teamB": "CAGLIARI"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "FROSINONE",
        "teamB": "INTER"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "GENOA",
        "teamB": "TORINO"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "JUVENTUS",
        "teamB": "UDINESE"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "LAZIO",
        "teamB": "ATALANTA"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "MILAN",
        "teamB": "PARMA"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "MONZA",
        "teamB": "COMO"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "NAPOLI",
        "teamB": "LECCE"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "VENEZIA",
        "teamB": "SASSUOLO"
      }
    ]
  },
  {
    "id": "15",
    "n": 15,
    "phase": "ANDATA",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "ATALANTA",
        "teamB": "GENOA"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "CAGLIARI",
        "teamB": "VENEZIA"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "COMO",
        "teamB": "BOLOGNA"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "INTER",
        "teamB": "TORINO"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "JUVENTUS",
        "teamB": "MONZA"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "LAZIO",
        "teamB": "ROMA"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "LECCE",
        "teamB": "SASSUOLO"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "NAPOLI",
        "teamB": "MILAN"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "PARMA",
        "teamB": "FIORENTINA"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "UDINESE",
        "teamB": "FROSINONE"
      }
    ]
  },
  {
    "id": "16",
    "n": 16,
    "phase": "ANDATA",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "ATALANTA",
        "teamB": "NAPOLI"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "FIORENTINA",
        "teamB": "BOLOGNA"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "FROSINONE",
        "teamB": "LAZIO"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "GENOA",
        "teamB": "UDINESE"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "LECCE",
        "teamB": "INTER"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "MILAN",
        "teamB": "COMO"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "ROMA",
        "teamB": "JUVENTUS"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "SASSUOLO",
        "teamB": "PARMA"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "TORINO",
        "teamB": "CAGLIARI"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "VENEZIA",
        "teamB": "MONZA"
      }
    ]
  },
  {
    "id": "17",
    "n": 17,
    "phase": "ANDATA",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "BOLOGNA",
        "teamB": "JUVENTUS"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "CAGLIARI",
        "teamB": "GENOA"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "COMO",
        "teamB": "LECCE"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "FIORENTINA",
        "teamB": "LAZIO"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "INTER",
        "teamB": "SASSUOLO"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "MONZA",
        "teamB": "MILAN"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "PARMA",
        "teamB": "NAPOLI"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "ROMA",
        "teamB": "FROSINONE"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "TORINO",
        "teamB": "VENEZIA"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "UDINESE",
        "teamB": "ATALANTA"
      }
    ]
  },
  {
    "id": "18",
    "n": 18,
    "phase": "ANDATA",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "ATALANTA",
        "teamB": "COMO"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "FROSINONE",
        "teamB": "BOLOGNA"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "GENOA",
        "teamB": "MONZA"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "JUVENTUS",
        "teamB": "TORINO"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "LAZIO",
        "teamB": "INTER"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "LECCE",
        "teamB": "PARMA"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "MILAN",
        "teamB": "FIORENTINA"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "NAPOLI",
        "teamB": "CAGLIARI"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "SASSUOLO",
        "teamB": "UDINESE"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "VENEZIA",
        "teamB": "ROMA"
      }
    ]
  },
  {
    "id": "19",
    "n": 19,
    "phase": "ANDATA",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "BOLOGNA",
        "teamB": "GENOA"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "CAGLIARI",
        "teamB": "SASSUOLO"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "COMO",
        "teamB": "LAZIO"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "FIORENTINA",
        "teamB": "LECCE"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "INTER",
        "teamB": "JUVENTUS"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "MONZA",
        "teamB": "FROSINONE"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "PARMA",
        "teamB": "VENEZIA"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "ROMA",
        "teamB": "MILAN"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "TORINO",
        "teamB": "ATALANTA"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "UDINESE",
        "teamB": "NAPOLI"
      }
    ]
  },
  {
    "id": "20",
    "n": 20,
    "phase": "RITORNO",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "ATALANTA",
        "teamB": "ROMA"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "CAGLIARI",
        "teamB": "COMO"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "JUVENTUS",
        "teamB": "GENOA"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "LAZIO",
        "teamB": "BOLOGNA"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "LECCE",
        "teamB": "UDINESE"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "MILAN",
        "teamB": "TORINO"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "NAPOLI",
        "teamB": "FIORENTINA"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "PARMA",
        "teamB": "INTER"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "SASSUOLO",
        "teamB": "MONZA"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "VENEZIA",
        "teamB": "FROSINONE"
      }
    ]
  },
  {
    "id": "21",
    "n": 21,
    "phase": "RITORNO",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "BOLOGNA",
        "teamB": "ATALANTA"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "COMO",
        "teamB": "NAPOLI"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "FIORENTINA",
        "teamB": "SASSUOLO"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "FROSINONE",
        "teamB": "MILAN"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "GENOA",
        "teamB": "PARMA"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "INTER",
        "teamB": "VENEZIA"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "JUVENTUS",
        "teamB": "CAGLIARI"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "LECCE",
        "teamB": "TORINO"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "MONZA",
        "teamB": "LAZIO"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "ROMA",
        "teamB": "UDINESE"
      }
    ]
  },
  {
    "id": "22",
    "n": 22,
    "phase": "RITORNO",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "ATALANTA",
        "teamB": "FIORENTINA"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "CAGLIARI",
        "teamB": "PARMA"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "GENOA",
        "teamB": "LECCE"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "LAZIO",
        "teamB": "VENEZIA"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "MILAN",
        "teamB": "JUVENTUS"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "MONZA",
        "teamB": "ROMA"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "NAPOLI",
        "teamB": "INTER"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "SASSUOLO",
        "teamB": "COMO"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "TORINO",
        "teamB": "FROSINONE"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "UDINESE",
        "teamB": "BOLOGNA"
      }
    ]
  },
  {
    "id": "23",
    "n": 23,
    "phase": "RITORNO",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "ATALANTA",
        "teamB": "LAZIO"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "BOLOGNA",
        "teamB": "MILAN"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "COMO",
        "teamB": "MONZA"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "FIORENTINA",
        "teamB": "UDINESE"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "INTER",
        "teamB": "CAGLIARI"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "JUVENTUS",
        "teamB": "SASSUOLO"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "LECCE",
        "teamB": "NAPOLI"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "PARMA",
        "teamB": "FROSINONE"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "ROMA",
        "teamB": "TORINO"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "VENEZIA",
        "teamB": "GENOA"
      }
    ]
  },
  {
    "id": "24",
    "n": 24,
    "phase": "RITORNO",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "BOLOGNA",
        "teamB": "COMO"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "CAGLIARI",
        "teamB": "LAZIO"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "FROSINONE",
        "teamB": "FIORENTINA"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "GENOA",
        "teamB": "ATALANTA"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "INTER",
        "teamB": "MILAN"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "MONZA",
        "teamB": "LECCE"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "NAPOLI",
        "teamB": "JUVENTUS"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "ROMA",
        "teamB": "PARMA"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "TORINO",
        "teamB": "SASSUOLO"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "UDINESE",
        "teamB": "VENEZIA"
      }
    ]
  },
  {
    "id": "25",
    "n": 25,
    "phase": "RITORNO",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "ATALANTA",
        "teamB": "MONZA"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "COMO",
        "teamB": "TORINO"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "FIORENTINA",
        "teamB": "INTER"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "JUVENTUS",
        "teamB": "BOLOGNA"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "LAZIO",
        "teamB": "NAPOLI"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "LECCE",
        "teamB": "FROSINONE"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "MILAN",
        "teamB": "GENOA"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "SASSUOLO",
        "teamB": "ROMA"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "UDINESE",
        "teamB": "PARMA"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "VENEZIA",
        "teamB": "CAGLIARI"
      }
    ]
  },
  {
    "id": "26",
    "n": 26,
    "phase": "RITORNO",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "BOLOGNA",
        "teamB": "LECCE"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "CAGLIARI",
        "teamB": "UDINESE"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "COMO",
        "teamB": "MILAN"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "FROSINONE",
        "teamB": "NAPOLI"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "GENOA",
        "teamB": "LAZIO"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "INTER",
        "teamB": "ATALANTA"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "MONZA",
        "teamB": "JUVENTUS"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "PARMA",
        "teamB": "SASSUOLO"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "ROMA",
        "teamB": "VENEZIA"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "TORINO",
        "teamB": "FIORENTINA"
      }
    ]
  },
  {
    "id": "27",
    "n": 27,
    "phase": "RITORNO",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "ATALANTA",
        "teamB": "TORINO"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "FIORENTINA",
        "teamB": "VENEZIA"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "JUVENTUS",
        "teamB": "ROMA"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "LAZIO",
        "teamB": "FROSINONE"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "LECCE",
        "teamB": "COMO"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "MILAN",
        "teamB": "CAGLIARI"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "MONZA",
        "teamB": "GENOA"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "NAPOLI",
        "teamB": "PARMA"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "SASSUOLO",
        "teamB": "BOLOGNA"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "UDINESE",
        "teamB": "INTER"
      }
    ]
  },
  {
    "id": "28",
    "n": 28,
    "phase": "RITORNO",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "BOLOGNA",
        "teamB": "NAPOLI"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "CAGLIARI",
        "teamB": "FIORENTINA"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "COMO",
        "teamB": "UDINESE"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "FROSINONE",
        "teamB": "MONZA"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "GENOA",
        "teamB": "ROMA"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "LAZIO",
        "teamB": "JUVENTUS"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "MILAN",
        "teamB": "SASSUOLO"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "PARMA",
        "teamB": "LECCE"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "TORINO",
        "teamB": "INTER"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "VENEZIA",
        "teamB": "ATALANTA"
      }
    ]
  },
  {
    "id": "29",
    "n": 29,
    "phase": "RITORNO",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "ATALANTA",
        "teamB": "MILAN"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "FIORENTINA",
        "teamB": "GENOA"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "INTER",
        "teamB": "FROSINONE"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "JUVENTUS",
        "teamB": "COMO"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "MONZA",
        "teamB": "BOLOGNA"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "NAPOLI",
        "teamB": "VENEZIA"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "PARMA",
        "teamB": "LAZIO"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "ROMA",
        "teamB": "LECCE"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "SASSUOLO",
        "teamB": "CAGLIARI"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "UDINESE",
        "teamB": "TORINO"
      }
    ]
  },
  {
    "id": "30",
    "n": 30,
    "phase": "RITORNO",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "CAGLIARI",
        "teamB": "NAPOLI"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "COMO",
        "teamB": "FIORENTINA"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "FROSINONE",
        "teamB": "UDINESE"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "GENOA",
        "teamB": "INTER"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "LECCE",
        "teamB": "LAZIO"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "MILAN",
        "teamB": "MONZA"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "ROMA",
        "teamB": "BOLOGNA"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "SASSUOLO",
        "teamB": "ATALANTA"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "TORINO",
        "teamB": "JUVENTUS"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "VENEZIA",
        "teamB": "PARMA"
      }
    ]
  },
  {
    "id": "31",
    "n": 31,
    "phase": "RITORNO",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "BOLOGNA",
        "teamB": "VENEZIA"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "CAGLIARI",
        "teamB": "ATALANTA"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "FIORENTINA",
        "teamB": "MILAN"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "FROSINONE",
        "teamB": "GENOA"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "INTER",
        "teamB": "ROMA"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "JUVENTUS",
        "teamB": "LECCE"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "LAZIO",
        "teamB": "TORINO"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "NAPOLI",
        "teamB": "SASSUOLO"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "PARMA",
        "teamB": "COMO"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "UDINESE",
        "teamB": "MONZA"
      }
    ]
  },
  {
    "id": "32",
    "n": 32,
    "phase": "RITORNO",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "ATALANTA",
        "teamB": "UDINESE"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "BOLOGNA",
        "teamB": "CAGLIARI"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "COMO",
        "teamB": "FROSINONE"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "FIORENTINA",
        "teamB": "PARMA"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "MILAN",
        "teamB": "NAPOLI"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "MONZA",
        "teamB": "INTER"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "ROMA",
        "teamB": "LAZIO"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "SASSUOLO",
        "teamB": "LECCE"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "TORINO",
        "teamB": "GENOA"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "VENEZIA",
        "teamB": "JUVENTUS"
      }
    ]
  },
  {
    "id": "33",
    "n": 33,
    "phase": "RITORNO",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "CAGLIARI",
        "teamB": "MONZA"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "FROSINONE",
        "teamB": "ROMA"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "GENOA",
        "teamB": "SASSUOLO"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "INTER",
        "teamB": "BOLOGNA"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "JUVENTUS",
        "teamB": "FIORENTINA"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "LAZIO",
        "teamB": "COMO"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "LECCE",
        "teamB": "MILAN"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "NAPOLI",
        "teamB": "UDINESE"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "PARMA",
        "teamB": "ATALANTA"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "VENEZIA",
        "teamB": "TORINO"
      }
    ]
  },
  {
    "id": "34",
    "n": 34,
    "phase": "RITORNO",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "ATALANTA",
        "teamB": "JUVENTUS"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "BOLOGNA",
        "teamB": "FIORENTINA"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "COMO",
        "teamB": "INTER"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "LECCE",
        "teamB": "CAGLIARI"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "MILAN",
        "teamB": "LAZIO"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "MONZA",
        "teamB": "VENEZIA"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "ROMA",
        "teamB": "NAPOLI"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "SASSUOLO",
        "teamB": "FROSINONE"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "TORINO",
        "teamB": "PARMA"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "UDINESE",
        "teamB": "GENOA"
      }
    ]
  },
  {
    "id": "35",
    "n": 35,
    "phase": "RITORNO",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "FIORENTINA",
        "teamB": "ROMA"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "FROSINONE",
        "teamB": "ATALANTA"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "GENOA",
        "teamB": "CAGLIARI"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "INTER",
        "teamB": "LECCE"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "LAZIO",
        "teamB": "SASSUOLO"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "NAPOLI",
        "teamB": "MONZA"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "PARMA",
        "teamB": "MILAN"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "TORINO",
        "teamB": "BOLOGNA"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "UDINESE",
        "teamB": "JUVENTUS"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "VENEZIA",
        "teamB": "COMO"
      }
    ]
  },
  {
    "id": "36",
    "n": 36,
    "phase": "RITORNO",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "BOLOGNA",
        "teamB": "FROSINONE"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "CAGLIARI",
        "teamB": "TORINO"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "COMO",
        "teamB": "ATALANTA"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "JUVENTUS",
        "teamB": "INTER"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "LAZIO",
        "teamB": "UDINESE"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "LECCE",
        "teamB": "FIORENTINA"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "MILAN",
        "teamB": "ROMA"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "MONZA",
        "teamB": "PARMA"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "NAPOLI",
        "teamB": "GENOA"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "SASSUOLO",
        "teamB": "VENEZIA"
      }
    ]
  },
  {
    "id": "37",
    "n": 37,
    "phase": "RITORNO",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "ATALANTA",
        "teamB": "LECCE"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "FIORENTINA",
        "teamB": "MONZA"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "FROSINONE",
        "teamB": "CAGLIARI"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "GENOA",
        "teamB": "BOLOGNA"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "INTER",
        "teamB": "LAZIO"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "PARMA",
        "teamB": "JUVENTUS"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "ROMA",
        "teamB": "COMO"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "TORINO",
        "teamB": "NAPOLI"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "UDINESE",
        "teamB": "SASSUOLO"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "VENEZIA",
        "teamB": "MILAN"
      }
    ]
  },
  {
    "id": "38",
    "n": 38,
    "phase": "RITORNO",
    "matches": [
      {
        "id": "m1",
        "n": 1,
        "teamA": "BOLOGNA",
        "teamB": "PARMA"
      },
      {
        "id": "m2",
        "n": 2,
        "teamA": "CAGLIARI",
        "teamB": "ROMA"
      },
      {
        "id": "m3",
        "n": 3,
        "teamA": "COMO",
        "teamB": "GENOA"
      },
      {
        "id": "m4",
        "n": 4,
        "teamA": "JUVENTUS",
        "teamB": "FROSINONE"
      },
      {
        "id": "m5",
        "n": 5,
        "teamA": "LAZIO",
        "teamB": "FIORENTINA"
      },
      {
        "id": "m6",
        "n": 6,
        "teamA": "LECCE",
        "teamB": "VENEZIA"
      },
      {
        "id": "m7",
        "n": 7,
        "teamA": "MILAN",
        "teamB": "UDINESE"
      },
      {
        "id": "m8",
        "n": 8,
        "teamA": "MONZA",
        "teamB": "TORINO"
      },
      {
        "id": "m9",
        "n": 9,
        "teamA": "NAPOLI",
        "teamB": "ATALANTA"
      },
      {
        "id": "m10",
        "n": 10,
        "teamA": "SASSUOLO",
        "teamB": "INTER"
      }
    ]
  }
];

const LOCAL_KEY = "fantaschedina_seriea_2026_27_local";
let rootDb = { leagues: {} };
let appDb = null;
let online = false;
let initialized = false;
let activeLeague = null;
let session = loadSession();
let ownerUnlockCount = 0;
let ownerUnlockTimer = null;
let viewRoundId = sessionStorage.getItem("fantaschedinaViewRound") || null;

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));


function buildSerieARounds(){
  return Object.fromEntries(SERIE_A_2026_27.map(day => {
    const id = String(day.n);
    const matches = Object.fromEntries(day.matches.map(m => [m.id, {
      n: m.n,
      teamA: m.teamA,
      teamB: m.teamB
    }]));
    return [id, {
      name: `Giornata ${id}`,
      phase: day.phase,
      locked: true,
      matches,
      predictions: {},
      results: {}
    }];
  }));
}

function scheduledRound(id){
  const found = SERIE_A_2026_27.find(day => String(day.n) === String(id));
  if(!found) return null;
  const matches = Object.fromEntries(found.matches.map(m => [m.id, {
    n: m.n,
    teamA: m.teamA,
    teamB: m.teamB
  }]));
  return {
    name: `Giornata ${found.n}`,
    phase: found.phase,
    locked: true,
    matches,
    predictions: {},
    results: {}
  };
}

function roundLabel(round, id){
  const name = round?.name || `Giornata ${id}`;
  const phase = round?.phase ? ` · ${round.phase}` : "";
  return `${name}${phase}`;
}

function defaultRoot(){
  return { leagues: {} };
}

function isConfigured(){
  return firebaseConfig
    && firebaseConfig.apiKey
    && firebaseConfig.databaseURL
    && !String(firebaseConfig.apiKey).includes("INCOLLA")
    && !String(firebaseConfig.databaseURL).includes("INCOLLA");
}

function loadSession(){
  try{
    return JSON.parse(sessionStorage.getItem("fantaschedinaSession") || "null") || { role:null };
  }catch{
    return { role:null };
  }
}

function saveSession(){
  sessionStorage.setItem("fantaschedinaSession", JSON.stringify(session));
}

function clearSession(){
  sessionStorage.removeItem("fantaschedinaSession");
  session = { role:null };
}

function normalizeRoot(raw){
  const data = raw && typeof raw === "object" ? raw : {};
  return { leagues: data.leagues || {} };
}

function normalizeLeague(raw){
  const data = raw && typeof raw === "object" ? raw : {};
  const meta = data.meta || {};
  const scheduled = buildSerieARounds();
  const existingRounds = data.rounds && typeof data.rounds === "object" ? data.rounds : {};
  const rounds = { ...scheduled };

  // Mantiene pronostici, risultati e blocchi se la competizione esiste già.
  Object.entries(existingRounds).forEach(([id, oldRound]) => {
    const base = rounds[id] || emptyRound(id);
    rounds[id] = {
      ...base,
      ...(oldRound || {}),
      name: base.name,
      phase: base.phase,
      matches: Object.keys(base.matches || {}).length ? base.matches : (oldRound?.matches || {}),
      predictions: oldRound?.predictions || {},
      results: oldRound?.results || {},
      locked: typeof oldRound?.locked === "boolean" ? oldRound.locked : base.locked
    };
  });

  return {
    meta: {
      name: meta.name || "Competizione senza nome",
      adminName: meta.adminName || "Admin",
      adminPassword: meta.adminPassword || "admin",
      currentRound: String(meta.currentRound || "1"),
      season: "SERIE_A_2026_27",
      createdAt: meta.createdAt || Date.now()
    },
    players: data.players || {},
    rounds
  };
}

function emptyRound(id){
  return scheduledRound(id) || {
    name: `Giornata ${id}`,
    phase: Number(id) <= 19 ? "ANDATA" : "RITORNO",
    locked: true,
    matches: {},
    predictions: {},
    results: {}
  };
}

function currentLeague(){
  if(!session.leagueCode) return null;
  return normalizeLeague(rootDb.leagues?.[session.leagueCode]);
}

function currentRoundId(){
  const league = currentLeague();
  return String(league?.meta?.currentRound || "1");
}

function currentRound(){
  const league = currentLeague();
  const id = currentRoundId();
  return league?.rounds?.[id] || emptyRound(id);
}

function activeViewRoundId(){
  const league = currentLeague();
  const fallback = currentRoundId();
  const id = String(viewRoundId || fallback);
  return league?.rounds?.[id] ? id : fallback;
}

function viewRound(){
  const league = currentLeague();
  const id = activeViewRoundId();
  return league?.rounds?.[id] || emptyRound(id);
}

function setViewRound(id){
  viewRoundId = String(id || currentRoundId());
  sessionStorage.setItem("fantaschedinaViewRound", viewRoundId);
  renderAll();
}

function playerIdFromName(name){
  return String(name || "giocatore").trim().toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[.#$/\[\]]/g, "_")
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_\-]/g, "_")
    .slice(0, 60) || "giocatore";
}

function generateCode(){
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for(let i=0;i<6;i++) code += chars[Math.floor(Math.random()*chars.length)];
  if(rootDb.leagues?.[code]) return generateCode();
  return code;
}

function inviteLink(code){
  const base = location.origin + location.pathname;
  return `${base}?join=${encodeURIComponent(code)}`;
}

function toast(message, error=false){
  const t = $("#toast");
  if(!t) return;
  t.textContent = message;
  t.classList.toggle("error", error);
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1800);
}

function escapeHtml(value){
  return String(value ?? "").replace(/[&<>"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]));
}

function escapeAttr(value){
  return escapeHtml(value).replace(/'/g, "&#039;");
}

async function initDatabase(){
  initUiOnce();

  if(!isConfigured()){
    try{
      rootDb = normalizeRoot(JSON.parse(localStorage.getItem(LOCAL_KEY) || "null"));
    }catch{
      rootDb = defaultRoot();
    }
    online = false;
    setStatus("Locale", "offline");
    afterDbReady();
    return;
  }

  try{
    const app = initializeApp(firebaseConfig);
    appDb = getDatabase(app);
    const rootRef = ref(appDb, DATABASE_PATH);
    onValue(rootRef, async (snapshot) => {
      if(snapshot.exists()){
        rootDb = normalizeRoot(snapshot.val());
      }else{
        rootDb = defaultRoot();
        await set(rootRef, rootDb);
      }
      online = true;
      setStatus("Online", "online");
      afterDbReady();
    }, (error) => {
      console.error(error);
      online = false;
      setStatus("Errore Firebase", "offline");
      toast("Errore Firebase: controllo configurazione", true);
      afterDbReady();
    });
  }catch(error){
    console.error(error);
    online = false;
    setStatus("Errore configurazione", "offline");
    afterDbReady();
  }
}

function afterDbReady(){
  readJoinParam();
  if(session.role === "owner"){
    enterApp();
  }else if(session.role && session.leagueCode && rootDb.leagues?.[session.leagueCode]){
    enterApp();
  }else{
    showLogin();
  }
}

function setStatus(text, mode){
  const el = $("#dbStatus");
  if(!el) return;
  el.textContent = text;
  el.className = `dbBadge ${mode || ""}`;
}

function saveLocal(){
  localStorage.setItem(LOCAL_KEY, JSON.stringify(rootDb));
  renderAll();
}

async function setPath(path, value){
  if(online && appDb){
    await set(ref(appDb, `${DATABASE_PATH}/${path}`), value);
  }else{
    const parts = path.split("/").filter(Boolean);
    let obj = rootDb;
    while(parts.length > 1){
      const key = parts.shift();
      obj[key] = obj[key] || {};
      obj = obj[key];
    }
    obj[parts[0]] = value;
    saveLocal();
  }
}

async function updatePath(path, values){
  if(online && appDb){
    await update(ref(appDb, `${DATABASE_PATH}/${path}`), values);
  }else{
    const parts = path.split("/").filter(Boolean);
    let obj = rootDb;
    while(parts.length){
      const key = parts.shift();
      obj[key] = obj[key] || {};
      obj = obj[key];
    }
    Object.assign(obj, values);
    saveLocal();
  }
}

async function removePath(path){
  if(online && appDb){
    await remove(ref(appDb, `${DATABASE_PATH}/${path}`));
  }else{
    const parts = path.split("/").filter(Boolean);
    let obj = rootDb;
    while(parts.length > 1){
      obj = obj[parts.shift()] || {};
    }
    delete obj[parts[0]];
    saveLocal();
  }
}

function initUiOnce(){
  if(initialized) return;
  initialized = true;

  bind("#showCreate", "click", () => showOnlyBox("createBox"));
  bind("#showJoin", "click", () => showOnlyBox("joinBox"));
  bind("#showAdminLogin", "click", () => showOnlyBox("adminLoginBox"));
  bind("#createLeague", "click", createLeague);
  bind("#joinLeague", "click", joinLeague);
  bind("#adminLogin", "click", adminLogin);
  bind("#ownerLogin", "click", ownerLogin);
  bind("#copyInvite", "click", () => copyText($("#createdLink")?.value || ""));
  bind("#enterCreatedAdmin", "click", enterCreatedAdmin);
  bind("#copyInviteAdmin", "click", () => copyText($("#adminInviteLink")?.value || ""));
  bind("#logout", "click", () => { clearSession(); location.reload(); });
  bind("#toggleRoundLock", "click", toggleRoundLock);
  bind("#roundSelect", "change", changeCurrentRound);
  bind("#viewRoundSelect", "change", e => setViewRound(e.target.value));
  bind("#importApiResults", "click", importApiResultsForCurrentRound);
  bind("#ownerSecret", "click", ownerSecretTap);

  ["#joinCode", "#joinPlayerName"].forEach(sel => bind(sel, "keydown", e => { if(e.key === "Enter") joinLeague(); }));
  ["#adminCode", "#adminPassword"].forEach(sel => bind(sel, "keydown", e => { if(e.key === "Enter") adminLogin(); }));
  bind("#ownerPassword", "keydown", e => { if(e.key === "Enter") ownerLogin(); });
  ["#createLeagueName", "#createAdminName", "#createAdminPassword"].forEach(sel => bind(sel, "keydown", e => { if(e.key === "Enter") createLeague(); }));
}

function bind(selector, event, handler){
  const el = $(selector);
  if(el) el.addEventListener(event, handler);
}

function readJoinParam(){
  const params = new URLSearchParams(location.search);
  const code = params.get("join");
  const owner = params.get("owner") || params.get("control");
  if(owner === "1" || owner === "paolo"){
    showOnlyBox("ownerLoginBox");
    setTimeout(() => $("#ownerPassword")?.focus(), 150);
    return;
  }
  if(code){
    const input = $("#joinCode");
    if(input) input.value = code.toUpperCase();
    showOnlyBox("joinBox");
  }
}

function ownerSecretTap(){
  ownerUnlockCount += 1;
  clearTimeout(ownerUnlockTimer);
  ownerUnlockTimer = setTimeout(() => { ownerUnlockCount = 0; }, 1600);
  if(ownerUnlockCount >= 5){
    ownerUnlockCount = 0;
    showOnlyBox("ownerLoginBox");
    toast("Centro controllo sbloccato");
    setTimeout(() => $("#ownerPassword")?.focus(), 150);
  }
}

function showOnlyBox(id){
  ["createBox", "joinBox", "adminLoginBox", "ownerLoginBox", "createdBox"].forEach(box => {
    const el = document.getElementById(box);
    if(el) el.classList.toggle("hidden", box !== id);
  });
}

function showLogin(){
  $("#loginScreen")?.classList.remove("hidden");
  $("#appScreen")?.classList.add("hidden");
}

async function createLeague(){
  const name = $("#createLeagueName")?.value.trim();
  const adminName = $("#createAdminName")?.value.trim();
  const password = $("#createAdminPassword")?.value.trim();

  if(!name) return toast("Inserisci il nome della competizione", true);
  if(!adminName) return toast("Inserisci il nome admin", true);
  if(!password || password.length < 4) return toast("Password admin minimo 4 caratteri", true);

  const code = generateCode();
  const league = {
    meta: { name, adminName, adminPassword: password, currentRound: "1", season: "SERIE_A_2026_27", createdAt: Date.now() },
    players: {},
    rounds: buildSerieARounds()
  };

  await setPath(`leagues/${code}`, league);
  rootDb.leagues[code] = league;

  activeLeague = { code, adminName, password };
  $("#createdCode").textContent = code;
  $("#createdLink").value = inviteLink(code);
  showOnlyBox("createdBox");
  toast("Competizione creata");
}

function enterCreatedAdmin(){
  if(!activeLeague) return;
  session = { role:"admin", leagueCode:activeLeague.code, name:activeLeague.adminName };
  saveSession();
  enterApp();
}

async function joinLeague(){
  const code = String($("#joinCode")?.value || "").trim().toUpperCase();
  const name = $("#joinPlayerName")?.value.trim();
  if(!code) return toast("Inserisci il codice", true);
  if(!name) return toast("Inserisci il tuo nome", true);
  if(!rootDb.leagues?.[code]) return toast("Competizione non trovata", true);

  const id = playerIdFromName(name);
  await setPath(`leagues/${code}/players/${id}`, { name, createdAt: Date.now() });
  session = { role:"player", leagueCode:code, playerId:id, name };
  saveSession();
  enterApp();
}

function adminLogin(){
  const code = String($("#adminCode")?.value || "").trim().toUpperCase();
  const password = $("#adminPassword")?.value.trim();
  const league = normalizeLeague(rootDb.leagues?.[code]);
  if(!rootDb.leagues?.[code]) return toast("Competizione non trovata", true);
  if(password !== league.meta.adminPassword) return toast("Password admin errata", true);

  session = { role:"admin", leagueCode:code, name:league.meta.adminName };
  saveSession();
  enterApp();
}

function ownerLogin(){
  const password = $("#ownerPassword")?.value.trim();
  const expected = OWNER_CONFIG?.password || "Baffone10";
  if(password !== expected) return toast("Password proprietario errata", true);
  session = { role:"owner", name:"Paolo" };
  saveSession();
  enterApp();
}

function enterApp(){
  $("#loginScreen")?.classList.add("hidden");
  $("#appScreen")?.classList.remove("hidden");
  buildNav();
  renderAll();
}

function buildNav(){
  const isAdmin = session.role === "admin";
  const isOwner = session.role === "owner";
  const items = isOwner
    ? [["Centro","pageOwner"]]
    : isAdmin
      ? [["Home","pageHome"],["Pronostici","pagePredictions"],["Classifica","pageLeaderboard"],["Regole","pageRules"],["Admin","pageAdmin"]]
      : [["Home","pageHome"],["Pronostici","pagePredictions"],["Classifica","pageLeaderboard"],["Regole","pageRules"]];
  const nav = $("#navMenu");
  if(!nav) return;
  nav.classList.toggle("admin", isAdmin);
  nav.classList.toggle("owner", isOwner);
  nav.innerHTML = items.map((it, i) => `<button class="navBtn ${i===0 ? "active" : ""}" data-page="${it[1]}">${it[0]}</button>`).join("");
  $$(".navBtn").forEach(btn => btn.onclick = () => goPage(btn.dataset.page));
  goPage(isOwner ? "pageOwner" : "pageHome");
}

function goPage(pageId){
  $$(".navBtn").forEach(btn => btn.classList.toggle("active", btn.dataset.page === pageId));
  $$(".page").forEach(page => page.classList.toggle("active", page.id === pageId));
  renderAll();
}

function renderAll(){
  if(session.role === "owner"){
    renderOwnerDashboard();
    return;
  }
  const league = currentLeague();
  if(!session.role || !league) return;
  const round = currentRound();
  const roundName = roundLabel(round, currentRoundId());
  const selectedRoundId = activeViewRoundId();
  const selectedRound = viewRound();
  const selectedRoundName = roundLabel(selectedRound, selectedRoundId);

  setText("#leagueTitle", league.meta.name);
  setText("#roleLabel", session.role === "admin" ? "ADMIN" : "GIOCATORE");
  setText("#userLine", `${session.name || ""} · Codice ${session.leagueCode}`);
  setText("#homeRoundTitle", roundName);
  setText("#predRoundTitle", selectedRoundName);

  updateLockBadges(round.locked, selectedRound.locked);
  updateStats(league, round);
  renderViewRoundSelect(league, selectedRoundId);
  renderPredictions(league, selectedRound, selectedRoundId);
  renderLeaderboard(league);
  renderPodium(league);
  renderAdmin(league, round);
}

function setText(selector, text){
  const el = $(selector);
  if(el) el.textContent = text;
}

function updateLockBadges(homeLocked, predLocked=homeLocked){
  const states = [
    ["#homeLockState", homeLocked],
    ["#predLockBadge", predLocked]
  ];
  states.forEach(([sel, locked]) => {
    const el = $(sel);
    if(!el) return;
    el.textContent = locked ? "Chiusa" : "Aperta";
    el.className = `statePill ${locked ? "closed" : "open"}`;
  });
}

function sortedMatches(round){
  return Object.entries(round.matches || {})
    .map(([id, m]) => ({ id, ...m }))
    .sort((a,b) => Number(a.n || 0) - Number(b.n || 0));
}

function playerList(league){
  return Object.entries(league.players || {})
    .map(([id, p]) => ({ id, name:p?.name || id, createdAt:p?.createdAt || 0 }))
    .sort((a,b) => a.name.localeCompare(b.name));
}

function updateStats(league, round){
  const matches = sortedMatches(round);
  const players = playerList(league);
  const predictions = round.predictions?.[session.playerId] || {};
  const done = session.role === "player"
    ? matches.filter(m => predictions[m.id]).length
    : Object.values(round.predictions || {}).reduce((sum, p) => sum + Object.keys(p || {}).length, 0);
  const points = session.role === "player" ? totalPointsForPlayer(league, session.playerId) : (ranking(league)[0]?.total || 0);

  setText("#statPlayers", players.length);
  setText("#statMatches", matches.length);
  setText("#statDone", done);
  setText("#statPoints", points);
}

function outcomeFromScore(ga, gb){
  if(ga === "" || gb === "" || ga === undefined || gb === undefined) return "";
  const a = Number(ga);
  const b = Number(gb);
  if(Number.isNaN(a) || Number.isNaN(b)) return "";
  return a > b ? "1" : a < b ? "2" : "X";
}

function pointsForMatch(round, playerId, matchId){
  const pred = round.predictions?.[playerId]?.[matchId] || "";
  const result = round.results?.[matchId] || {};
  const real = outcomeFromScore(result.ga, result.gb);
  return pred && real && pred === real ? 1 : 0;
}

function pointsForRound(round, playerId){
  return sortedMatches(round).reduce((sum, m) => sum + pointsForMatch(round, playerId, m.id), 0);
}

function totalPointsForPlayer(league, playerId){
  return Object.values(league.rounds || {}).reduce((sum, round) => sum + pointsForRound(round, playerId), 0);
}

function ranking(league){
  return playerList(league).map(p => {
    const total = totalPointsForPlayer(league, p.id);
    const current = pointsForRound(currentRound(), p.id);
    return { ...p, total, current };
  }).sort((a,b) => b.total - a.total || b.current - a.current || a.name.localeCompare(b.name));
}

function renderViewRoundSelect(league, selectedId){
  const select = $("#viewRoundSelect");
  if(!select) return;
  const roundIds = Object.keys(league.rounds || {}).sort((a,b) => Number(a)-Number(b));
  select.innerHTML = roundIds.map(id => {
    const r = league.rounds[id] || emptyRound(id);
    const status = r.locked ? "chiusa" : "aperta";
    return `<option value="${id}" ${String(selectedId) === String(id) ? "selected" : ""}>${escapeHtml(roundLabel(r, id))} · ${status}</option>`;
  }).join("");
}

function renderPredictions(league, round, roundId){
  const wrap = $("#predictionsList");
  if(!wrap) return;
  const matches = sortedMatches(round);
  if(!matches.length){
    wrap.innerHTML = `<div class="emptyBox">Nessuna partita trovata per questa giornata.</div>`;
    return;
  }

  const canPick = session.role === "player" && !round.locked;
  const playerPreds = round.predictions?.[session.playerId] || {};

  wrap.innerHTML = matches.map(m => {
    const selected = playerPreds[m.id] || "";
    const result = round.results?.[m.id] || {};
    const real = outcomeFromScore(result.ga, result.gb);
    const pts = session.role === "player" ? pointsForMatch(round, session.playerId, m.id) : "-";
    return `<div class="matchCard">
      <div class="matchTop">
        <div class="matchTitle">${escapeHtml(m.teamA)} <span class="tiny">vs</span> ${escapeHtml(m.teamB)}</div>
        <div class="matchDate">${escapeHtml(round.phase || "")}</div>
      </div>
      <div class="pickRow">
        ${["1","X","2"].map(v => `<button class="pickBtn ${selected === v ? "active" : ""}" data-match="${m.id}" data-pick="${v}" ${canPick ? "" : "disabled"}>${v}</button>`).join("")}
      </div>
      <div class="pointsLine">Pronostico: <b>${selected || "-"}</b> · Esito reale: <b>${real || "-"}</b> · Punti: <b>${pts}</b></div>
    </div>`;
  }).join("");

  $$(".pickBtn").forEach(btn => btn.onclick = () => savePrediction(btn.dataset.match, btn.dataset.pick));
}

async function savePrediction(matchId, pick){
  const roundId = activeViewRoundId();
  const round = viewRound();
  if(session.role !== "player") return toast("Entra come giocatore", true);
  if(round.locked) return toast("Giornata chiusa", true);
  await setPath(`leagues/${session.leagueCode}/rounds/${roundId}/predictions/${session.playerId}/${matchId}`, pick);
  toast("Pronostico salvato");
}

function renderLeaderboard(league){
  const wrap = $("#leaderboardList");
  if(!wrap) return;
  const list = ranking(league);
  if(!list.length){
    wrap.innerHTML = `<div class="emptyBox">Ancora nessun giocatore.</div>`;
    return;
  }
  const medals = ["🏆","🥈","🥉"];
  wrap.innerHTML = list.map((p,i) => `<div class="leaderRow">
    <div class="leaderPos">${medals[i] || i+1}</div>
    <div><b>${escapeHtml(p.name)}</b><br><span class="tiny">Giornata attuale: ${p.current} pt</span></div>
    <div class="leaderPts">${p.total}</div>
  </div>`).join("");
}

function renderPodium(league){
  const wrap = $("#podiumList");
  if(!wrap) return;
  const list = ranking(league).slice(0,3);
  if(!list.length){
    wrap.innerHTML = `<div class="emptyBox">Ancora nessun giocatore.</div>`;
    return;
  }
  const medals = ["🏆","🥈","🥉"];
  wrap.innerHTML = list.map((p,i) => `<div class="podiumItem"><span>${medals[i]} <b>${escapeHtml(p.name)}</b></span><b>${p.total} pt</b></div>`).join("");
}

function renderAdmin(league, round){
  if(session.role !== "admin") return;
  const code = session.leagueCode;
  setText("#adminInviteCode", code);
  const invite = inviteLink(code);
  const inviteInput = $("#adminInviteLink");
  if(inviteInput) inviteInput.value = invite;

  renderRoundSelect(league);
  renderApiPanelState();
  renderCalendarPreview(round);
  renderResults(round);
  renderPlayersAdmin(league);

  const lockBtn = $("#toggleRoundLock");
  if(lockBtn) lockBtn.textContent = round.locked ? "Apri pronostici" : "Chiudi pronostici";
}

function renderRoundSelect(league){
  const select = $("#roundSelect");
  if(!select) return;
  const roundIds = Object.keys(league.rounds || {}).sort((a,b) => Number(a)-Number(b));
  select.innerHTML = roundIds.map(id => {
    const r = league.rounds[id] || emptyRound(id);
    return `<option value="${id}" ${String(league.meta.currentRound) === String(id) ? "selected" : ""}>${escapeHtml(roundLabel(r, id))}</option>`;
  }).join("");
}


function renderCalendarPreview(round){
  const wrap = $("#adminMatchesList");
  if(!wrap) return;
  const matches = sortedMatches(round);
  if(!matches.length){
    wrap.innerHTML = `<div class="emptyBox">Nessuna partita trovata per questa giornata.</div>`;
    return;
  }
  wrap.innerHTML = matches.map(m => `<div class="adminMatchRow">
    <div class="adminMatchNumber">${m.n}</div>
    <div class="adminMatchTeams">${escapeHtml(m.teamA)} <span class="tiny">vs</span> ${escapeHtml(m.teamB)}<span class="adminMatchMeta">${escapeHtml(round.phase || "")}</span></div>
  </div>`).join("");
}


function renderResults(round){
  const wrap = $("#resultsList");
  if(!wrap) return;
  const matches = sortedMatches(round);
  if(!matches.length){
    wrap.innerHTML = `<div class="emptyBox">Calendario Serie A non trovato per questa giornata.</div>`;
    return;
  }
  wrap.innerHTML = matches.map(m => {
    const r = round.results?.[m.id] || {};
    return `<div class="resultRow">
      <div class="resultName">${escapeHtml(m.teamA)}<br><span class="tiny">vs ${escapeHtml(m.teamB)}</span></div>
      <input class="resultInput" type="number" min="0" inputmode="numeric" value="${escapeAttr(r.ga ?? "")}" data-match="${m.id}" data-field="ga" placeholder="0" />
      <input class="resultInput" type="number" min="0" inputmode="numeric" value="${escapeAttr(r.gb ?? "")}" data-match="${m.id}" data-field="gb" placeholder="0" />
    </div>`;
  }).join("");
  $$(".resultInput").forEach(input => input.onchange = () => saveResult(input.dataset.match, input.dataset.field, input.value));
}

function renderPlayersAdmin(league){
  const wrap = $("#playersAdminList");
  if(!wrap) return;
  const list = playerList(league);
  if(!list.length){
    wrap.innerHTML = `<div class="emptyBox">Ancora nessun giocatore.</div>`;
    return;
  }
  wrap.innerHTML = list.map(p => `<div class="playerRow"><span><b>${escapeHtml(p.name)}</b></span><button class="dangerBtn deletePlayer" data-player="${p.id}">Elimina</button></div>`).join("");
  $$(".deletePlayer").forEach(btn => btn.onclick = () => deletePlayer(btn.dataset.player));
}

async function changeCurrentRound(){
  if(session.role !== "admin") return;
  const id = $("#roundSelect")?.value || "1";
  await setPath(`leagues/${session.leagueCode}/meta/currentRound`, String(id));
  toast("Giornata cambiata");
}


function parseMatches(text){
  return text.split(/\n+/).map(line => line.trim()).filter(Boolean).map((line, index) => {
    let date = "", teamA = "", teamB = "";
    if(line.includes(";")){
      const parts = line.split(";").map(x => x.trim()).filter(Boolean);
      if(parts.length >= 3){
        date = parts[0];
        teamA = parts[1];
        teamB = parts.slice(2).join(" ");
      }
    }else{
      const parts = line.split(/\s+-\s+|\s+vs\s+/i).map(x => x.trim()).filter(Boolean);
      if(parts.length >= 2){
        teamA = parts[0];
        teamB = parts.slice(1).join(" ");
      }
    }
    if(!teamA || !teamB) return null;
    return [`m${index+1}`, { n:index+1, date, teamA, teamB }];
  }).filter(Boolean);
}


function renderApiPanelState(){
  const status = $("#apiImportStatus");
  if(!status) return;
  const configured = FOOTBALL_API_CONFIG?.token && !String(FOOTBALL_API_CONFIG.token).includes("INCOLLA");
  status.textContent = configured
    ? "API configurata: puoi importare calendario e risultati della giornata selezionata."
    : "API non configurata: incolla la chiave in firebase-config.js.";
}

function apiConfig(){
  return {
    provider: FOOTBALL_API_CONFIG?.provider || "football-data",
    token: FOOTBALL_API_CONFIG?.token || "",
    competition: FOOTBALL_API_CONFIG?.competitionCode || "SA",
    season: FOOTBALL_API_CONFIG?.season || 2026
  };
}

async function fetchOfficialRound(roundId){
  const cfg = apiConfig();
  if(!cfg.token || String(cfg.token).includes("INCOLLA")){
    throw new Error("Chiave API mancante in firebase-config.js");
  }
  if(cfg.provider !== "football-data"){
    throw new Error("Provider API non supportato in questa bozza");
  }

  const url = `https://api.football-data.org/v4/competitions/${encodeURIComponent(cfg.competition)}/matches?season=${encodeURIComponent(cfg.season)}&matchday=${encodeURIComponent(roundId)}`;
  const response = await fetch(url, { headers: { "X-Auth-Token": cfg.token } });
  if(!response.ok){
    const detail = await response.text().catch(() => "");
    throw new Error(`Errore API ${response.status}: ${detail.slice(0, 120)}`);
  }
  const data = await response.json();
  const apiMatches = Array.isArray(data.matches) ? data.matches : [];
  if(!apiMatches.length) throw new Error("Nessuna partita trovata dall'API per questa giornata");
  return apiMatches;
}

function cleanTeamName(name){
  return String(name || "")
    .replace(/ FC$/i, "")
    .replace(/^AC /i, "")
    .replace(/^AS /i, "")
    .replace(/^US /i, "")
    .replace(/^SSC /i, "")
    .trim()
    .toUpperCase();
}

function apiMatchesToRoundData(apiMatches){
  const matches = {};
  const results = {};
  apiMatches
    .slice()
    .sort((a,b) => new Date(a.utcDate || 0) - new Date(b.utcDate || 0))
    .forEach((m, index) => {
      const id = `m${index + 1}`;
      const home = cleanTeamName(m.homeTeam?.shortName || m.homeTeam?.name);
      const away = cleanTeamName(m.awayTeam?.shortName || m.awayTeam?.name);
      const date = m.utcDate ? new Date(m.utcDate).toLocaleDateString("it-IT", { day:"2-digit", month:"2-digit", year:"numeric" }) : "";
      matches[id] = { n:index + 1, teamA:home, teamB:away, date, apiMatchId:m.id || "" };

      const homeGoals = m.score?.fullTime?.home;
      const awayGoals = m.score?.fullTime?.away;
      if(m.status === "FINISHED" && homeGoals !== null && awayGoals !== null && homeGoals !== undefined && awayGoals !== undefined){
        results[id] = { ga:String(homeGoals), gb:String(awayGoals), importedAt:Date.now() };
      }
    });
  return { matches, results };
}

async function importApiResultsForCurrentRound(){
  if(session.role !== "admin") return;
  const btn = $("#importApiResults");
  if(btn) btn.disabled = true;
  try{
    const roundId = currentRoundId();
    const apiMatches = await fetchOfficialRound(roundId);
    const { matches, results } = apiMatchesToRoundData(apiMatches);
    await setPath(`leagues/${session.leagueCode}/rounds/${roundId}/matches`, matches);
    if(Object.keys(results).length){
      await updatePath(`leagues/${session.leagueCode}/rounds/${roundId}/results`, results);
      toast(`Risultati importati: ${Object.keys(results).length}/${Object.keys(matches).length}`);
    }else{
      toast("Calendario aggiornato: risultati non ancora disponibili");
    }
  }catch(error){
    console.error(error);
    toast(error.message || "Errore import API", true);
  }finally{
    if(btn) btn.disabled = false;
  }
}

async function saveResult(matchId, field, value){
  if(session.role !== "admin") return;
  await setPath(`leagues/${session.leagueCode}/rounds/${currentRoundId()}/results/${matchId}/${field}`, value);
  toast("Risultato salvato");
}

async function deletePlayer(playerId){
  if(session.role !== "admin") return;
  const league = currentLeague();
  const player = league.players?.[playerId];
  if(!player) return;
  if(!confirm(`Eliminare ${player.name}?`)) return;
  await removePath(`leagues/${session.leagueCode}/players/${playerId}`);
  const updates = {};
  Object.keys(league.rounds || {}).forEach(roundId => {
    updates[`rounds/${roundId}/predictions/${playerId}`] = null;
  });
  // Fallback semplice: rimuovo ogni pronostico del giocatore round per round.
  for(const roundId of Object.keys(league.rounds || {})){
    await removePath(`leagues/${session.leagueCode}/rounds/${roundId}/predictions/${playerId}`);
  }
  toast("Giocatore eliminato");
}

function copyText(text){
  if(!text) return;
  if(navigator.clipboard){
    navigator.clipboard.writeText(text).then(() => toast("Link copiato"));
  }else{
    const tmp = document.createElement("textarea");
    tmp.value = text;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand("copy");
    tmp.remove();
    toast("Link copiato");
  }
}


function allLeaguesForOwner(){
  return Object.entries(rootDb.leagues || {}).map(([code, raw]) => ({ code, league: normalizeLeague(raw), raw: raw || {} }));
}

function countLeaguePredictions(league){
  return Object.values(league.rounds || {}).reduce((sum, round) => {
    return sum + Object.values(round.predictions || {}).reduce((inner, picks) => inner + Object.keys(picks || {}).length, 0);
  }, 0);
}

function countLeagueResults(league){
  return Object.values(league.rounds || {}).reduce((sum, round) => sum + Object.keys(round.results || {}).length, 0);
}

function leagueLastActivity(raw, league){
  const stamps = [league.meta?.updatedAt, league.meta?.createdAt];
  Object.values(league.players || {}).forEach(p => stamps.push(p?.createdAt));
  Object.values(league.rounds || {}).forEach(round => {
    Object.values(round.results || {}).forEach(r => stamps.push(r?.importedAt));
  });
  return Math.max(...stamps.map(Number).filter(Boolean), 0);
}

function formatDateTime(value){
  const n = Number(value || 0);
  if(!n) return "-";
  return new Date(n).toLocaleString("it-IT", { day:"2-digit", month:"2-digit", year:"2-digit", hour:"2-digit", minute:"2-digit" });
}

function renderOwnerDashboard(){
  setText("#leagueTitle", "Centro Controllo");
  setText("#roleLabel", "PROPRIETARIO");
  setText("#userLine", "Paolo · controllo piattaforma");

  const leagues = allLeaguesForOwner();
  const totals = leagues.reduce((acc, item) => {
    acc.players += Object.keys(item.league.players || {}).length;
    acc.predictions += countLeaguePredictions(item.league);
    acc.results += countLeagueResults(item.league);
    acc.last = Math.max(acc.last, leagueLastActivity(item.raw, item.league));
    return acc;
  }, { players:0, predictions:0, results:0, last:0 });

  setText("#ownerTotalLeagues", leagues.length);
  setText("#ownerTotalPlayers", totals.players);
  setText("#ownerTotalPredictions", totals.predictions);
  setText("#ownerTotalResults", totals.results);
  setText("#ownerMainStatus", leagues.length ? "Piattaforma attiva" : "Nessuna competizione creata");
  setText("#ownerLastActivity", `Ultima attività: ${formatDateTime(totals.last)}`);

  renderOwnerTechStatus();
  renderOwnerLeagues(leagues);
}

function renderOwnerTechStatus(){
  const wrap = $("#ownerTechStatus");
  if(!wrap) return;
  const apiConfigured = FOOTBALL_API_CONFIG?.token && !String(FOOTBALL_API_CONFIG.token).includes("INCOLLA");
  const items = [
    ["Database", online ? "Online Firebase" : "Locale / non online"],
    ["Percorso dati", DATABASE_PATH],
    ["API risultati", apiConfigured ? "Configurata" : "Chiave API mancante"],
    ["Competizione API", `${FOOTBALL_API_CONFIG?.competitionCode || "SA"} · stagione ${FOOTBALL_API_CONFIG?.season || 2026}`]
  ];
  wrap.innerHTML = items.map(([title, value]) => `<div class="ownerStatusItem"><b>${escapeHtml(title)}</b><span class="tiny">${escapeHtml(value)}</span></div>`).join("");
}

function renderOwnerLeagues(leagues){
  const wrap = $("#ownerLeaguesList");
  if(!wrap) return;
  if(!leagues.length){
    wrap.innerHTML = `<div class="emptyBox">Ancora nessuna competizione creata.</div>`;
    return;
  }
  const sorted = leagues.slice().sort((a,b) => leagueLastActivity(b.raw,b.league) - leagueLastActivity(a.raw,a.league));
  wrap.innerHTML = sorted.map(({code, league, raw}) => {
    const players = Object.keys(league.players || {}).length;
    const predictions = countLeaguePredictions(league);
    const results = countLeagueResults(league);
    const last = formatDateTime(leagueLastActivity(raw, league));
    return `<div class="ownerLeagueRow">
      <div>
        <b>${escapeHtml(league.meta.name)}</b><br>
        <span class="tiny">Codice ${escapeHtml(code)} · Admin ${escapeHtml(league.meta.adminName)} · Giornata ${escapeHtml(league.meta.currentRound)}</span>
        <div class="ownerLeagueMeta">
          <span class="ownerChip">${players} giocatori</span>
          <span class="ownerChip">${predictions} pronostici</span>
          <span class="ownerChip">${results} risultati</span>
          <span class="ownerChip">Ultima attività ${escapeHtml(last)}</span>
        </div>
      </div>
      <button class="ownerDanger deleteLeague" data-code="${escapeAttr(code)}">Elimina test</button>
    </div>`;
  }).join("");
  $$(".deleteLeague").forEach(btn => btn.onclick = () => deleteLeagueAsOwner(btn.dataset.code));
}

async function deleteLeagueAsOwner(code){
  if(session.role !== "owner") return;
  const raw = rootDb.leagues?.[code];
  const name = raw?.meta?.name || code;
  if(!confirm(`Eliminare definitivamente la competizione "${name}"?`)) return;
  await removePath(`leagues/${code}`);
  toast("Competizione eliminata");
}

window.addEventListener("error", e => {
  console.error("FantaSchedina error:", e.message);
  toast("Errore nel sito: controlla app.js", true);
});

initDatabase();
