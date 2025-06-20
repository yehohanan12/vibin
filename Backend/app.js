// index.js
const express = require('express');
const app = express();
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

// 👉 Route racine
app.get('/', (req, res) => {
    res.send('Bienvenue sur l’API de votre boutique');
});

// 👉 Routes utilisateurs
app.use('/users', userRoutes);





const PORT = 3000;

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
    });
});
