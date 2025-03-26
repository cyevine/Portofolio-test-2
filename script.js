function showCommission() {
    document.getElementById('commission-section').classList.remove('hidden');
    document.getElementById('dialog-text').innerText = "Ahh, it's my dear customer!";
    document.getElementById('oc-image').src = "oc-excited.png";
}

function showTerms() {
    document.getElementById('commission-section').classList.add('hidden');
    document.getElementById('terms-section').classList.remove('hidden');
    document.getElementById('dialog-text').innerText = "Please read the terms before ordering!";
}

function agreeTerms() {
    document.getElementById('terms-section').classList.add('hidden');
    document.getElementById('dialog-text').innerText = "Great! Here’s my price list.";
}

function declineTerms() {
    document.body.style.backgroundColor = "black";
    alert("Ok then, bye-bye!");
    window.location.href = "https://google.com"; // Redirect keluar
}

function showWIP() {
    document.getElementById('wip-section').classList.remove('hidden');
    document.getElementById('dialog-text').innerText = "Time to check my work in progress!";
    document.getElementById('oc-image').src = "oc-smart.png";
}

function showGallery() {
    document.getElementById('gallery-section').classList.remove('hidden');
    document.getElementById('dialog-text').innerText = "BEHOLDDDD!";
    document.getElementById('oc-image').src = "oc-amazed.png";

    // Efek "poof" + confetti
    let poof = document.createElement("div");
    poof.innerHTML = "💨🎉";
    poof.style.fontSize = "50px";
    poof.style.position = "absolute";
    poof.style.top = "50%";
    poof.style.left = "50%";
    poof.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(poof);

    setTimeout(() => { poof.remove(); }, 1000);
}

function viewImage(img) {
    document.getElementById('image-viewer').classList.remove('hidden');
    document.getElementById('large-image').src = img.src;
    document.getElementById('dialog-text').innerText = "Here’s a closer look!";
}

function closeImage() {
    document.getElementById('image-viewer').classList.add('hidden');
}
