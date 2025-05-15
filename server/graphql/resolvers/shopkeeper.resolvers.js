import Shopkeeper from '../../src/models/shopKeeper.model.js';

const shopkeeperResolvers = {
  Query: {
    // Get all shopkeepers
    getAllShopkeepers: async () => {
      try {
        return await Shopkeeper.find();
      } catch (error) {
        throw new Error('Failed to fetch shopkeepers');
      }
    },

    // Get a shopkeeper by ID
    getShopkeeperById: async (_, { id }) => {
      try {
        return await Shopkeeper.findById(id);
      } catch (error) {
        throw new Error('Failed to fetch shopkeeper');
      }
    }
  },

};

export default shopkeeperResolvers;
 