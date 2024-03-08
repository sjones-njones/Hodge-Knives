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

  
  type Category {
    _id: ID
    name: String
  }
  
  type Product {
    _id: ID
    name: String
    description: String
    image: String
    image2: String
    image3: String
    price: Float
    category: String
  }
  
   type Query {
    products: [Product]!
    productsAvailable: [Product]!
    productsArchive: [Product]!
    product(productId: ID!): Product
    user: User
    users: [User]
    oneUser(email: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    signup(name: String!, email: String!, password: String!): Auth
    addProduct(name: String!, category: String!, description: String!, price: Int!, image: String!, image2: String, image3: String): Product
    removeProduct(productId: ID!): Product
    updateProductCategory(id: ID!, category: String!): Product
    updateProductName(id: ID!, name: String!): Product
    updateProductDescription (id: ID!, description: String!): Product
    updateProductImage(id: ID!, image: String!): Product
    updateProductSecondImage(id: ID!, image2: String!): Product
    updateProductThirdImage(id: ID!, image3: String!): Product
    updateProductPrice(id: ID!, price: Int!): Product


  }
`;

module.exports = typeDefs;
