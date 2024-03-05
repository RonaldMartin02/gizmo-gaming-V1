// Building the 'game' model. This model will be used to create new documents in the 'games' collection. with the following properties:
// gameTitle: String
// genre: String
// releaseYear: Number
// developer: String
// esrb: String
// platform: String


const {Schema, model} = require('mongoose');

const gameSchema = new Schema({
  gameTitle: { 
    type: String, 
    required: true 
  },
  genre: { 
    type: String, 
    required: true 
  },
  // releaseYear: { type: Number, required: true },
  // developer: { type: String, required: true },
  esrb: { 
    type: String, 
    required: true 
  },
  // platform: { type: String, required: true },
  // lastAccessed: { type: Date, default: Date.now },
});

const Game = model('Game', gameSchema);
module.exports = Game;
