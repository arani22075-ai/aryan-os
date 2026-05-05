let audioUnlocked = false;

// 1. SOUND CORE
function playSound() {
    const s = document.getElementById('beep-sound');
    if(s && audioUnlocked) { s.currentTime = 0; s.play().catch(()=>{}); }
}

document.addEventListener('click', () => {
    if(!audioUnlocked) {
        const s = document.getElementById('beep-sound');
        s.play().then(() => { s.pause(); audioUnlocked = true; });
    }
}, {once: false});

// 2. NAV CORE
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(id);
    if(target) target.classList.add('active');
    document.getElementById('settings-dropdown').style.display = 'none';
    playSound();
    window.scrollTo(0,0);
}

// 3. FEATURES LOGIC
function sendNeuralMsg() {
    const input = document.getElementById('chat-input');
    const box = document.getElementById('chat-box');
    if(!input.value) return;
    box.innerHTML += `<p style="color:#fff;">> USER: ${input.value}</p>`;
    setTimeout(() => {
        box.innerHTML += `<p>> SYSTEM: Analyzing neural patterns... Accessing Core...</p>`;
        box.scrollTop = box.scrollHeight;
        playSound();
    }, 500);
    input.value = "";
}

function runPortScan() {
    const log = document.getElementById('port-log'); log.innerHTML = "Initializing Scan...<br>";
    [80, 443, 21, 22].forEach((p, i) => {
        setTimeout(() => {
            log.innerHTML += `> PORT ${p}: <span style="color:var(--neon);">ACTIVE</span><br>`;
            playSound();
        }, i * 500);
    });
}

function startDecrypt() {
    let count = 0;
    const txt = document.getElementById('decrypt-text');
    const inter = setInterval(() => {
        txt.innerText = Math.random().toString(36).substring(7).toUpperCase();
        if(count++ > 15) { clearInterval(inter); txt.innerText = "ARYAN_777"; playSound(); }
    }, 100);
}

// EDUCATION FEATURES
function checkSyntax() {
    const val = document.getElementById('edu-code').value;
    const out = document.getElementById('edu-status');
    out.innerText = val.length > 5 ? "SUCCESS: Logic Validated" : "ERROR: Code too short";
    playSound();
}

let gA = 0, gB = 0;
function toggleGate(type) {
    if(type === 'a') { gA = gA?0:1; document.getElementById('gate-a').innerText = gA; document.getElementById('gate-a').classList.toggle('gate-active'); }
    else { gB = gB?0:1; document.getElementById('gate-b').innerText = gB; document.getElementById('gate-b').classList.toggle('gate-active'); }
    const out = (gA && gB) ? 1 : 0;
    const outBtn = document.getElementById('gate-out');
    outBtn.innerText = out;
    if(out) outBtn.classList.add('gate-active'); else outBtn.classList.remove('gate-active');
    playSound();
}

// SYSTEM
window.onload = () => {
    setInterval(() => {
        const temp = Math.floor(Math.random() * 15) + 30;
        document.getElementById('temp-val').innerText = temp + "°C";
        document.getElementById('temp-bar').style.width = (temp * 2) + "%";
    }, 3000);
    if(navigator.getBattery) navigator.getBattery().then(b => {
        const u = () => {
            document.getElementById('battery-level').innerText = Math.floor(b.level*100) + "%";
            document.getElementById('battery-bar').style.width = (b.level*100) + "%";
        };
        u(); b.onlevelchange = u;
    });
    // Load Note
    document.getElementById('note-area').value = localStorage.getItem('aryan_note') || "";
};

function saveNote() { localStorage.setItem('aryan_note', document.getElementById('note-area').value); alert("ENCRYPTED"); playSound(); }
function toggleSettings() { const d = document.getElementById('settings-dropdown'); d.style.display = d.style.display === 'block' ? 'none' : 'block'; playSound(); }
function toggleFullScreen() { if(!document.fullscreenElement) document.documentElement.requestFullscreen(); else document.exitFullscreen(); }

// MATRIX
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
const drops = Array(Math.floor(canvas.width/16)).fill(1);
function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.08)"; ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#00f2ff"; ctx.font = "15px monospace";
    drops.forEach((y, i) => {
        ctx.fillText(Math.floor(Math.random()*2), i*16, y*16);
        if(y*16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    });
}
setInterval(draw, 50);
