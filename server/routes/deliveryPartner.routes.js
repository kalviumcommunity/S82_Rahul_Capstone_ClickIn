import express from 'express';
import {
  getAllDeliveryPartners,
  getDeliveryPartnerById,
  createDeliveryPartner,
  updateDeliveryPartner,
  deleteDeliveryPartner
} from '../controllers/deliveryPartner.controller.js';

const router = express.Router();

router.get('/delivery-partners', getAllDeliveryPartners);
router.get('/delivery/:id', getDeliveryPartnerById);
router.post('/add-delivery', createDeliveryPartner);
router.put('/delivery/:id', updateDeliveryPartner);
router.delete('/delivery/:id', deleteDeliveryPartner);
export default router;
