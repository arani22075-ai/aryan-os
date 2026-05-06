// ARYAN OS v7.0 - THE BRAIN (PATNA EDITION)

// 1. MATRIX BACKGROUND EFFECT
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff41";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(drawMatrix, 33);

// 2. DEVICE & LOCATION INTEL (PATNA SPECIAL)
async function getIntel() {
    // Battery Info
    if (navigator.getBattery) {
        navigator.getBattery().then(bat => {
            document.getElementById('bat-level').innerText = Math.floor(bat.level * 100) + "%";
        });
    }

    // IP & Device Type
    document.getElementById('dev-type').innerText = window.innerWidth < 768 ? "MOBILE_UNIT" : "STATIONARY_PC";
    
    // Projector Mode Logic
    if (window.innerWidth > 1000) {
        document.getElementById('projector-alert').classList.remove('hidden');
        document.getElementById('loc-trace').innerText = "PATNA CITY";
    }

    // IP Fetch (Simple)
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        document.getElementById('ip-addr').innerText = data.ip;
    } catch {
        document.getElementById('ip-addr').innerText = "192.168.1.7"; // Fake fallback
    }
}
getIntel();

// 3. PRANK FUNCTIONS
function triggerPanic() {
    const overlay = document.getElementById('panic-overlay');
    overlay.classList.remove('hidden');
    
    // Vibration (Mobile only)
    if (navigator.vibrate) navigator.vibrate([500, 200, 500, 200, 1000]);

    // Siren Sound Simulation (Beep)
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
    oscillator.connect(audioCtx.destination);
    oscillator.start();
    
    setTimeout(() => {
        overlay.classList.add('hidden');
        oscillator.stop();
    }, 5000);
}

function triggerCamera() {
    const cam = document.getElementById('camera-overlay');
    cam.classList.remove('hidden');
    
    // Fake Click Sound
    const click = new Audio('https://www.soundjay.com/mechanical/camera-shutter-click-01.mp3');
    click.play().catch(() => console.log("Sound blocked by browser"));

    setTimeout(() => {
        alert("BIOMETRIC DATA UPLOADED TO ARYAN_SERVER_PATNA");
        cam.classList.add('hidden');
    }, 4000);
}

function triggerVoice() {
    const msg = new SpeechSynthesisUtterance();
    msg.text = "Warning. Unauthorized user detected. System under Aryan's command. Initializing data extraction from Patna City Central School network.";
    msg.pitch = 0.5;
    msg.rate = 0.8;
    window.speechSynthesis.speak(msg);
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// 4. LEGACY TOOLS (PLACEHOLDERS)
function openLogic() { alert("Logic Gates Simulator v6.0 Initializing..."); }
function openCipher() { 
    let msg = prompt("Enter Secret Message:");
    if(msg) alert("ENCRYPTED: " + btoa(msg)); 
}
function openScanner() { alert("Deep Network Scan Started..."); }
function openCompiler() { alert("Cloud Compiler Ready for JS/HTML."); }

// Clock Update
setInterval(() => {
    document.getElementById('clock').innerText = new Date().toLocaleTimeString();
}, 1000);
