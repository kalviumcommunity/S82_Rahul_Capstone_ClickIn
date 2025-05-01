import express from 'express';
import {
  getAllAddresses,
  getAddressById,
} from '../controllers/address.controller.js';

const router = express.Router();

router.get('/addresses', getAllAddresses);
router.get('/address/:id', getAddressById);

export default router;
