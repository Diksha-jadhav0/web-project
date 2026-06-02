let promptMessages = [
    "Are you sure? 🥺",
    "Think about it again... ✨",
    "It would make me so happy! 🌸",
    "Just a tiny 'Yes'? 🎀",
    "I've been waiting for this moment... 🕯️",
    "You're my favorite person! 🌷",
    "Let's make it official? 🦢",
    "I promise it'll be worth it! ✨",
    "Still No? I'll keep waiting... ❤️",
    "One last chance to say Yes! 🕊️"
];

let clickCount = 0;

function showPrompt() {
    if (clickCount < promptMessages.length) {
        let messageContainer = document.getElementById("message-container");
        messageContainer.innerHTML = "";
        
        let messageBox = document.createElement("div");
        messageBox.className = "message-box";
        messageBox.innerText = promptMessages[clickCount];
        messageContainer.appendChild(messageBox);

        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100]);
        }

        clickCount++;
        

    } else {
        // After 10 messages, maybe just auto-accept or stop? 
        // Let's keep it classy and just loop or guide them back.
        clickCount = 0; // Reset for a loop or different behavior
    }
}

function acceptValentine() {
    let container = document.querySelector(".container");
    container.style.opacity = "0";
    container.style.transform = "translateY(-20px)";
    container.style.transition = "all 0.5s ease";

    setTimeout(() => {
        window.location.href = "accept.html";
    }, 500);
}
