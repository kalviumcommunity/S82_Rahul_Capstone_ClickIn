import express from 'express';
import {
  getAllDeliveryPartners,
  getDeliveryPartnerById,
  createDeliveryPartner
} from '../controllers/deliveryPartner.controller.js';

const router = express.Router();

router.get('/delivery-partners', getAllDeliveryPartners);
router.get('/delivery/:id', getDeliveryPartnerById);
router.post('/add-delivery', createDeliveryPartner);

export default router;
