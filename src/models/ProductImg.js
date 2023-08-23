const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ProducImg = sequelize.define('producImg', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    filename: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // ProductId
});

module.exports = ProducImg;