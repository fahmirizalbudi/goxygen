import app from './app';

/**
 * Server entry point.
 * Starts the Express application on the configured port.
 */
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`QR Code Generator API listening at http://localhost:${port}`);
  console.log(`[GET] http://localhost:${port}/qr?text=YOUR_TEXT`);
});
