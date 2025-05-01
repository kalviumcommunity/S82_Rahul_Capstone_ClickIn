import express from 'express';
import {
  getAllDeliveryPartners,
  getDeliveryPartnerById,
} from '../controllers/deliveryPartner.controller.js';

const router = express.Router();

router.get('/delivery-partners', getAllDeliveryPartners);
router.get('/delivery/:id', getDeliveryPartnerById);

export default router;
