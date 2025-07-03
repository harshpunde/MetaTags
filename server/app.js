import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contact.js';


const app = express();
const PORT = 5001;

// ✅ Add your token from prerender.io dashboard


// ✅ Enable Prerender.io before routes


// CORS and JSON handling
app.use(cors());
app.use(express.json());

// Your routes
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
