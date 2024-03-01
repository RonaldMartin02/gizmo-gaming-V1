// Building the 'tag' model. This model will be used to create new documents in the 'tags' collection. with the following properties:
// tagName: String
// tagType: String (gameTitle, esrb, genre, postRating)

const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  tagName: { type: String, required: true },
  tagType: { type: String, required: true },
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;