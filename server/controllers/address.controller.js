import Address from '../src/models/address.model.js';

export const getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.status(200).json(addresses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch addresses.' });
  }
};

export const getAddressById = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) return res.status(404).json({ error: 'Address not found' });
    res.status(200).json(address);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const createAddress = async (req,res)=> {
  try{
    const newAddress = new Address(req.body);
    const saved = await newAddress.save();
    res.status(201).json(saved);
  }catch(err){
    res.status(500).json({ error: 'Failed to create address.'});
    
  }

};

export const updateAddress = async (req, res)=> {
  try{
    const updated = await Address.findByIdAndUpdate(req.params.id,req.body,{new: true});
    res.status(200).json(updated);
  } catch(err){
    res.status(500).json({ error: 'Failed to update address'});
  }
};

export const deleteAddress = async (req, res) => {
  try {
    await Address.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Address deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete address.' });
  }
};