import { Router, Request, Response } from 'express';

/**
 * Express router for health check endpoints.
 */
const router = Router();

/**
 * Route: GET /health
 * Description: Checks the current health status of the API server.
 * 
 * @param req - The Express request object.
 * @param res - The Express response object.
 */
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is healthy',
    timestamp: new Date().toISOString(),
  });
});

export default router;
