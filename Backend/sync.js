// sync.js
const sequelize = require('./config/db');
require('./Entities/User');
require('./Entities/Product');
require('./Entities/Order');

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion réussie à la base de données');

        await sequelize.sync({ force: false }); // change à true si tu veux recréer les tables à chaque fois
        console.log('Tables créées');
    } catch (err) {
        console.error('Erreur de sync:', err);
    } finally {
        await sequelize.close();
    }
})();
