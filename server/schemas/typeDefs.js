const typeDefs = `
type User {
  name: String!,
  email: String!,
  password: String!,
  _id: ID!
}

type Query {
  users: [User]
}
`;

module.exports = typeDefs;
