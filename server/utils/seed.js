const db = require("../config/connection");
const models = require("../models");
const userSeeds = require("./userSeeds.json");

async function cleanDB(modelName, collectionName) {
  // eslint-disable-next-line no-useless-catch
  try {
    const modelExists = await models[modelName].db.db
      .listCollections({
        name: collectionName,
      })
      .toArray();

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}

db.once("open", async () => {
  await cleanDB("User", "users");
  await models.User.create(userSeeds);

  console.log("all done!");
  process.exit(0);
});
