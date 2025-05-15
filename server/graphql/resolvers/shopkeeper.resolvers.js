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

  Mutation: {
    // Create a new shopkeeper
    createShopkeeper: async (_, { input }) => {
      try {
        const newShopkeeper = new Shopkeeper(input);
        return await newShopkeeper.save();
      } catch (error) {
        throw new Error('Failed to create shopkeeper');
      }
    },

    // Update shopkeeper by ID
    updateShopkeeper: async (_, { id, input }) => {
      try {
        return await Shopkeeper.findByIdAndUpdate(id, input, { new: true });
      } catch (error) {
        throw new Error('Failed to update shopkeeper');
      }
    },

    // Delete a shopkeeper
    deleteShopkeeper: async (_, { id }) => {
      try {
        const deleted = await Shopkeeper.findByIdAndDelete(id);
        return deleted !== null;
      } catch (error) {
        throw new Error('Failed to delete shopkeeper');
      }
    }
  }
};

export default shopkeeperResolvers;
 