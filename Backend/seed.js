// seed.js
const sequelize = require('./Config/db');
const User = require('./Entities/User');
const Product = require('./Entities/Product');
const Order = require('./Entities/Order');

async function seed() {
    try {
        await sequelize.sync({ force: true }); //Supprime et recrée les tables à chaque run

        // 🔸 Fake Users
        const users = await Promise.all([
            User.create({
                username: 'alice',
                email: 'alice@example.com',
                password: 'password123',
                address: '12 rue de Paris'
            }),
            User.create({
                username: 'bob',
                email: 'bob@example.com',
                password: 'securepwd',
                address: '34 avenue des Champs'
            })
        ]);

        // 🔸 Fake Products
        const products = await Promise.all([
            Product.create({ name: 'T-shirt', price: 19.99 }),
            Product.create({ name: 'Casquette', price: 14.99 }),
            Product.create({ name: 'Sac à dos', price: 39.99 })
        ]);

        // 🔸 Fake Orders
        await Promise.all([
            Order.create({ quantity: 2, UserId: users[0].id, ProductId: products[0].id }),
            Order.create({ quantity: 1, UserId: users[0].id, ProductId: products[2].id }),
            Order.create({ quantity: 3, UserId: users[1].id, ProductId: products[1].id })
        ]);

        console.log('Données générées avec succès !');
    } catch (error) {
        console.error('Erreur de seed :', error);
    } finally {
        await sequelize.close();
    }
}

seed();
