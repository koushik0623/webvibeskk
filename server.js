import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
const dbDir = path.resolve(__dirname, 'database');
const dbFile = path.join(dbDir, 'inquiries.json');

const ensureDb = () => {
  if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });
  if (!fs.existsSync(dbFile)) fs.writeFileSync(dbFile, '[]', 'utf8');
};

const getLeads = () => {
  ensureDb();
  try {
    return JSON.parse(fs.readFileSync(dbFile, 'utf8') || '[]');
  } catch {
    return [];
  }
};

const saveLeads = (leads) => {
  ensureDb();
  fs.writeFileSync(dbFile, JSON.stringify(leads, null, 2), 'utf8');
};

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  // API ROUTE
  if (req.url.startsWith('/api/inquiries')) {
    if (req.method === 'GET') {
      const leads = getLeads();
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ success: true, count: leads.length, leads }));
      return;
    }

    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const data = JSON.parse(body || '{}');
          const leads = getLeads();
          const newLead = {
            id: 'KK-LEAD-' + Date.now().toString(36).toUpperCase() + '-' + Math.floor(1000 + Math.random() * 9000),
            createdAt: new Date().toISOString(),
            formattedDate: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            status: 'New Inquiry',
            name: data.name || 'Anonymous Client',
            email: data.email || 'N/A',
            phone: data.phone || 'N/A',
            projectType: data.projectType || 'Customized Bespoke Architecture',
            budget: data.budget || 'Custom / Flexible',
            timeline: data.timeline || 'Flexible Milestones',
            details: data.details || data.message || '',
            source: data.source || 'Website Contact Form'
          };
          leads.unshift(newLead);
          saveLeads(leads);
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: true, lead: newLead, totalCount: leads.length }));
        } catch (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: err.message }));
        }
      });
      return;
    }

    if (req.method === 'DELETE') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const data = JSON.parse(body || '{}');
          let leads = getLeads();
          if (data.id) {
            leads = leads.filter(l => l.id !== data.id);
          } else if (data.clearAll) {
            leads = [];
          }
          saveLeads(leads);
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: true, count: leads.length }));
        } catch (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: err.message }));
        }
      });
      return;
    }
  }

  // Static File Serving
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.statusCode = 404;
        res.end('404 Not Found');
      } else {
        res.statusCode = 500;
        res.end('500 Server Error: ' + err.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`WEB VIBE @KK Database Server running at http://localhost:${PORT}/`);
  console.log(`API Endpoint: http://localhost:${PORT}/api/inquiries`);
});

