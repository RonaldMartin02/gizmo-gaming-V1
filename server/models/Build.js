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
const {Schema, model} = require('mongoose');

const commentSchema = new Schema({
  commentBody: {
     type: String,
     required: true 
},
  commentDate: {
     type: Date,
     default: Date.now 
},
  commentUser: {
     type: String,
     required: true
 },
  buildId: {
     type: String,
     required: true
 },
});

const buildStatsSchema = new Schema({
    statName: {
        type: String,
        required: true
    },
    statValue: {
        type: String,
        required: true
    }
    });

const buildSchema = new Schema({
  postTitle: {
    type: String,
    required: true
  },
  postBody: {
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
  postUser: {
    type: String,
    required: true
  },
  postRating: {
    type: Number,
    required: false
  },
  postComments: [commentSchema],
  buildStats: [buildStatsSchema],
});

const Build = model('Build', buildSchema);

module.exports = Build;