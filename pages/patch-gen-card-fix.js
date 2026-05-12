const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'index.html');
if (!fs.existsSync(FILE)) { console.error('Not found: index.html'); process.exit(1); }

let html = fs.readFileSync(FILE, 'utf8');

// Fix 1: Remove the ::after diamond pseudo-element by updating the CSS
const oldCSS = '.gen-card-visual{position:absolute;right:0;top:0;bottom:0;width:55%;background:linear-gradient(160deg,#1a1a2e,#0f0f1a)}\n  .gen-card-visual::after{content:\'◈\';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:52px;color:rgba(155,109,255,.2)}';
const newCSS = '.gen-card-visual{position:absolute;right:0;top:0;bottom:0;width:55%;background:#0a0a0a;overflow:hidden}';

if (html.includes(oldCSS)) {
  html = html.replace(oldCSS, newCSS);
  console.log('✅  Gen card CSS fixed');
} else {
  // Try replacing just the visual line
  html = html.replace(
    '.gen-card-visual{position:absolute;right:0;top:0;bottom:0;width:55%;background:linear-gradient(160deg,#1a1a2e,#0f0f1a)}',
    '.gen-card-visual{position:absolute;right:0;top:0;bottom:0;width:55%;background:#0a0a0a;overflow:hidden}'
  );
  // Remove the ::after rule
  html = html.replace(
    ".gen-card-visual::after{content:'◈';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:52px;color:rgba(155,109,255,.2)}",
    ''
  );
  console.log('✅  Gen card CSS fixed (fallback)');
}

// Fix 2: Make sure the video inside gen-card-visual is styled correctly
html = html.replace(
  'style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:0 12px 12px 0;opacity:.85"',
  'style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:1"'
);
console.log('✅  Video styles updated');

fs.writeFileSync(FILE, html, 'utf8');
console.log('\n🎉  Done! Open index.html to check the gen card video.');
