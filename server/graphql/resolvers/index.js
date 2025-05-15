import productResolvers from './product.resolvers.js';
import categoryResolvers from './category.resolvers.js';
import shopkeeperResolvers from './shopkeeper.resolvers.js';

const resolvers = {
  Query: {
    ...productResolvers.Query,
    ...categoryResolvers.Query,
    ...shopkeeperResolvers.Query,
  },
  
};

export default resolvers;
