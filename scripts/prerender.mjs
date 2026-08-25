import fs from 'node:fs/promises';
import path from 'node:path';
import { render } from '../.ssr/entry-server.js';

const pages = [
  { route: '/', file: 'dist/index.html' },
  { route: '/attention-by-design/', file: 'dist/attention-by-design/index.html' },
  { route: '/the-firelit-mind/', file: 'dist/the-firelit-mind/index.html' },
  { route: '/privacy/', file: 'dist/privacy/index.html' },
];

for (const page of pages) {
  const absolutePath = path.resolve(page.file);
  const template = await fs.readFile(absolutePath, 'utf8');
  const markup = render(page.route);
  const html = template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  await fs.writeFile(absolutePath, html);
}
