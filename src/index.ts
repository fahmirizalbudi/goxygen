import app from './app';

/**
 * Entry point for the QR Code Generator API.
 * Initializes the server and starts listening on the specified port.
 * 
 * @public
 */
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`QR Code Generator API listening at http://localhost:${port}`);
  console.log(`[GET] http://localhost:${port}/qr?text=YOUR_TEXT`);
});
