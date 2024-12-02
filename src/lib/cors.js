import Cors from 'cors';

// Initialize CORS middleware
const cors = Cors({
  origin: ['http://localhost:3000', 'https://suite-track.vercel.app'], // Allowed origins
  methods: ['GET', 'POST', 'HEAD'],
});

// Helper function to run middleware
export function runCorsMiddleware(req, res) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}
