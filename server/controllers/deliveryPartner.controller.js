import DeliveryPartner from '../src/models/deliveryPartner.model.js';

export const getAllDeliveryPartners = async (req, res) => {
  try {
    const partners = await DeliveryPartner.find().populate('assignedOrders');
    res.status(200).json(partners);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch delivery partners." });
  }
};

export const getDeliveryPartnerById = async (req, res) => {
  try {
    const partner = await DeliveryPartner.findById(req.params.id).populate('assignedOrders');
    if (!partner) return res.status(404).json({ error: "Not found" });
    res.status(200).json(partner);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const createDeliveryPartner = async (req, res)=>{
  try{
    const newPartner = new DeliveryPartner(req.body);
    const saved = await newPartner.save();
    res.status(201).json(saved);
  }catch(err){
    res.status(500).json({ error: 'Failed to create deliver partner. '})
  }
};