const db = require('../config/connection');
const { User, Developer, Project, Service } = require('../models');
const developerSeeds = require('./developerSeeds.json');
const userSeeds = require('./userSeeds.json');
const projectSeeds = require('./projectSeeds.json');
const serviceSeeds = require('./serviceSeeds.json');

db.once('open', async () => {
  try {
    await Developer.deleteMany({});
    await Developer.create(developerSeeds);

    await User.deleteMany({});
    await User.create(userSeeds);

    await Project.deleteMany({});
    await Project.create(projectSeeds);

    await Service.deleteMany({});
    await Service.create(serviceSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
