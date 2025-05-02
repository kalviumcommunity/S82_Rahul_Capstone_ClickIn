
import Product from '../src/models/product.model.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const productsWithImages = products.map(product => {
      if (product.images?.length) {
        product.images = product.images.map(image => image);
      }
      return product;
    });
    res.status(200).json({ products: productsWithImages });
  } catch (err) {
    res.status(500).json({ error: 'Server error. Could not fetch products.' });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getProductsByEmail = async (req, res) => {
  const { email } = req.query;
  try {
    const products = await Product.find({ email });
    if (!products) return res.status(400).send('Email not found');
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch user products.' });
  }
};

export const createProduct = async (req,res)=>{
  try{
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch(err){
    res.status(500).json({error: 'failed to create product. '});
  }
};