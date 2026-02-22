import express, { Request, Response } from 'express';
import QRCode from 'qrcode';

const app = express();
const port = process.env.PORT || 3000;

app.get('/qr', async (req: Request, res: Response) => {
  const text = req.query.text as string;

  if (!text) {
    return res.status(400).json({ error: 'Parameter "text" is required' });
  }

  try {
    const qrBuffer = await QRCode.toBuffer(text);
    res.setHeader('Content-Type', 'image/png');
    res.send(qrBuffer);
  } catch (error) {
    console.error('QR code generation error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`QR Code Generator API listening at http://localhost:${port}`);
});
