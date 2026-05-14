const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'index.html');
if (!fs.existsSync(FILE)) { console.error('Not found: index.html'); process.exit(1); }

let html = fs.readFileSync(FILE, 'utf8');

// Fix all tool cards that have min-height:140px — change to fixed height matching original
html = html.replace(/style="padding:0;overflow:hidden;position:relative;min-height:140px"/g,
  'style="padding:0;overflow:hidden;position:relative;height:120px"');

fs.writeFileSync(FILE, html, 'utf8');
console.log('✅  Tool card sizes fixed');
console.log('🎉  Done!');
