import { gql } from 'apollo-server-express';

const productTypeDefs = gql`
  # Product Type
  type Product {
    _id: ID!
    name: String!
    price: Float!
    stock: Int!
    category: Category!
    vendor: Vendor!
    description: String
    imageUrl: String
    createdAt: String
    updatedAt: String
  }

  # Input type for creating/updating a product
  input ProductInput {
    name: String!
    price: Float!
    stock: Int!
    category: ID!
    vendor: ID!
    description: String
    imageUrl: String
  }

  # Queries for fetching products
  type Query {
    getAllProducts: [Product!]!
    getProductById(id: ID!): Product
    searchProducts(query: String!): [Product!]!
  }

  # Mutations for creating, updating, and deleting products
  type Mutation {
    createProduct(input: ProductInput!): Product!
    updateProduct(id: ID!, input: ProductInput!): Product!
    deleteProduct(id: ID!): Boolean!
  }
`;

export default productTypeDefs;
