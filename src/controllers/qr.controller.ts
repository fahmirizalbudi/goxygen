import { Request, Response, NextFunction } from 'express';
import { qrService } from '../services/qr.service';

/**
 * Controller class to handle QR code related HTTP requests.
 * 
 * @public
 */
export class QRController {
  /**
   * Handles the GET request to generate a QR code for a given text.
   * 
   * @param req - The Express request object.
   * @param res - The Express response object.
   * @param next - The Express next function for error handling.
   * @returns A promise that resolves when the response is sent.
   * 
   * @remarks
   * Expects a 'text' query parameter. Returns a PNG image buffer.
   */
  public generateQR = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const text = req.query.text as string;

    if (!text || text.trim().length === 0) {
      res.status(400).json({
        status: 'error',
        message: 'The query parameter "text" is required and cannot be empty.',
      });
      return;
    }

    try {
      const qrBuffer = await qrService.generateQRBuffer(text);
      
      res.setHeader('Content-Type', 'image/png');
      res.setHeader('Cache-Control', 'public, max-age=3600');
      
      res.send(qrBuffer);
    } catch (error) {
      next(error);
    }
  };
}

/**
 * Exported instance of the QR controller.
 */
export const qrController = new QRController();
