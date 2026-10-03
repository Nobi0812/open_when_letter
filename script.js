const letters = {
    "miss-you": {
        title: "Open When <br> You Miss Me",
        message:
            "I wish I could be there with you right now. Until then, just remember that I'm always thinking of you. I love you."
    },

    "bad-day": {
        title: "Open When<br> You're Having A Bad Day",
        message:
            "It's okay to have bad days. Take a breath, take a break, and remember that tomorrow is another day. You've got this."
    },

    "need-a-hug": {
        title: "Open When <br> You Need A Hug",
        message:
            "Consider this your virtual hug. Squeeze your pillow really tight and pretend it's me. I can't wait to hug you for real."
    },

    "cant-sleep": {
        title: "Open When <br> You Can't Sleep",
        message:
            "Still awake? Close your eyes, get comfy, and imagine we're lying next to each other. Hopefully I'll see you in your dreams."
    },

    "love-you": {
        title: "Open When <br> You Need To Know I Love You",
        message:
            "I love you more than I could ever fit into a little letter, but I hope this reminds you just how much you mean to me."
    },

    "thinking-of-you": {
        title: "Open When <br> You're Thinking Of Me",
        message:
            "If you're thinking about me right now, just know that there's a very good chance I'm thinking about you too."
    }
};

// fetching the letter name
const params = new URLSearchParams(window.location.search);
const letterId = params.get("letter");

const letter = letters[letterId];

if (letter) {
    document.getElementById("letter-title").innerHTML = letter.title;
    document.getElementById("letter-message").textContent = letter.message;
} else {
     document.getElementById("letter-title").textContent = "Letter not found.";
    document.getElementById("letter-message").textContent = "Hmm this letter doesn't seem to exist.";
}

const letterText = document.querySelector(".letter-text");
const gif = document.querySelector(".opening-gif");

setTimeout(() => {
    gif.src = "images/letter-final.png";
    letterText.classList.remove("hidden");
}, 1200);