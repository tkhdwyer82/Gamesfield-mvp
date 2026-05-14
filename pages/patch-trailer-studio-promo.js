// patch-trailer-studio-promo.js
// Replaces the Trailer Studio promo block with a Seedance 2.0-style layout
// Run from: /Users/tim2.0/Downloads/gamesfield-mvp/pages/
// Usage: node patch-trailer-studio-promo.js

const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'index.html');
if (!fs.existsSync(FILE)) { console.error('❌  index.html not found in', __dirname); process.exit(1); }

let html = fs.readFileSync(FILE, 'utf8');

// ── OLD BLOCK ──────────────────────────────────────────────────────────────
const OLD = `<!-- PROMO: TRAILER STUDIO -->
<div class="promo-block two-col" style="background:linear-gradient(135deg,#180814,#20081a)">
  <div>
    <div class="promo-eyebrow" style="color:#ff4d8b">SHIP FASTER.</div>
    <h2 style="margin-top:8px">GAMEPLAY IN.<br>TRAILER OUT.</h2>
    <p>Record your gameplay, describe your vibe. Get a cinematic trailer cut, colour-graded and ready to post.</p>
    <button class="pbtn" style="background:#ff4d8b;color:#fff;margin-top:14px">Try Trailer Studio</button>
    <div style="display:flex;gap:10px;margin-top:14px">
      <div style="background:#1e0a18;border:1px solid #3a1030;border-radius:8px;padding:7px 14px;font-size:12px;color:#cc4488">📁 Drop your gameplay clip</div>
    </div>
    <a href="#" style="display:block;margin-top:12px;font-size:12px;color:#555">View all Trailer Studio ↗</a>
  </div>
  <div class="img-grid">
    <div class="ig-cell" style="background:linear-gradient(135deg,#200818,#100810);grid-row:span 2;display:flex;align-items:center;justify-content:center;font-size:40px">🎬</div>
    <div class="ig-cell" style="background:#100820;display:flex;align-items:center;justify-content:center;font-size:22px">🎮</div>
    <div class="ig-cell" style="background:#281020;display:flex;align-items:center;justify-content:center;font-size:22px">⚡</div>
    <div class="ig-cell" style="background:#182010;display:flex;align-items:center;justify-content:center;font-size:22px">🔥</div>
    <div class="ig-cell" style="background:#201810;display:flex;align-items:center;justify-content:center;font-size:22px">💥</div>
    <div class="ig-cell" style="background:#0e1828;display:flex;align-items:center;justify-content:center;font-size:22px">🌟</div>
    <div class="ig-cell" style="background:#180e20;display:flex;align-items:center;justify-content:center;font-size:22px">🎯</div>
  </div>
</div>`;

