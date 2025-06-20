// index.js
const express = require('express');
const app = express();
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

app.use(express.json());

// 👉 Route racine
app.get('/', (req, res) => {
    res.send('Bienvenue sur l’API de votre boutique');
});

// 👉 Routes utilisateurs
app.use(cors({
    origin: 'http://localhost:5173', // j'autorise le frontend
    credentials: true // si tu veux utiliser les cookies ou headers d’auth plus tard
}));
app.use('/users', userRoutes);





const PORT = 3000;

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Serveur lancé sur http://localhost:${PORT}`);
    });
});
