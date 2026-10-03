const letters = {
    "miss-you": {
        title: "Open When <br> You Miss Me",
        message:
            "Hi ali alam ko miss mo na ako kase umuwi ka na ulet, pero lagi mo tatandaan na miss na miss kita at love na love kita soon araw araw mona akong kasama pero sa ngayon tiis muna tayo huh i love you."
    },

    "bad-day": {
        title: "Open When<br> You're Having A Bad Day",
        message:
            "if feeling mo po ali na wala kang kakampe just so you know po na i always be here po ako ang kakampe mo sa lahat, if need mo ng pahinga sakin ka lang punta or guluhin mo ko wala po problema sakin kase, ikaw din ang pahinga ko e i love youu ali ko."
    },

    "need-a-hug": {
        title: "Open When <br> You Need A Hug",
        message:
            "if need mo naman ng hug ali ko punta ka lang sa bahay hug kita ng mahigpit or sana pag naka ipon na ako jan ako naman ang pupunta sayo para ma hug kita i love you."
    },

    "cant-sleep": {
        title: "Open When <br> You Can't Sleep",
        message:
            "di na naman po maka tulog ang ali ko? if na open mo man po to ali lagi mo lang isipin na nanjan me sa tabi mo malayo man ako sa tabi mo pero lagi mo tandaan na mahal na mahal kita sleep na po ikaw ali i love you."
    },

    "love-you": {
        title: "Open When <br> You Need To Know I Love You",
        message:
            "You know naman po kung gaano kita ka mahal ali, mas mahal pa kita kay sa sarili ko, ang cringe man pa kinggan pero your the only person i want to spend the rest of my life with ayoko na po sa iba ali ikaw lang po sapat na, hiling ko lang is sana dika po mapagod sakin I love so much my ali."
    },

    "thinking-of-you": {
        title: "Open When <br> You're Thinking Of Me",
        message:
            "hi ali gentle reminder lang po na mahal na mahal na mahal po kita ali ko hehe i love youu super duper so much."
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