import express from 'express';
import {
  getAllDeliveryPartners,
  getDeliveryPartnerById,
  createDeliveryPartner,
  updateDeliveryPartner
} from '../controllers/deliveryPartner.controller.js';

const router = express.Router();

router.get('/delivery-partners', getAllDeliveryPartners);
router.get('/delivery/:id', getDeliveryPartnerById);
router.post('/add-delivery', createDeliveryPartner);
router.put('/delivery/:id', updateDeliveryPartner);
export default router;
