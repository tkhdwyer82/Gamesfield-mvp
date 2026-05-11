#!/usr/bin/env node
/**
 * Gamesfield — Nav Patch Script
 * Run: node patch-index-nav.js
 * 
 * Patches pages/index.html in-place:
 *  1. Wires nav tabs (real links + coming soon modal)
 *  2. Injects modal CSS + HTML + JS
 * Videos / all other content untouched.
 */

const fs = require('fs');
const path = require('path');

const FILE = fs.existsSync(path.join(__dirname, "index.html")) ? path.join(__dirname, "index.html") : path.join(__dirname, "pages", "index.html");

if (!fs.existsSync(FILE)) {
  console.error('❌  Not found: index.html — make sure this script is in the same folder as index.html');
  process.exit(1);
}

let html = fs.readFileSync(FILE, 'utf8');

// ── 1. Replace the nav menu list ────────────────────────────────────────────

const OLD_NAV = /<div id="header__menu_list">[\s\S]*?<\/div>/;

const NEW_NAV = `<div id="header__menu_list">
    <a href="index.html" class="nav-item active">Explore</a>
    <a href="generate-art.html" class="nav-item">Image</a>
    <button class="nav-item" onclick="showComingSoon('3D Assets','Generate game-ready 3D meshes, props and environments via Meshy and more.')">3D Assets</button>
    <button class="nav-item" onclick="showComingSoon('Audio &amp; Voice','Compose adaptive OSTs with AIVA, generate voice lines with ElevenLabs.')">Audio</button>
    <button class="nav-item" onclick="showComingSoon('Collab','Real-time multiplayer canvas — work on your world with your team.')">Collab</button>
    <button class="nav-item" onclick="showComingSoon('Canvas','A node-based visual scripting canvas for your entire game world.')">Canvas <span class="nav-badge">New</span></button>
    <button class="nav-item" onclick="showComingSoon('Edit','AI-powered image and video editing tuned to your project style.')">Edit</button>
    <button class="nav-item" onclick="showComingSoon('Character','Design consistent character rosters with shared lore and visual style.')">Character</button>
    <a href="world-builder.html" class="nav-item">World Builder <span class="nav-badge">New</span></a>
    <a href="npc-brain.html" class="nav-item">NPC Brain <span class="nav-badge">New</span></a>
    <button class="nav-item" onclick="showComingSoon('MCP &amp; CLI','Connect Gamesfield to your engine via Model Context Protocol or CLI.')">MCP &amp; CLI <span class="nav-badge">New</span></button>
    <button class="nav-item" onclick="showComingSoon('Trailers','Auto-cut cinematic trailers from your generated assets.')">Trailers</button>
    <button class="nav-item" onclick="showComingSoon('Originals','Curated showcase of games built entirely with Gamesfield.')">Originals</button>
    <button class="nav-item" onclick="showComingSoon('Community','Share builds, remix assets, and connect with 2,400+ indie devs.')">Community</button>
  </div>`;

if (!OLD_NAV.test(html)) {
  console.error('❌  Could not find header__menu_list block. Has the file structure changed?');
  process.exit(1);
}
html = html.replace(OLD_NAV, NEW_NAV);
console.log('✅  Nav links wired');

// ── 2. Inject modal CSS before </style> ─────────────────────────────────────

