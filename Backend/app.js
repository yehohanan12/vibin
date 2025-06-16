// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware pour lire le JSON
app.use(express.json());

// Exemple de route GET
app.get('/', (req, res) => {
    res.send('Bienvenue sur ton backend Express 🚀');
});

// Exemple de route POST
app.post('/api/message', (req, res) => {
    const { message } = req.body;
    res.json({ received: message });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
