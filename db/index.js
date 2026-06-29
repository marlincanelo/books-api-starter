// SEQUELIZE

const { Sequelize } = require('sequelize')


const db = new Sequelize('postgres://localhost:5432/books_api', {
    //connect to the database, this is passing the connection
  host: 'localhost',
  dialect: 'postgres'
});

// TODO: Workshop Part 1: create a new Sequelize instance 
// pointed at your
// books_api database, then export it. Same postgres:// connection string


module.exports = db

