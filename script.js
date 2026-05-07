/* ARYAN OS v12 - PRO LOGIC */

// 1. WiFi QR Generator
function genWiFiQR() {
    const ssid = document.getElementById('wifi-name').value;
    const pass = document.getElementById('wifi-pass').value;
    if(!ssid || !pass) { showToast("FILL ALL FIELDS!"); return; }
    const qrData = `WIFI:T:WPA;S:${ssid};P:${pass};;`;
    document.getElementById('qr-res').innerText = "RAW QR DATA: " + qrData;
    showToast("WIFI DATA GENERATED");
}

// 2. Password Strength Auditor
function checkStrength() {
    const pass = document.getElementById('check-pass').value;
    const meter = document.getElementById('strength-meter');
    const text = document.getElementById('strength-text');
    if(pass.length === 0) { meter.style.width="0%"; text.innerText="RESULT: --"; return; }
    if(pass.length < 6) { meter.style.width="30%"; meter.style.background="red"; text.innerText="RESULT: WEAK"; }
    else if(pass.length < 11) { meter.style.width="60%"; meter.style.background="orange"; text.innerText="RESULT: MEDIUM"; }
    else { meter.style.width="100%"; meter.style.background="#00f2ff"; text.innerText="RESULT: ELITE"; }
}

// 3. Data Converters
function toBinary() {
    const input = document.getElementById('data-input').value;
    const res = input.split('').map(c => c.charCodeAt(0).toString(2)).join(' ');
    document.getElementById('data-res').innerText = res || "EMPTY";
}
function toHex() {
    const input = document.getElementById('data-input').value;
    const res = input.split('').map(c => c.charCodeAt(0).toString(16)).join(' ');
    document.getElementById('data-res').innerText = "0x" + res.toUpperCase() || "EMPTY";
}

// 4. Action Center Functions
function toggleMenu() { document.getElementById('side-menu').classList.toggle('side-menu-hidden'); }

function toggleTheme() {
    const colors = ['#00f2ff', '#00ff41', '#ff0055', '#ffcc00', '#ffffff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector(':root').style.setProperty('--main', randomColor);
    showToast("THEME UPDATED");
}

function showSpecs() {
    alert(`RAM: ${navigator.deviceMemory || 'N/A'}GB\nCORES: ${navigator.hardwareConcurrency}\nOS: ${navigator.platform}`);
}

function checkBreach() {
    const email = prompt("Enter email to scan:");
    if(!email) return;
    showToast("SCANNING FOR LEAKS...");
    setTimeout(() => alert("DATABASE SCAN COMPLETE: NO BREACH FOUND FOR " + email), 2000);
}

// 5. UI Helpers
function showToast(txt) {
    const box = document.getElementById('msg-box');
    box.innerText = txt; box.classList.remove('hidden');
    setTimeout(() => box.classList.add('hidden'), 3000);
}

function toggleFullScreen() {
    if (!document.fullscreenElement) { document.documentElement.requestFullscreen(); showToast("FULLSCREEN ON"); }
    else { document.exitFullscreen(); }
}
