import express from 'express';
import {
  getAllAddresses,
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddress
} from '../controllers/address.controller.js';

const router = express.Router();

router.get('/addresses', getAllAddresses);
router.get('/address/:id', getAddressById);
router.post('/add-address', createAddress);
router.put('/address/:id', updateAddress);
router.delete('/address/:id', deleteAddress);
export default router;
