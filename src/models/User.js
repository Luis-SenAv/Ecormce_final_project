const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const User = sequelize.define('user', {
    campo1: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = User;