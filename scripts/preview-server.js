// scripts/preview-server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8080;

// Serve static files from dist directory
app.use('/made-with', express.static(path.join(__dirname, '../dist')));

// Redirect root to /made-with/
app.get('/', (req, res) => {
    res.redirect('/made-with/');
});

app.listen(PORT, () => {
    console.log(`Preview server running at http://localhost:${PORT}/made-with/`);
});
