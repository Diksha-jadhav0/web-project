let loveNotes = [
    "You make my world brighter! ✨",
    "I can't stop smiling because of you! 😊",
    "Every day with you is a blessing! 💖",
    "You're my favorite person ever! 😍",
    "My heart beats faster when I see you! 💓",
    "You're my sunshine on a rainy day! 🌞",
    "I love you more than words can say! ❤️",
    "You're my happy place! 🎈",
    "I adore you endlessly! 😘",
    "Life is better with you in it! 💕",
    "You make ordinary moments magical! ✨",
    "You are my dream come true! 🌙💫",
    "Holding your hand feels like home! 🤝❤️"
];

function pickLoveNote() {
    let randomIndex = Math.floor(Math.random() * loveNotes.length);
    let noteText = loveNotes[randomIndex];

    let noteContainer = document.getElementById("note-container");
    noteContainer.innerHTML = `<p>${noteText}</p>`;

    createFallingHearts();
}

function addLoveNote() {
    let newNoteInput = document.getElementById("newNote");
    let newNote = newNoteInput.value;
    if (newNote.trim() !== "") {
        loveNotes.push(newNote);
        newNoteInput.value = ""; 
        
        let noteContainer = document.getElementById("note-container");
        noteContainer.innerHTML = `<p>Added to the jar! 💖: "${newNote}"</p>`;
        
        createFallingHearts();
    }
}

function createFallingHearts() {
    const emojis = ["❤️", "💖", "🌸", "✨", "🌷", "🎀"];
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 20) + "px";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        heart.style.opacity = Math.random();

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

