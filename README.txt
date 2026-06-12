FantaSchedina - SERIE A AUTOMATICA + RISULTATI API

Questa è la versione giusta: il calendario Serie A è già caricato.
Nella dashboard admin NON compare “Nuova giornata” e NON compare il box per scrivere le partite a mano.

Cosa fa:
1. Crea una competizione privata.
2. Genera codice e link invito.
3. I giocatori entrano con il codice.
4. I giocatori vedono subito le 38 giornate della competizione Serie A.
5. L'admin sceglie la giornata attuale.
6. L'admin apre/chiude i pronostici.
7. L'admin può importare calendario e risultati dalla API football-data.org.
8. La classifica si aggiorna automaticamente in base ai risultati salvati.

Configurazione Firebase:
- Apri firebase-config.js.
- Incolla i dati del tuo progetto Firebase dentro firebaseConfig.

Configurazione risultati API:
- Apri firebase-config.js.
- Incolla la tua chiave football-data.org qui:
  token: "INCOLLA_FOOTBALL_DATA_API_KEY"
- La configurazione predefinita usa:
  provider: "football-data"
  competitionCode: "SA"
  season: 2026

Per provarlo su Mac:
1. Apri Terminale.
2. Scrivi: cd + spazio.
3. Trascina questa cartella dentro il Terminale e premi Invio.
4. Scrivi: python3 -m http.server 8010
5. Apri Chrome su: http://localhost:8010

Se vedi ancora la vecchia pagina, stai aprendo la vecchia cartella o un vecchio server ancora acceso.
Chiudi i vecchi server con CTRL+C nel Terminale.
