// SEQUELIZE

const { Sequelize } = require('sequelize')

// store databas connection
const db = new Sequelize('postgres://localhost:5432/books_api', {
    //connect to the database, this is passing the connection
  host: 'localhost',
  // type of sql
  dialect: 'postgres'
});

// TODO: Workshop Part 1: create a new Sequelize instance 
// pointed at your
// books_api database, then export it. Same postgres:// connection string


module.exports = db

