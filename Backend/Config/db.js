
// Fichier de connexion à la base de données
// Permettant la connexion entre le modèle objet et la base de données



const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('loicadatabase', 'user', 'passwd', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
