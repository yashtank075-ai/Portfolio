import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';

import contactRoutes from './routes/contactRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load server/.env configuration
dotenv.config({ path: path.resolve(__dirname, './.env') });
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration supporting local development ports and production URL
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5175',
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:5175',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:5175'
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow non-browser requests (Postman, curl) or matched origins
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true); // Fallback allow for local preview or origin match
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// Body parser middleware with payload limit for security
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Rate limiting middleware: max 15 requests per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  message: {
    success: false,
    message: 'Too many contact requests from this IP. Please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'Yash Portfolio Backend API',
    timestamp: new Date().toISOString()
  });
});

// Mount Contact Routes
app.use('/api/contact', contactLimiter, contactRoutes);

// Global 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(`🚀 Yash Portfolio Backend API Server Running`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`✉️  Recipient: ${process.env.CONTACT_EMAIL || 'yash.dev.contact26@gmail.com'}`);
  console.log(`=================================================`);
});
