// Sound Initialization
function playClick() {
    const sound = document.getElementById('beep-sound');
    if(sound) {
        sound.currentTime = 0;
        sound.play();
    }
}

// Stats Tracker
async function initCore() {
    try {
        const res = await fetch('https://api.ipify.org?format=json');
        const data = await res.json();
        document.getElementById('ip-addr').innerText = data.ip;
    } catch { document.getElementById('ip-addr').innerText = "127.0.0.1"; }

    if(navigator.getBattery) {
        const b = await navigator.getBattery();
        document.getElementById('bat-level').innerText = Math.floor(b.level * 100) + "%";
    }
}

setInterval(() => {
    document.getElementById('clock').innerText = new Date().toLocaleTimeString();
}, 1000);

initCore();

// Browser Audio Policy Fix
function initAudio() {
    // This unlocks audio on first user interaction
    const sound = document.getElementById('beep-sound');
    sound.play().then(() => { sound.pause(); });
}
