import Order from '../src/models/orderItem.model.js';

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('products user deliveryPartner');
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders.' });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('products user deliveryPartner');
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
