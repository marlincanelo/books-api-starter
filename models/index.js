const Book = require('./Book')
const Review = require('./Review')


//defines association
//create BOokid foreigh key for review
Review.belongsTo(Book) // foreigh key
Book.hasMany(Review)



module.exports = {
  Book,
  Review
};