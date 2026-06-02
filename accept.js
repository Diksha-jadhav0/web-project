let loveNotes = [
    "You make my world brighter! ✨",
    "You are the peanut butter to my jelly! 🥪",
    "I can't stop smiling because of you! 😊",
    "Every day with you is a blessing! 💖",
    "You are my favorite person ever! 😍",
    "My heart beats faster when I see you! 💓",
    "You're my sunshine on a rainy day! 🌞",
    "I love you more than words can say! ❤️",
    "You're my happy place! 🎈",
    "I adore you endlessly! 😘",
    "Life is better with you in it! 💕",
    "You make ordinary moments magical! ✨",
    "I’m the luckiest person to have you! 🍀",
    "You are my heart’s favorite melody! 🎶",
    "My love for you grows every day! 🌱💖",
    "You light up my darkest days! 💡",
    "You are my dream come true! 🌙💫",
    "Holding your hand feels like home! 🤝❤️",
    "You are my forever and always! 🔥",
    "You bring love and laughter into my life! 😂💖",
    "My heart smiles every time I think of you! 😊❤️",
    "You’re the sweetest chapter in my story! 📖💞",
    "Your love makes my world complete! 🌎💘",
    "You are the best part of my every day! 🌄❤️",
    "You are the love story I never want to end! 💌",
    "Your hugs feel like home! 🤗💕",
    "You are the missing puzzle piece in my life! 🧩❤️",
    "Loving you is the easiest thing I’ve ever done! 💑",
    "My heart belongs to you, always! 🔐❤️",
    "You are the spark that lights up my soul! 🔥💖",
    "I fall for you a little more every day! 🍂❤️",
    "Your love is the greatest gift I’ve ever received! 🎁💖",
    "Every love song reminds me of you! 🎵💕",
    "You are the magic I never believed in until I met you! ✨",
    "If love is a journey, I only want to walk it with you! 🚶‍♂️💞🚶‍♀️",
    "No matter where I go, my heart will always find its way back to you! 🏡❤️",
    "You make every moment feel special! 💝",
    "Loving you is like breathing—I can’t stop! 💨❤️",
    "You turn my bad days into good ones! 🌈💘",
    "You are the reason my heart beats faster! 💓🎵",
    "Your smile is my favorite sight in the world! 😊💕",
    "With you, I have everything I’ll ever need! 💞",
    "You are the fairy tale I’ve always dreamed of! 📖✨",
    "Every second spent with you is a moment to treasure! ⏳💖",
    "You are my safe haven in this crazy world! 🌍💘",
    "The stars shine brighter when I’m with you! ✨🌟",
    "Your love is my greatest adventure! 🚀❤️",
    "I never believed in soulmates until I met you! 🔗💕",
    "You make my heart race like a rollercoaster! 🎢💓",
    "If love had a face, it would be yours! 😍💕",
    "You're the most beautiful thing that has ever happened to me! 🌹❤️",
    "No matter what happens, I will always choose you! 💖",
    "You are the reason I believe in love! 💞"
];

function pickLoveNote() {
    let randomIndex = Math.floor(Math.random() * loveNotes.length);
    let noteText = loveNotes[randomIndex];

    let noteContainer = document.getElementById("note-container");
    noteContainer.innerHTML = `<p>${noteText}</p>`;

    createFallingHearts();
}

function addLoveNote() {
    let newNote = document.getElementById("newNote").value;
    if (newNote.trim() !== "") {
        loveNotes.push(newNote);
        document.getElementById("newNote").value = ""; // Clear input
        alert("Love note added! 💖");
    }
}
function createFallingHearts() {
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

