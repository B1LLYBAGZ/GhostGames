const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    userName: String
    email: String
    password: String
  }

  type Product {
    _id: ID!
    name: String!
    description: String
    price: Int!
    stock: Int
  }

  type Cart {
    _id: ID
    user: ID
    items: [Product!]!
    cost: Float!
    createdAt: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    getCart(userId: ID!): Cart
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      userName: String!
      email: String!
      password: String!
    ): Auth
    addToCart(userId: ID!, productId: ID!): Cart
    removeFromCart(userId: ID!, productId: ID!): Cart
  }
`;

module.exports = typeDefs;
