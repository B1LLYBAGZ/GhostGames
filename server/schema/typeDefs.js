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
    _id: ID
    name: String
    description: String
    price: Int
    stock: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    products: [Product]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      userName: String!
      email: String!
      password: String!
    ): Auth
    addToCart(user: String, items: String, cost: Int): String
  }
`;

module.exports = typeDefs;
