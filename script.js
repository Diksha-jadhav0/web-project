let promptMessages = [
    "Are you sure? 🥺",
    "Think again! 😢",
    "Don't break my heart 💔",
    "I'm waiting for you... 😭",
    "Please say Yes! 😞",
    "Last chance! 😣",
    "You're making me sad! 😔",
    "My heart is crying! 💧",
    "I had so many plans... 🥲",
    "Are you really going to do this? 💀",
    "You are my everything! ❤️",
    "Come on! Just say Yes! 😍",
    "I will be so happy if you accept! 😘",
    "My heart skips a beat waiting... 💓",
    "I can't imagine my Valentine without you! 💕",
    "You're my favorite person ever! 😊",
    "This is the last warning! 🚨",
    "No more No's! 😡",
    "I'm serious! Click Yes now! 🤨",
    "Okay, you have no choice now! 😏",
    "Do you really want to break my heart? 💔",
    "My heart is on the line here… 💘",
    "I can't sleep until you say Yes! 😭",
    "Don't make me cry in the corner… 😢",
    "You're the missing piece of my heart! 🧩",
    "I’ll be heartbroken forever… 💀",
    "Just one click, and I'll be the happiest! 😍",
    "Saying No would be a crime against love! 🚔",
    "Don't be the villain in our love story! 😩",
    "Think about all the happy memories we can make! 😊",
    "No pressure, but I might cry... 😭",
    "A 'Yes' from you means everything to me! 💖",
    "Even Cupid is waiting for your answer! 🏹",
    "If love had a button, it would be 'Yes' ❤️",
    "This is not a drill! Accept me now! 🚨",
    "You’re my dream come true! Don’t say No! 😍",
    "The stars have aligned for us! ✨",
    "Even the universe wants you to say Yes! 🌍",
    "Your 'Yes' will complete my world! 🌎",
    "Do you want to see my sad puppy eyes? 🐶🥺",
    "I'll be heartbroken if you refuse! 💔",
    "Say Yes, and I'll be your biggest fan forever! 📣",
    "Love is knocking! Please open the door! 🚪",
    "You’re one step away from making my day! 😊",
    "Don't ghost me! Just click Yes! 👻",
    "You’re the only one I want! 🥰",
    "The world is rooting for us! 🌎💞",
    "Even AI knows we’re meant to be! 🤖❤️",
    "You're the sunshine in my cloudy days! ☀️",
    "My heart is saying your name! 💓",
    "This moment will go down in history if you say Yes! 📜",
    "I promise to be the best Valentine ever! 🥺",
    "Your No will send me into heartbreak mode! 💔",
    "Saying Yes is a lifetime warranty for happiness! 🎉",
    "Even my phone screen is foggy from my tears! 😭",
    "Your 'Yes' will be the best gift ever! 🎁",
    "All signs point to Yes! ☑️",
    "I wrote a whole love story in my head, and you said Yes! 📖💕",
    "You're the best decision I’ll ever make! 💍",
    "Are you really going to let me suffer? 🥲",
    "Love is like WiFi, and your Yes is the password! 📶❤️",
    "You already stole my heart; now say Yes! 🥺",
    "Saying No is illegal in my heart! 🚫",
    "If you say Yes, I promise unlimited happiness! 🏆",
    "You’re my ultimate crush! Don’t break my heart! 😍",
    "I’ll do anything for you! Just say Yes! 🙏",
    "Please don’t make me beg on my knees! 😩",
    "We’d be the cutest couple ever! 😘",
    "The world will be a happier place if you click Yes! 🌎💖",
    "You’re my one and only! No one else matters! 🥰",
];

let clickCount = 0;

function showPrompt() {
    if (clickCount < promptMessages.length) {
        let messageBox = document.createElement("div");
        messageBox.className = "message-box";
        messageBox.innerText = promptMessages[clickCount];
        document.getElementById("message-container").innerHTML = "";
        document.getElementById("message-container").appendChild(messageBox);

        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200]);
        }

        clickCount++;
    } 
    
    if (clickCount === promptMessages.length) {
        setTimeout(() => {
            acceptValentine();
        }, 1000);
    }
}

function acceptValentine() {
    document.getElementById("message-container").innerHTML = "";

    let yesMessageBox = document.createElement("div");
    yesMessageBox.className = "message-box";
    yesMessageBox.innerText = "Yay! ❤️ You made my day!";
    document.getElementById("message-container").appendChild(yesMessageBox);

    setTimeout(() => {
        window.location.href = "accept.html";
    }, 1000);
}
