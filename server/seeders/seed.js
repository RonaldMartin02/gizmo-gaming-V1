const db = require('../config/connection');
const { Build } = require('../models');
const buildSeeds = require('./buildSeeds.json');
const cleanDB = require('./cleanDB');

console.log('Loading seeds...');

db.once('open', async () => {
    console.log('Seeding the database...');
    await cleanDB('Build', 'Builds');
    console.log('Database cleaned!');
    await Build.insertMany(buildSeeds);
    console.log('Builds seeded!');

  console.log('all done!');
  process.exit(0);
});
