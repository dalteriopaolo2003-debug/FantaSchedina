// CONFIGURAZIONE FIREBASE - FANTASCHEDINA ONLINE
// Questo progetto usa Firebase Realtime Database per far vedere a tutti gli utenti gli stessi dati.

export const firebaseConfig = {
  apiKey: "AIzaSyC47-B0EBIb8Jb6QUtkAGgYYzQcSWIqmGE",
  authDomain: "fantaschedina-c4583.firebaseapp.com",
  databaseURL: "https://fantaschedina-c4583-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "fantaschedina-c4583",
  storageBucket: "fantaschedina-c4583.firebasestorage.app",
  messagingSenderId: "295680627023",
  appId: "1:295680627023:web:2bf2ce6e4b3ff27cea753a",
  measurementId: "G-MH6TWJKJ6X"
};

export const DATABASE_PATH = "fantaschedina_seriea_2026_27";

// CONFIGURAZIONE RISULTATI SERIE A
// Quando avrai la chiave API di football-data.org, incollala al posto di INCOLLA_FOOTBALL_DATA_API_KEY.
export const FOOTBALL_API_CONFIG = {
  provider: "football-data",
  token: "INCOLLA_FOOTBALL_DATA_API_KEY",
  competitionCode: "SA",
  season: 2026
};

// ACCESSO PROPRIETARIO - prima versione frontend.
// In una fase successiva useremo Firebase Authentication per renderlo più forte.
export const OWNER_CONFIG = {
  password: "Baffone10"
};
