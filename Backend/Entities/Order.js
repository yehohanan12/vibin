// Entities/Order.js
const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db');
const User = require('./User');
const Product = require('./Product');

const Order = sequelize.define('Order', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'orders'
});

// Relations
User.hasMany(Order);
Order.belongsTo(User);

Product.hasMany(Order);
Order.belongsTo(Product);

module.exports = Order;
