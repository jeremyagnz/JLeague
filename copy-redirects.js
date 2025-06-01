const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src', '_redirects');
const dest = path.join(__dirname, 'dist', 'jleague', '_redirects');

try {
  fs.copyFileSync(src, dest);
  console.log('Archivo _redirects copiado a dist/jleague/');
} catch (err) {
  console.error('Error copiando el archivo _redirects:', err);
}
