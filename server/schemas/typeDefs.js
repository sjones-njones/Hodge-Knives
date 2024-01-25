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
    image4: String
    image5: String
    image6: String
    quantity: Int
    price: Float
    category: String
  }
  
  type Query {
    users: [User]
  }
  
  type Query {
    products: [Product]!
    product(productId: ID!): Product
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    signup(name: String!, email: String!, password: String!): Auth
    addProduct(name: String!, category: String!, description: String!, price: Int!, image: String!, image2: String, image3: String, image4: String, image5: String, image6: String): Product
    removeProduct(productId: ID!): Product
    updateProduct(productId: ID!, name: String!): Product
  }
`;

module.exports = typeDefs;
