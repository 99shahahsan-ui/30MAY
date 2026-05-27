const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const promptText = document.getElementById('prompt-text');
const proposalScreen = document.getElementById('proposal-screen');
const successScreen = document.getElementById('success-screen');
const contentScreen = document.getElementById('content-screen');
const giftContent = document.getElementById('gift-content');

// Array of progressive responses when clicking "NO"
const noResponses = [
"Wait... are you sure? 🥺",
"nah that's not right... 😭",
"be serious... 😠",
"okay now you're just playing... 🙄",
"okay last chance... 💔"
];

let noCount = 0;
let yesScale = 1;
let noScale = 1;

noBtn.addEventListener('click', () => {
if (noCount < noResponses.length) {
// Update the prompt text dynamically
promptText.innerText = noResponses[noCount];

// Increase YES button size
yesScale += 0.35;
yesBtn.style.transform = `scale(${yesScale})`;

// Decrease NO button size
noScale -= 0.15;
noBtn.style.transform = `scale(${noScale})`;

// Move the NO button randomly within the window boundaries to dodge clicks
const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 50) - (window.innerWidth / 4);
const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 50) - (window.innerHeight / 4);

noBtn.style.position = 'absolute';
noBtn.style.left = `${Math.max(10, Math.min(x, window.innerWidth - 100))}px`;
noBtn.style.top = `${Math.max(10, Math.min(y, window.innerHeight - 100))}px`;

noCount++;
} else {
// Ultimate fallback: Just turn the NO button into a YES button
noBtn.innerText = "YES";
noBtn.style.backgroundColor = "var(--yes-color)";
noBtn.addEventListener('click', moveToSuccess);
}
});

yesBtn.addEventListener('click', moveToSuccess);

function moveToSuccess() {
proposalScreen.classList.remove('active');
successScreen.classList.add('active');
}

// Function to handle gift reveals (GIFT 1 and GIFT 2)
function openGift(giftType) {
successScreen.classList.remove('active');
contentScreen.classList.add('active');

if (giftType === 'music') {
// GIFT 1: YouTube Embedded Song from 3:40 to 5:00
const videoId = "_4n-ooWEQIA";
const startSeconds = "220"; // 3:40 = 220s
const endSeconds = "300"; // 5:00 = 300s

giftContent.innerHTML = `
<h3 style="color: var(--text-color); margin-bottom: 15px; text-align:center;">I LOVE YOU MY DEAR</h3>
<p style="text-align:center; font-size: 0.95rem; margin-bottom: 15px; color: #666;">💕</p>

<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
<iframe
style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;"
src="https://www.youtube.com/embed/${videoId}?autoplay=1&start=${startSeconds}&end=${endSeconds}&rel=0"
title="YouTube video player"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen>
</iframe>
</div>
`;
} else if (giftType === 'letter') {
// GIFT 2: Love Letter
giftContent.innerHTML = `
<h3 style="color: var(--text-color); margin-bottom: 15px; text-align:center;">💌</h3>
<p style="line-height: 1.6; font-size: 0.95rem; text-align: justify;">
🌙💕
Chand bhi sharma jaaye teri khoobsurti dekh kar, jaise raat ki har roshni sirf tere liye bani ho ✨❤️ Teri muskurahat mere dil ko sukoon deti hai, aur teri baatein meri duniya ko khubsurat bana deti hain 😊🌹 Jab bhi tera khayal aata hai, dil ek ajeeb si khushi se bhar jaata hai 💖 Har dua mein sirf tera naam hota hai, kyunki tu mere liye sirf ek insan nahi, meri zindagi ki sabse pyari wajah hai 🥺💫 Tere saath guzara har pal ek haseen khwaab jaisa lagta hai, aur dil bas yahi chahta hai ke yeh khwaab kabhi khatam na ho 💕🌍
 <br><br>
<strong>Always yours...</strong>
</p>
`;
}
}

function goBackToGifts() {
contentScreen.classList.remove('active');
successScreen.classList.add('active');
}

