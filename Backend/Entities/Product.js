// Entities/Product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db');

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }

}, {
    tableName: 'products'
});

module.exports = Product;
