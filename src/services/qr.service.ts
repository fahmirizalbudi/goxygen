import QRCode from 'qrcode';

export class QRService {
  /**
   * Generates a QR code buffer for the given text.
   * @param text The string to encode into the QR code.
   * @returns A Buffer containing the PNG image.
   */
  public async generateQRBuffer(text: string): Promise<Buffer> {
    try {
      return await QRCode.toBuffer(text);
    } catch (error) {
      throw new Error('Failed to generate QR code');
    }
  }
}

export const qrService = new QRService();
