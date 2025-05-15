import Category from '../../src/models/category.model.js';

const categoryResolvers = {
  Query: {
    // Get all categories
    getAllCategories: async () => {
      try {
        return await Category.find();
      } catch (error) {
        throw new Error('Error fetching categories');
      }
    },

    // Get category by ID
    getCategoryById: async (_, { id }) => {
      try {
        return await Category.findById(id);
      } catch (error) {
        throw new Error('Error fetching category');
      }
    },
  },

  
};

export default categoryResolvers;
