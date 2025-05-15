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

  Mutation: {
    // Create a new category
    createCategory: async (_, { input }) => {
      try {
        const category = new Category(input);
        return await category.save();
      } catch (error) {
        throw new Error('Error creating category');
      }
    },

    // Update a category
    updateCategory: async (_, { id, input }) => {
      try {
        return await Category.findByIdAndUpdate(id, input, { new: true });
      } catch (error) {
        throw new Error('Error updating category');
      }
    },

    // Delete a category
    deleteCategory: async (_, { id }) => {
      try {
        const deleted = await Category.findByIdAndDelete(id);
        return deleted !== null;
      } catch (error) {
        throw new Error('Error deleting category');
      }
    },
  },
};

export default categoryResolvers;
