import express from 'express';
import {
  getAllAddresses,
  getAddressById,
  createAddress
} from '../controllers/address.controller.js';

const router = express.Router();

router.get('/addresses', getAllAddresses);
router.get('/address/:id', getAddressById);
router.post('/add-address', createAddress);

export default router;
