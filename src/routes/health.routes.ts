import { Router, Request, Response } from 'express';

const router = Router();

/**
 * Health check endpoint.
 */
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is healthy',
    timestamp: new Date().toISOString(),
  });
});

export default router;
