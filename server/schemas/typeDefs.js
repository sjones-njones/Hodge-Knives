const typeDefs = `
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Auth {
    token: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    signup(name: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
