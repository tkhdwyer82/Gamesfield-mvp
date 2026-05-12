const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'index.html');

if (!fs.existsSync(FILE)) {
  console.error('❌  Not found: index.html');
  process.exit(1);
}

let html = fs.readFileSync(FILE, 'utf8');
let count = 0;

html = html.replace('<button class="start-btn">Start Creating</button>','<a href="onboarding.html" class="start-btn">Start Creating</a>');
count++; console.log('✅  Start Creating → onboarding.html');

html = html.replace('<button class="pbtn pbtn-orange">Try Project Memory</button>','<a href="onboarding.html" class="pbtn pbtn-orange">Try Project Memory</a>');
count++; console.log('✅  Try Project Memory → onboarding.html');

html = html.replace('<button class="pbtn" style="background:#1a1a1a;border:1px solid #2a2a2a;color:#fff">◈ Try 3D Gen</button>','<a href="onboarding.html" class="pbtn" style="background:#1a1a1a;border:1px solid #2a2a2a;color:#fff">◈ Try 3D Gen</a>');
count++; console.log('✅  Try 3D Gen → onboarding.html');

html = html.replace('<button class="pbtn" style="background:#ff4d8b;color:#fff;margin-top:14px">Try Trailer Studio</button>','<a href="onboarding.html" class="pbtn" style="background:#ff4d8b;color:#fff;margin-top:14px">Try Trailer Studio</a>');
count++; console.log('✅  Try Trailer Studio → onboarding.html');

html = html.replace('<button class="pbtn" style="background:#9b6dff;color:#fff">Try NPC Brain</button>','<a href="onboarding.html" class="pbtn" style="background:#9b6dff;color:#fff">Try NPC Brain</a>');
count++; console.log('✅  Try NPC Brain → onboarding.html');

html = html.replace('href="#" class="assets-btn"','href="onboarding.html" class="assets-btn"');
count++; console.log('✅  My Assets → onboarding.html');

fs.writeFileSync(FILE, html, 'utf8');
console.log('\n🎉  Done — ' + count + ' CTAs wired to onboarding.html');
