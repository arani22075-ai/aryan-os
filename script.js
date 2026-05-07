// MATRIX EFFECT
const canvas = document.getElementById('matrix-bg');
if(canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const drops = Array(Math.floor(canvas.width/16)).fill(1);
    function draw() {
        ctx.fillStyle = "rgba(0,0,0,0.05)"; ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "#00ff41"; drops.forEach((y, i) => {
            ctx.fillText(String.fromCharCode(65+Math.random()*33), i*16, y*16);
            if(y*16 > canvas.height && Math.random() > 0.975) drops[i] = 0; drops[i]++;
        });
    }
    setInterval(draw, 33);
}

// 19 FEATURES LOGIC
function getIntel() {
    if(navigator.getBattery) navigator.getBattery().then(b => document.getElementById('bat-level').innerText = Math.floor(b.level*100)+"%");
    document.getElementById('dev-type').innerText = window.innerWidth < 768 ? "MOBILE_UNIT" : "PC_STATION";
    fetch('https://api.ipify.org?format=json').then(r => r.json()).then(d => document.getElementById('ip-addr').innerText = d.ip);
    if(window.innerWidth > 1000) document.getElementById('projector-alert')?.classList.remove('hidden');
}
if(document.getElementById('ip-addr')) getIntel();

function triggerPanic() {
    document.getElementById('panic-overlay').classList.remove('hidden');
    if(navigator.vibrate) navigator.vibrate([500,200,500]);
    setTimeout(() => document.getElementById('panic-overlay').classList.add('hidden'), 4000);
}

function triggerVoice() {
    const m = new SpeechSynthesisUtterance("Aryan OS v8 activated. Patna City Central Network under control.");
    m.pitch = 0.4; window.speechSynthesis.speak(m);
}

function triggerCamera() {
    document.getElementById('camera-overlay').classList.remove('hidden');
    setTimeout(() => { document.getElementById('camera-overlay').classList.add('hidden'); alert("BIOMETRIC CAPTURED"); }, 3000);
}

function encryptData() {
    const input = document.getElementById('cipher-input').value;
    alert("ENCRYPTED: " + btoa(input));
}

function startDeepScan() {
    const res = document.getElementById('scan-results');
    res.innerHTML = "SCANNING...";
    setTimeout(() => { res.innerHTML = "PORT 80: OPEN<br>PORT 443: SECURE<br>PATNA_CENTRAL_DB: DETECTED"; }, 2000);
}

function toggleFullScreen() { document.documentElement.requestFullscreen(); }
function openLogic() { alert("Logic Simulator v8.0 Starting..."); }
function openCompiler() { alert("Compiler Ready."); }

setInterval(() => { if(document.getElementById('clock')) document.getElementById('clock').innerText = new Date().toLocaleTimeString(); }, 1000);
