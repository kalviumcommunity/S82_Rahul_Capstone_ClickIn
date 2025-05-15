// import Product from "../../src/models/product.model.js";

// const productResolvers = {
//   Query: {
//     getAllProducts: async () => {
//       return await Product.find().populate("category").populate("vendor");
//     },

//     getProductById: async (_, { id }) => {
//       return await Product.findById(id).populate("category").populate("vendor");
//     },

//     searchProducts: async (_, { query }) => {
//       return await Product.find({
//         $or: [
//           { name: { $regex: query, $options: "i" } },
//           { description: { $regex: query, $options: "i" } }
//         ]
//       }).populate("category").populate("vendor");
//     }
//   },

//   Mutation: {
//     createProduct: async (_, { input }) => {
//       const product = new Product(input);
//       return await product.save();
//     },

//     updateProduct: async (_, { id, input }) => {
//       return await Product.findByIdAndUpdate(id, input, { new: true }).populate("category").populate("vendor");
//     },

//     deleteProduct: async (_, { id }) => {
//       const result = await Product.findByIdAndDelete(id);
//       return result !== null;
//     }
//   }
// };

// export default productResolvers;
import Product from '../../src/models/product.model.js';

const productResolvers = {
  Query: {
    // Fetch all products
    getAllProducts: async () => {
      try {
        return await Product.find()
          .populate('category')
          .populate('vendor');
      } catch (error) {
        throw new Error('Failed to fetch products');
      }
    },

    // Fetch a product by ID
    getProductById: async (_, { id }) => {
      try {
        return await Product.findById(id)
          .populate('category')
          .populate('vendor');
      } catch (error) {
        throw new Error('Failed to fetch product');
      }
    },

    // Search products by name or description
    searchProducts: async (_, { query }) => {
      try {
        return await Product.find({
          $or: [
            { name: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } }
          ]
        })
          .populate('category')
          .populate('vendor');
      } catch (error) {
        throw new Error('Failed to search products');
      }
    },
  },

  
};

export default productResolvers;
