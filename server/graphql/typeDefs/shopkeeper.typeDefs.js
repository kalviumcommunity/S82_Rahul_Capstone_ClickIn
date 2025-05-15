import { gql } from 'apollo-server-express';

const shopkeeperTypeDefs = gql`
  # ShopKeeper Type
  type ShopKeeper {
    _id: ID!
    name: String!
    shopName: String!
    email: String!
    phone: String
    password: String!
    location: String
    role: String!
    createdAt: String!
    updatedAt: String!
  }

  # Input type for creating/updating a shopkeeper
  input ShopKeeperInput {
    name: String!
    shopName: String!
    email: String!
    phone: String
    password: String!
    location: String
    role: String
  }

  # Queries for fetching shopkeepers
  type Query {
    getAllShopkeepers: [ShopKeeper!]!
    getShopKeeperById(id: ID!): ShopKeeper
  }

  # Mutations for creating, updating, and deleting shopkeepers
  type Mutation {
    createShopKeeper(input: ShopKeeperInput!): ShopKeeper!
    updateShopKeeper(id: ID!, input: ShopKeeperInput!): ShopKeeper!
    deleteShopKeeper(id: ID!): Boolean!
  }
`;

export default shopkeeperTypeDefs;
