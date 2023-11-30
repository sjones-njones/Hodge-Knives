const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./config/connection")
const { User } = require("./models")
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const {typeDefs, resolvers} = require("./schemas")

app.get("/demo", async (req, res) => {
  const data = await User.find({}); 
  res.json(data);
})
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server));

  if (process.env.Node_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (_, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }
  
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Application is running on ${PORT}!`);
    });
  });
}

startApolloServer();


