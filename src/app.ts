import express, { Application } from 'express';
import path from 'path';
import qrRoutes from './routes/qr.routes';
import healthRoutes from './routes/health.routes';
import { errorHandler } from './middleware/error.middleware';

/**
 * Main application class to configure and initialize the Express server.
 * 
 * @internal
 */
class App {
  /**
   * The Express application instance.
   */
  public app: Application;

  /**
   * Initializes the application by setting up middlewares, routes, and error handlers.
   */
  constructor() {
    this.app = express();
    this.setupMiddlewares();
    this.setupRoutes();
    this.setupErrorHandlers();
  }

  /**
   * Configures standard Express middlewares.
   */
  private setupMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(path.join(__dirname, '../public')));
  }

  /**
   * Configures API routes and static asset routes.
   */
  private setupRoutes(): void {
    this.app.get('/favicon.ico', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/logo.svg'));
    });

    this.app.use('/health', healthRoutes);
    this.app.use('/qr', qrRoutes);
  }

  /**
   * Configures the global error handling middleware.
   */
  private setupErrorHandlers(): void {
    this.app.use(errorHandler);
  }
}

/**
 * Exported instance of the Express application.
 */
export default new App().app;
