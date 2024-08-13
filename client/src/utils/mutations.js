import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $userName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      userName: $userName
      email: $email
      password: $password
    ) {
      token
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation addToCart($user: String, $items: String, $cost: Int) {
    addToCart(user: $user, items: $items, cost: $cost)
  }
`;