// ── NEW BLOCK ──────────────────────────────────────────────────────────────
const NEW = `<!-- PROMO: TRAILER STUDIO (Seedance-style) -->
<div style="margin:14px;border-radius:16px;overflow:hidden;background:linear-gradient(135deg,#100810,#180818);border:1px solid #2a1428;position:relative">

  <!-- top bar: eyebrow left, user pill right -->
  <div style="display:flex;align-items:center;justify-content:space-between;padding:18px 24px 0">
    <div style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.12em;color:#ff4d8b;text-transform:uppercase">Cinematic Game Trailers — In Minutes</div>
    <div style="display:flex;align-items:center;gap:8px">
      <div style="width:8px;height:8px;border-radius:50%;background:#d1fe17"></div>
      <span style="font-size:12px;color:#888;font-family:'DM Sans',sans-serif">indie studio</span>
      <div style="display:flex;align-items:center;gap:4px;background:#1a1a1a;border:1px solid #2a2a2a;border-radius:20px;padding:4px 10px">
        <span style="color:#ff4d8b;font-size:13px">♥</span>
        <span style="font-size:12px;color:#ccc;font-family:'DM Sans',sans-serif">400</span>
      </div>
    </div>
  </div>

  <!-- two-col body -->
  <div style="display:grid;grid-template-columns:300px 1fr;gap:0;align-items:start;padding:20px 24px 24px">

    <!-- LEFT: wordmark + copy + CTA -->
    <div style="padding-right:32px">

      <!-- TRAILER STUDIO wordmark — amber gradient, Bebas Neue, Seedance-scale -->
      <div style="font-family:'Bebas Neue',sans-serif;font-size:62px;line-height:.92;letter-spacing:-.01em;margin:4px 0 16px;background:linear-gradient(135deg,#FE9E17 0%,#ffcc55 45%,#ff7a00 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">TRAILER<br>STUDIO</div>

      <p style="font-size:13px;color:#888;line-height:1.6;margin-bottom:20px;font-family:'DM Sans',sans-serif">Describe your game. Get a cinematic trailer, colour-graded and ready to ship.</p>

      <!-- CTA -->
      <a href="onboarding.html" style="display:inline-block;background:#FE9E17;color:#000;font-family:'DM Sans',sans-serif;font-weight:600;font-size:14px;padding:13px 28px;border-radius:10px;text-decoration:none;transition:opacity .15s" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">Try Trailer Studio</a>

      <div style="margin-top:12px">
        <a href="#" style="font-size:12px;color:#555;font-family:'DM Sans',sans-serif;text-decoration:none" onmouseover="this.style.color='#888'" onmouseout="this.style.color='#555'">Learn more</a>
      </div>
    </div>

    <!-- RIGHT: 3×3 video grid -->
    <div style="position:relative">
      <div style="display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,90px);gap:6px;border-radius:10px;overflow:hidden">

        <!-- Row 1 -->
        <div style="background:#1a0a18;border-radius:6px;overflow:hidden;position:relative">
          <video data-vsrc="5" autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;display:block"></video>
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:.3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
        </div>
        <div style="background:#140a20;border-radius:6px;overflow:hidden;position:relative">
          <video data-vsrc="6" autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;display:block"></video>
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:.3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
        </div>
        <div style="background:#0e1020;border-radius:6px;overflow:hidden;position:relative">
          <video data-vsrc="8" autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;display:block"></video>
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:.3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
        </div>

        <!-- Row 2 -->
        <div style="background:#1a1008;border-radius:6px;overflow:hidden;position:relative">
          <video data-vsrc="9" autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;display:block"></video>
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:.3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
        </div>
        <div style="background:#0a1810;border-radius:6px;overflow:hidden;position:relative">
          <video data-vsrc="10" autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;display:block"></video>
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:.3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
        </div>
        <div style="background:#180a0a;border-radius:6px;overflow:hidden;position:relative">
          <video data-vsrc="5" autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;display:block"></video>
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:.3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
        </div>

        <!-- Row 3 -->
        <div style="background:#100a18;border-radius:6px;overflow:hidden;position:relative">
          <video data-vsrc="6" autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;display:block"></video>
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:.3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
        </div>
        <div style="background:#0a1420;border-radius:6px;overflow:hidden;position:relative">
          <video data-vsrc="8" autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;display:block"></video>
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:.3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
        </div>
        <!-- Cell 9: empty placeholder -->
        <div style="background:#0f0a14;border-radius:6px;display:flex;align-items:center;justify-content:center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>

      </div>

      <!-- pink "View all" pill — bottom right, matching Seedance lime position -->
      <div style="position:absolute;bottom:-12px;right:0">
        <a href="#" style="display:inline-flex;align-items:center;gap:6px;background:#ff4d8b;color:#fff;font-family:'DM Sans',sans-serif;font-weight:600;font-size:13px;padding:9px 18px;border-radius:24px;text-decoration:none;transition:opacity .15s;white-space:nowrap" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">View all Trailers ↗</a>
      </div>
    </div>

  </div>
</div>`;

if (!html.includes('<!-- PROMO: TRAILER STUDIO -->')) {
  console.error('❌  Could not find <!-- PROMO: TRAILER STUDIO --> comment in index.html');
  process.exit(1);
}

html = html.replace(OLD, NEW);
fs.writeFileSync(FILE, html, 'utf8');
console.log('✅  Trailer Studio promo block replaced with Seedance-style layout');
console.log('🎬  Done!');