const MODAL_CSS = `
  /* ── COMING SOON MODAL ── */
  #cs-overlay{display:none;position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.75);backdrop-filter:blur(6px);align-items:center;justify-content:center}
  #cs-overlay.open{display:flex}
  #cs-modal{background:#1c1e20;border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:40px 36px 32px;max-width:400px;width:90%;position:relative;animation:csIn .22s cubic-bezier(.22,1,.36,1)}
  @keyframes csIn{from{opacity:0;transform:translateY(12px) scale(.97)}to{opacity:1;transform:none}}
  #cs-close{position:absolute;top:16px;right:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-radius:8px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:rgba(255,255,255,.5);transition:all .12s}
  #cs-close:hover{background:rgba(255,255,255,.1);color:#fff}
  .cs-badge{display:inline-flex;align-items:center;gap:6px;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:600;letter-spacing:.1em;color:#FE9E17;text-transform:uppercase;background:rgba(254,158,23,.1);border:1px solid rgba(254,158,23,.2);border-radius:6px;padding:4px 10px;margin-bottom:18px}
  .cs-badge::before{content:'';width:6px;height:6px;border-radius:50%;background:#FE9E17;animation:pulse 2s infinite}
  #cs-title{font-family:'Bebas Neue',sans-serif;font-size:32px;letter-spacing:.03em;color:#fff;margin-bottom:10px;line-height:1.1}
  #cs-desc{font-size:14px;color:rgba(255,255,255,.5);line-height:1.6;margin-bottom:28px}
  .cs-input-row{display:flex;gap:8px}
  .cs-input{flex:1;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:10px 14px;font-size:13px;color:#fff;font-family:'DM Sans',sans-serif;outline:none;transition:border-color .12s}
  .cs-input::placeholder{color:rgba(255,255,255,.3)}
  .cs-input:focus{border-color:rgba(254,158,23,.5)}
  .cs-notify-btn{background:#FE9E17;border:none;border-radius:10px;padding:10px 18px;font-size:13px;font-weight:600;color:#000;cursor:pointer;font-family:'DM Sans',sans-serif;white-space:nowrap;transition:opacity .12s}
  .cs-notify-btn:hover{opacity:.85}
  .cs-thanks{display:none;font-size:13px;color:#d1fe17;font-family:'JetBrains Mono',monospace;text-align:center;margin-top:12px}
</style>`;

html = html.replace('</style>', MODAL_CSS);
console.log('✅  Modal CSS injected');

// ── 3. Inject modal HTML + JS before </body> ─────────────────────────────────

const MODAL_HTML = `
<!-- COMING SOON MODAL -->
<div id="cs-overlay" onclick="handleOverlayClick(event)">
  <div id="cs-modal">
    <button id="cs-close" onclick="closeComingSoon()" aria-label="Close">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
    </button>
    <div class="cs-badge">Coming Soon</div>
    <div id="cs-title">Feature</div>
    <div id="cs-desc">This workspace is in development. Drop your email and we'll notify you the moment it goes live.</div>
    <div class="cs-input-row">
      <input class="cs-input" id="cs-email" type="email" placeholder="your@email.com"/>
      <button class="cs-notify-btn" onclick="submitCSNotify()">Notify me</button>
    </div>
    <div class="cs-thanks" id="cs-thanks">✓ You're on the list!</div>
  </div>
</div>
<script>
function showComingSoon(title,desc){
  document.getElementById('cs-title').textContent=title;
  document.getElementById('cs-desc').textContent=desc;
  document.getElementById('cs-email').value='';
  document.getElementById('cs-email').style.display='';
  document.querySelector('.cs-notify-btn').style.display='';
  document.getElementById('cs-thanks').style.display='none';
  document.getElementById('cs-overlay').classList.add('open');
  document.body.style.overflow='hidden';
  setTimeout(()=>document.getElementById('cs-email').focus(),100);
}
function closeComingSoon(){
  document.getElementById('cs-overlay').classList.remove('open');
  document.body.style.overflow='';
}
function handleOverlayClick(e){if(e.target===document.getElementById('cs-overlay'))closeComingSoon();}
function submitCSNotify(){
  const e=document.getElementById('cs-email').value.trim();
  if(!e||!e.includes('@')){document.getElementById('cs-email').focus();return;}
  document.getElementById('cs-thanks').style.display='block';
  document.getElementById('cs-email').style.display='none';
  document.querySelector('.cs-notify-btn').style.display='none';
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeComingSoon();});
</script>
</body>`;

html = html.replace('</body>', MODAL_HTML);
console.log('✅  Modal HTML + JS injected');


// ── 5. Add build stamp comment ───────────────────────────────────────────────
html = html.replace('<html lang="en">', '<html lang="en">\n<!-- Gamesfield · Home · build: 2026-05-11 · v0.1 -->');
console.log('✅  Build stamp added');

// ── 4. Save ──────────────────────────────────────────────────────────────────

fs.writeFileSync(FILE, html, 'utf8');
console.log(`\n🎉  Done! pages/index.html patched (${(html.length/1024/1024).toFixed(1)} MB)`);
console.log('   Open pages/index.html in your browser to test.');
