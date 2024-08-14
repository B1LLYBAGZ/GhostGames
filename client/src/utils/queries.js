import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query allUsers {
    user {
      _id
      firstName
      lastName
      userName
      email
      password
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
      userName
      email
      password
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query allProducts {
    products {
      _id
      name
      description
      price
      isStock
    }
  }
`;

export const QUERY_SINGLE_PRODUCT = gql`
  query singleProduct($productId: ID!) {
    product(productId: $productId) {
      _id
      name
      description
      price
      isStock
    }
  }
`;
