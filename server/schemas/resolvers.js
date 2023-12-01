const { User } = require("../models");

const resolvers = {
  Query: {
    users: async () => User.find({})
    }
  };


module.exports = resolvers;
