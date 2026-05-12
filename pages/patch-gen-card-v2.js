const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'index.html');
if (!fs.existsSync(FILE)) { console.error('Not found: index.html'); process.exit(1); }

let html = fs.readFileSync(FILE, 'utf8');

// Fix the CSS - make gen-card-visual visible with explicit dimensions
const cssPatterns = [
  '.gen-card-visual{position:absolute;right:0;top:0;bottom:0;width:55%;background:#0a0a0a;overflow:hidden}',
  '.gen-card-visual{position:absolute;right:0;top:0;bottom:0;width:55%;background:linear-gradient(160deg,#1a1a2e,#0f0f1a)}'
];

let cssFixed = false;
for (const pattern of cssPatterns) {
  if (html.includes(pattern)) {
    html = html.replace(pattern, '.gen-card-visual{position:absolute;right:0;top:0;bottom:0;width:55%;overflow:visible;z-index:1}');
    cssFixed = true;
    console.log('✅  CSS fixed');
    break;
  }
}
if (!cssFixed) console.log('⚠️  CSS pattern not found - may already be updated');

// Remove ::after diamond if still there
html = html.replace(".gen-card-visual::after{content:'◈';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:52px;color:rgba(155,109,255,.2)}", '');

// Fix the video element style - ensure it's visible
html = html.replace(
  /(<video[^>]*class="[^"]*"[^>]*>|<video[^>]*style="[^"]*gen-card[^"]*")/g,
  match => match
);

// Find the gen-card-visual div and ensure video is correctly placed
// Look for the div with embedded video and fix its inline style
html = html.replace(
  '<div class="gen-card-visual" style="padding:0;overflow:hidden;position:relative">',
  '<div class="gen-card-visual" style="position:absolute;right:0;top:0;bottom:0;width:55%;overflow:hidden;z-index:1">'
);
console.log('✅  Gen card div style fixed');

// Fix video element to be fully visible
html = html.replace(
  'style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:1"',
  'style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;opacity:1;display:block"'
);
console.log('✅  Video element style fixed');

fs.writeFileSync(FILE, html, 'utf8');
console.log('\n🎉  Done! Refresh index.html to check.');
