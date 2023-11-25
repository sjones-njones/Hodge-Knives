const typeDefs = `
type User {
  userName: String
  id: ID
}

type Query {
  user: User
}
`;


module.exports = typeDefs;
