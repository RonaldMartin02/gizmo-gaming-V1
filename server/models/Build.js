// Building a 'build' model with the following properties:
// postTitle: String
// postBody: String
// buildGenre: String
// postDate: Date
// postUser: String
// postRating: Number
// postComments: Array
// buildStats: {Object}
// statName: String
// statValue: String
const { Schema, model } = require('mongoose');

// const commentSchema = new Schema({
//   // id: {
//   //   type: Number,
//   //   required: true
//   // },
//   commentBody: {
//     type: String,
//     required: true
//   },
//   // commentDate: {
//   //   type: Date,
//   //   default: Date.now
//   // },
//   username: {
//     type: String,
//     required: true
//   },
// });

// const buildStatsSchema = new Schema({
//   statName: {
//     type: String,
//     required: true
//   },
//   statValue: {
//     type: String,
//     required: true
//   }
// });

const buildSchema = new Schema({
  // id: {
  //   type: Number,
  //   required: true
  // },
  title: {
    type: String,
    required: true
  },
  game: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  buildGenre: {
    type: String,
    required: true
  },
  postDate: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    required: true
  },
  // rating: {
  //   type: Number,
  //   required: false
  // },
  // buildStats: [buildStatsSchema],
  // comments: [commentSchema],
});

const Build = model('Build', buildSchema);

module.exports = Build;