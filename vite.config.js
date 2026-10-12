import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function databasePlugin() {
  const dbDir = path.resolve(__dirname, 'database');
  const dbFile = path.join(dbDir, 'inquiries.json');

  const ensureDb = () => {
    if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });
    if (!fs.existsSync(dbFile)) fs.writeFileSync(dbFile, '[]', 'utf8');
  };

  const getLeads = () => {
    ensureDb();
    try {
      const content = fs.readFileSync(dbFile, 'utf8');
      return JSON.parse(content || '[]');
    } catch {
      return [];
    }
  };

  const saveLeads = (leads) => {
    ensureDb();
    fs.writeFileSync(dbFile, JSON.stringify(leads, null, 2), 'utf8');
  };

  return {
    name: 'webvibe-database-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url.startsWith('/api/inquiries')) {
          return next();
        }

        // CORS headers
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        if (req.method === 'OPTIONS') {
          res.statusCode = 204;
          res.end();
          return;
        }

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

        next();
      });
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [databasePlugin()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    target: 'esnext'
  }
});
