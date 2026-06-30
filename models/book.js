// BOOK MODEL


const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db')


// TODO: Workshop Part 2: add one key per field below, each set to a DataTypes type
// (and allowNull/defaultValue where noted). id is created automatically.
//   title          STRING   required
//   author         STRING   required
//   genre          STRING
//   publishedYear  INTEGER
//   available      BOOLEAN  defaults to true
const Book = db.define('book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        //makes require
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING
    },
    publishedYear:  {
        type: DataTypes.INTEGER
    },
    available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

// you didn't define an id field anywhere in the table above.
//  Where does it come from, and what does it default to?

// id is automaric, no need to add


module.exports = Book