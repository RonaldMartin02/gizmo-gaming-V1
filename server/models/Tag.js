// Building the 'tag' model. This model will be used to create new documents in the 'tags' collection. with the following properties:
// tagName: String
// tagType: String (gameTitle, esrb, genre, postRating)

const {Schema, model} = require('mongoose');

const tagSchema = new Schema({
  tagName: { type: String, required: true },
  tagType: { type: String, required: true },
});

const Tag = model('Tag', tagSchema);

module.exports = Tag;