import { Router } from 'express';
import { qrController } from '../controllers/qr.controller';

const router = Router();

/**
 * QR Code related routes.
 * /qr?text=...
 */
router.get('/', qrController.generateQR);

export default router;
