const express = require('express');
const app = express();
const port = 3000;

// Statische Dateien (z. B. HTML) im "public"-Verzeichnis servieren
app.use(express.static('public'));

// Routen definieren
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Server starten
app.listen(port, () => {
    console.log(`Express-Server läuft auf Port ${port}`);
});
