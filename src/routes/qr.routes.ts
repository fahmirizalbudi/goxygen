import { Router } from 'express';
import { qrController } from '../controllers/qr.controller';

/**
 * Express router for QR code endpoints.
 */
const router = Router();

/**
 * Route: GET /qr
 * Description: Generates a QR code image for the provided text parameter.
 */
router.get('/', qrController.generateQR);

export default router;
