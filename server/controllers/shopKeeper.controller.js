import Shopkeeper from '../src/models/shopKeeper.model.js';

export const getAllShopkeepers = async (req, res) => {
  try {
    const shopkeepers = await Shopkeeper.find();
    res.status(200).json(shopkeepers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch shopkeepers.' });
  }
};

export const getShopkeeperById = async (req, res) => {
  try {
    const shopkeeper = await Shopkeeper.findById(req.params.id);
    if (!shopkeeper) return res.status(404).json({ error: 'Shopkeeper not found' });
    res.status(200).json(shopkeeper);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const createShopKeeper = async (req,res)=>{
  try{
    const newShopKeeper = new Shopkeeper(req.body);
    const saved = await newShopKeeper.save();
    res.status(201).json(saved);
  } catch(err){
    res.status(500).json({ error: 'Failed to create shopKeeper. '});
  }
};

export const updateShopkeeper = async (req, res) => {
  try {
    const updated = await Shopkeeper.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update shopkeeper.' });
  }
};

export const deleteShopkeeper = async (req, res) => {
  try {
    await Shopkeeper.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Shopkeeper deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete shopkeeper.' });
  }
};