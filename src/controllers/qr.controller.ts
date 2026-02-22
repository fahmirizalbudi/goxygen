import { Request, Response, NextFunction } from 'express';
import { qrService } from '../services/qr.service';

export class QRController {
  /**
   * GET /qr?text=...
   * Handles the request to generate a QR code for the provided text.
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
      
      // If the request accepts HTML (e.g., from a browser), return a minimal page with SEO
      if (req.accepts('html')) {
        res.status(200).send(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <title>Qraft | Generated QR for "${text}"</title>
            <meta name="description" content="Generated QR Code for: ${text}">
            <link rel="icon" type="image/svg+xml" href="/logo.svg">
            <style>
              body { display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #f1f5f9; }
              img { max-width: 90%; background: white; padding: 1rem; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
            </style>
          </head>
          <body>
            <img src="data:image/png;base64,${qrBuffer.toString('base64')}" alt="QR Code for ${text}">
          </body>
          </html>
        `);
        return;
      }

      // Default response for standard API calls (curl, apps, etc.)
      res.setHeader('Content-Type', 'image/png');
      res.send(qrBuffer);
    } catch (error) {
      // Forward the error to the global error handling middleware
      next(error);
    }
  };
}

export const qrController = new QRController();
