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
    name: String
    description: String
    price: Float
    stock: Int
  }

  type Yugioh {
    _id: iD!
    name: String
    price: Float
    stock: Int
  }

  type CartItem {
    id: ID!
    product: Product!
    quantity: Int!
  }

  type Cart {
    _id: ID
    items: [CartItem!]!
    cost: Float!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    products: [Product]
    yugiCards: [Yugioh]
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
    login(email: String!, password: String!): Auth
    addToCart(productId: ID!, quantity: Int!): CartItem!
    removeFromCart(productId: ID!, quantity: Int!): CartItem!
  }
`;

module.exports = typeDefs;
