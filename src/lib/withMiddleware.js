import { runCorsMiddleware } from './cors';

export default function withMiddleware(handler) {
  return async (req, res) => {
    try {
      await runCorsMiddleware(req, res); // Add CORS
      return handler(req, res); // Execute the handler
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
}
