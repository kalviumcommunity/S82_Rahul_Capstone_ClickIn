import { gql } from 'apollo-server-express';

const categoryTypeDefs = gql`
  # Category Type
  type Category {
    _id: ID!
    name: String!
    imageUrl: String
  }

  # Input type for creating/updating a category
  input CategoryInput {
    name: String!
    imageUrl: String
  }

  # Queries for fetching categories
  type Query {
    getAllCategories: [Category!]!
    getCategoryById(id: ID!): Category
  }

  
`;

export default categoryTypeDefs;
