const resolvers = {
  Query: {
    user: async () => {
      return {
        userName: "Jesse",
        id: 123
      }
       },
  },
};

module.exports = resolvers;
