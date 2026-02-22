import QRCode from 'qrcode';

/**
 * Service class for QR code generation logic.
 * 
 * @public
 */
export class QRService {
  /**
   * Generates a QR code buffer for the provided text.
   * 
   * @param text - The string to be encoded into the QR code.
   * @returns A promise that resolves to a Buffer containing the PNG image.
   * 
   * @throws Error if the QR code generation fails.
   */
  public async generateQRBuffer(text: string): Promise<Buffer> {
    try {
      return await QRCode.toBuffer(text);
    } catch (error) {
      throw new Error('Failed to generate QR code');
    }
  }
}

/**
 * Exported instance of the QR service.
 */
export const qrService = new QRService();
