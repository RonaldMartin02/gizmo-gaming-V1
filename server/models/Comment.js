// Building the 'comment' model. This model will be used to create new documents in the 'comments' collection. with the following properties:
// commentBody: String
// commentDate: Date
// commentUser: String
// buildId: String (references the _id of the build the comment is associated with)

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  commentBody: { type: String, required: true },
  commentDate: { type: Date, default: Date.now },
  commentUser: { type: String, required: true },
  buildId: { type: String, required: true },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;