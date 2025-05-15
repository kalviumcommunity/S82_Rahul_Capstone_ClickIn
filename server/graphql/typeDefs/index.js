import { gql } from 'apollo-server-express';

// Import individual type definitions
import productTypeDefs from './product.typeDefs';
import categoryTypeDefs from './category.typeDefs';
import shopkeeperTypeDefs from './shopkeeper.typeDefs';

// Combine all type definitions
const typeDefs = gql`
  ${productTypeDefs}
  ${categoryTypeDefs}
  ${shopkeeperTypeDefs}
`;

export default typeDefs;
