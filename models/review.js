const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db')


const Review = db.define ('review', {
    reviewer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comment: {
        type: DataTypes.TEXT
    }


})

module.exports = Review