import express, { Application } from 'express';
import path from 'path';
import qrRoutes from './routes/qr.routes';
import healthRoutes from './routes/health.routes';
import { errorHandler } from './middleware/error.middleware';

/**
 * Configure Express application.
 */
class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setupMiddlewares();
    this.setupRoutes();
    this.setupErrorHandlers();
  }

  private setupMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    // Serve static files from the 'public' directory
    this.app.use(express.static(path.join(__dirname, '../public')));
  }

  private setupRoutes(): void {
    // Root route with minimal SEO and favicon link
    this.app.get('/', (req, res) => {
      res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Qraft | QR Code Generator API</title>
          <meta name="description" content="A simple, modular, and fast QR code generator API.">
          <link rel="icon" type="image/svg+xml" href="/logo.svg">
        </head>
        <body>
          <p>Qraft API is running. See /qr?text=... for usage.</p>
        </body>
        </html>
      `);
    });

    // Explicit favicon route
    this.app.get('/favicon.ico', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/logo.svg'));
    });

    this.app.use('/health', healthRoutes);
    this.app.use('/qr', qrRoutes);
  }

  private setupErrorHandlers(): void {
    this.app.use(errorHandler);
  }
}

export default new App().app;
