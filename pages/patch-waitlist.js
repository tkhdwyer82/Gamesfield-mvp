const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'index.html');

if (!fs.existsSync(FILE)) {
  console.error('❌  Not found: index.html');
  process.exit(1);
}

let html = fs.readFileSync(FILE, 'utf8');

const waitlist = `
<!-- ── WAITLIST SECTION ── -->
<section style="background:linear-gradient(135deg,#0f0a00,#0d0d0d,#0a0f00);border-top:1px solid #1e1e1e;border-bottom:1px solid #1e1e1e;padding:80px 40px;text-align:center;position:relative;overflow:hidden;">
  <div style="position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(254,158,23,.06) 0%,transparent 65%);pointer-events:none"></div>
  <div style="position:relative;max-width:560px;margin:0 auto">
    <div style="display:inline-flex;align-items:center;gap:6px;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:600;letter-spacing:.12em;color:#FE9E17;text-transform:uppercase;background:rgba(254,158,23,.08);border:1px solid rgba(254,158,23,.15);border-radius:6px;padding:4px 12px;margin-bottom:20px">
      <span style="width:6px;height:6px;border-radius:50%;background:#FE9E17;display:inline-block;animation:pulse 2s infinite"></span>
      Early Access Open
    </div>
    <h2 style="font-family:'Bebas Neue',sans-serif;font-size:52px;letter-spacing:.02em;color:#fff;line-height:1;margin-bottom:12px">BUILD YOUR GAME.<br><span style="color:#FE9E17">WITH AI. TODAY.</span></h2>
    <p style="font-size:15px;color:#555;line-height:1.6;margin-bottom:32px">Join 2,400+ indie devs who've replaced $165&ndash;380/mo of fragmented AI tools with one workspace that knows their entire game world.</p>
    <div style="display:flex;gap:10px;max-width:440px;margin:0 auto 16px">
      <input type="email" placeholder="your@email.com" id="waitlist-email" style="flex:1;background:#111;border:1px solid #222;border-radius:10px;padding:14px 16px;font-size:14px;color:#fff;font-family:'DM Sans',sans-serif;outline:none" onfocus="this.style.borderColor='#FE9E17'" onblur="this.style.borderColor='#222'"/>
      <button onclick="joinWaitlist()" style="background:#FE9E17;color:#0d0d0d;border:none;border-radius:10px;padding:14px 24px;font-size:14px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;white-space:nowrap" onmouseover="this.style.background='#ffb040'" onmouseout="this.style.background='#FE9E17'">Get Early Access</button>
    </div>
    <div id="waitlist-thanks" style="display:none;font-size:13px;color:#d1fe17;font-family:'JetBrains Mono',monospace;margin-bottom:16px">&#10003; You're on the list &mdash; we'll be in touch soon!</div>
    <div style="display:flex;align-items:center;justify-content:center;gap:20px;font-size:12px;color:#333">
      <span>&#10003; Free to start</span>
      <span style="width:3px;height:3px;border-radius:50%;background:#333;display:inline-block"></span>
      <span>&#10003; No credit card needed</span>
      <span style="width:3px;height:3px;border-radius:50%;background:#333;display:inline-block"></span>
      <span>&#10003; Cancel anytime</span>
    </div>
  </div>
</section>
<script>
function joinWaitlist(){var e=document.getElementById('waitlist-email').value.trim();if(!e||!e.includes('@')){document.getElementById('waitlist-email').focus();return;}document.getElementById('waitlist-thanks').style.display='block';document.getElementById('waitlist-email').style.display='none';document.querySelector('[onclick="joinWaitlist()"]').style.display='none';}
</script>
`;

if (html.includes('<!-- FOOTER -->')) {
  html = html.replace('<!-- FOOTER -->', waitlist + '\n<!-- FOOTER -->');
  fs.writeFileSync(FILE, html, 'utf8');
  console.log('✅  Waitlist section added above footer');
  console.log('🎉  Done!');
} else {
  // fallback — add before <footer>
  html = html.replace('<footer>', waitlist + '\n<footer>');
  fs.writeFileSync(FILE, html, 'utf8');
  console.log('✅  Waitlist section added (fallback)');
  console.log('🎉  Done!');
}
