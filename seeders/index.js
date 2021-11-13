const  { Seeder } = require('mongo-seeding');
const path = require('path');
require('dotenv').config();


const config = {
  database: process.env.MONGODB_URI,
  dropDatabase: false,
};
const seeder = new Seeder(config);

const collections = seeder.readCollectionsFromPath(
  path.resolve('./seeders/data'),
  {
    transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
  }
);

seeder.import(collections).then(() => {
    console.log('Success');
  }).catch(err => {
    console.log('Error', err);
  });