/************** SAVED LOGIN DETAILS **************/
const SAVED_USERNAME = "sindhu";
const SAVED_PASSWORD = "sindhu@123";
let chocolateInterval = null;



/************** ELEMENTS **************/
const loginSection = document.getElementById("loginSection");
const questionSection = document.getElementById("questionSection");
const valentineSection = document.getElementById("valentineSection");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const errorMsg = document.getElementById("errorMsg");
const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");
const chocolateDaySection = document.getElementById("chocolateDaySection");



/************** LOVE PASSWORD ENGINE **************/
let realPassword = "";
const loveSymbols = ["💗"];

passwordInput.addEventListener("keydown", (e) => {
  e.preventDefault();

  if (e.key === "Backspace") {
    realPassword = realPassword.slice(0, -1);
  } else if (e.key.length === 1) {
    realPassword += e.key;
  }

  passwordInput.value = loveSymbols[0].repeat(realPassword.length);
});
function checkValentineTimer() {
  const now = new Date();

  // Feb is month 1 (JS months start from 0)
  const targetDate = new Date(now.getFullYear(), 1, 8, 0, 0, 0);

  if (now < targetDate) {
    startCountdown(targetDate);
  } else {
    countdown.textContent = "";
  }
}
function startCountdown(targetDate) {
  setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      countdown.textContent = "It's Valentine Week 💖";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.textContent =
      `Valentine Week unlocks in ${days}d ${hours}h ${minutes}m ${seconds}s 💝`;
  }, 1000);
}
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  petal.textContent = "🌸"; // you can use 🌹 too

  // Random horizontal position
  petal.style.left = Math.random() * 100 + "vw";

  // Random animation duration (slow & romantic)
  const duration = Math.random() * 5 + 5;
  petal.style.animationDuration = duration + "s";

  // Random size
  petal.style.fontSize = Math.random() * 20 + 16 + "px";

  document.body.appendChild(petal);

  // Remove petal after animation
  setTimeout(() => {
    petal.remove();
  }, duration * 1000);
}
let petalInterval;

function startPetals() {
  if (!petalInterval) {
    petalInterval = setInterval(createPetal, 400);
  }
}
function stopPetals() {
  if (petalInterval) {
    clearInterval(petalInterval);
    petalInterval = null;
  }
}

/* 🍫 CHOCOLATE CONTROL */
function startChocolates() {
  if (chocolateInterval) return;
  chocolateInterval = setInterval(createChocolate, 400);
}

function stopChocolates() {
  if (chocolateInterval) {
    clearInterval(chocolateInterval);
    chocolateInterval = null;
  }
}


const roseDaySection = document.getElementById("roseDaySection");

function handleRoseDay(username) {
    
  const now = new Date();
    const roseDayDate = new Date(now.getFullYear(), 1, 7, 0, 0, 0); // Feb 7


  const greeting = document.getElementById("userGreeting");
  const countdown = document.getElementById("countdown");
  const roseDaySection = document.getElementById("roseDaySection");

  greeting.textContent = `Hi ${username} 💕`;

  if (now < roseDayDate) {
    // 🔒 BEFORE Feb 7
    roseDaySection.style.display = "none";
    countdown.style.display = "block";
  } else {
    // 🌹 ON / AFTER Feb 7
    countdown.style.display = "none";
    roseDaySection.style.display = "block";
    startPetals();
  }
}




document.getElementById("nextDayBtn").addEventListener("click", () => {
  alert("Come back tomorrow to unlock Propose Day 💍💖");
  loginSection.style.display = "flex";
  chocolateDaySection.style.display = "none";
  userGreeting.textContent = `Valentines week 💕`;

});
const proposeDaySection = document.getElementById("proposeDaySection");

function showProposeDayIfUnlocked() {
  const now = new Date();
    const proposeDayDate = new Date(now.getFullYear(), 1, 8, 0, 0, 0); // Feb 8


  if (now >= proposeDayDate) {
    // Hide other sections
    questionSection.style.display = "none";
    roseDaySection.style.display = "none";

    // Show Propose Day
    proposeDaySection.style.display = "block";

    // Stop Rose Day effects
    countdown.style.display = "none";
    stopPetals();
  }
}



document.getElementById("proposeYesBtn").addEventListener("click", () => {
  alert("She said YES 💖💍 Forever begins now!");
});
function showChocolateDayIfUnlocked() {
  const now = new Date();
  const chocolateDay = new Date(now.getFullYear(), 1, 9, 0, 0, 0); // Feb 9

  if (now >= chocolateDay) {
    console.log("🍫 Chocolate Day unlocked");

    // hide others
    roseDaySection.style.display = "none";
    proposeDaySection.style.display = "none";
    questionSection.style.display = "none";

    // stop other effects
    stopPetals();
    stopChocolates();
    countdown.style.display = "none";

    // show chocolate day
    chocolateDaySection.style.display = "block";
    startChocolates();
  }
}
document.getElementById("nextFromChocolate").addEventListener("click", () => {
  alert("Teddy Day is waiting for you 🧸💖");
  loginSection.style.display = "flex";
    chocolateDaySection.style.display = "none";
    userGreeting.textContent = `Valentines week 💕`;


});
const teddyDaySection = document.getElementById("teddyDaySection");

function showTeddyDayIfUnlocked() {
  const now = new Date();
  const teddyDay = new Date(now.getFullYear(), 1, 10, 0, 0, 0); // Feb 10


  if (now >= teddyDay) {
    console.log("🧸 Teddy Day unlocked");

    // hide previous days
    chocolateDaySection.style.display = "none";
    proposeDaySection.style.display = "none";
    roseDaySection.style.display = "none";
    questionSection.style.display = "none";

    // stop other effects
    stopPetals();
    stopChocolates();
    countdown.style.display = "none";

    // show teddy day
    teddyDaySection.style.display = "block";
  }
}
document.getElementById("teddyNextBtn").addEventListener("click", () => {
  alert("Promise Day is waiting for you 🤞💖");
});
const promiseMessage =
  "On this Promise Day, I promise to stand by you in every season of life 🤍\n" +
  "Through smiles and silence, dreams and doubts,\n" +
  "I choose you — today, tomorrow, and always 🤞💖";

function typeText(element, text, speed = 50) {
  element.textContent = "";
  let index = 0;

  const interval = setInterval(() => {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}
const promiseDaySection = document.getElementById("promiseDaySection");

function showPromiseDayIfUnlocked() {
  const now = new Date();
    const promiseDay = new Date(now.getFullYear(), 1, 11, 0, 0, 0); // Feb 11


  if (now >= promiseDay) {
    console.log("🤞 Promise Day unlocked");

    // hide other days
    teddyDaySection.style.display = "none";
    chocolateDaySection.style.display = "none";
    proposeDaySection.style.display = "none";
    roseDaySection.style.display = "none";
    questionSection.style.display = "none";

    // stop all effects
    stopPetals();
    stopChocolates();
    countdown.style.display = "none";

    // show promise day
    promiseDaySection.style.display = "block";

    // start typing
    const promiseTextEl = document.getElementById("promiseText");
    typeText(promiseTextEl, promiseMessage, 60);
  }
}
document.getElementById("promiseNextBtn").addEventListener("click", () => {
  alert("Hug Day is waiting for you 🫂💖");
  loginSection.style.display = "flex";
    promiseDaySection.style.display = "none";
    userGreeting.textContent = `Valentines week 💕`;
});
const hugMessage = `A hug is my silent promise that you’re never alone.
In your happiest moments and your toughest days,
I’ll always be right here — holding you close,
wrapping you in comfort, love, and warmth 🤍🤗`;

function startHugTyping() {
  const textEl = document.getElementById("hugText");
  const cursor = document.getElementById("hugCursor");

  let i = 0;
  textEl.textContent = "";
  cursor.style.display = "inline";

  const interval = setInterval(() => {
    textEl.textContent += hugMessage[i];
    i++;

    if (i >= hugMessage.length) {
      clearInterval(interval);
      cursor.style.display = "none";
    }
  }, 40);
}

function showHugDayIfUnlocked() {
  const now = new Date();
  const hugDay = new Date(now.getFullYear(), 1, 12, 0, 0, 0); // Feb 12


  if (now >= hugDay) {
    // hide others
    chocolateDaySection.style.display = "none";
    promiseDaySection.style.display = "none";
    countdown.style.display = "none";

    // show hug day
    hugDaySection.style.display = "block";
    startHugTyping();
  }
}
document.getElementById("hugNextBtn").addEventListener("click", () => {
  alert("Kiss Day is waiting for you 💋💖");
  loginSection.style.display = "flex";
    hugDaySection.style.display = "none";
    userGreeting.textContent = `Valentines week 💕`;
});
const kissMessage = `A kiss is a quiet moment where the world fades away.
No words, no noise — just love, warmth, and us.
Every kiss is a promise I keep, again and again 💖💋`;

function startKissTyping() {
  const text = document.getElementById("kissText");
  const cursor = document.getElementById("kissCursor");

  let i = 0;
  text.textContent = "";
  cursor.style.display = "inline";

  const interval = setInterval(() => {
    text.textContent += kissMessage[i];
    i++;

    if (i >= kissMessage.length) {
      clearInterval(interval);
      cursor.style.display = "none";
    }
  }, 55);
}
function showKissEffect() {
  for (let i = 0; i < 8; i++) {
    createHeart();
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "70%";
  heart.style.fontSize = "30px";
  heart.style.animation = "floatUp 2.5s ease-out";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 2500);
}
const kissDaySection = document.getElementById("kissDaySection");

function showKissDayIfUnlocked() {
  const now = new Date();
    const kissDay = new Date(now.getFullYear(), 1, 13, 0, 0, 0); // Feb 13
  

  if (now >= kissDay) {
    hugDaySection.style.display = "none";
    promiseDaySection.style.display = "none";
    stopPetals();
    stopChocolates();
    countdown.style.display = "none";
    kissDaySection.style.display = "block";
    startKissTyping();
  }
}
function showValentineDayIfUnlocked() {
    const now = new Date();
    const vDay = new Date(now.getFullYear(), 1, 14, 0, 0, 0); // Feb 14


    if (now >= vDay) {
        // Hide everything else
        const sections = ["loginSection", "roseDaySection", "proposeDaySection", "chocolateDaySection", "teddyDaySection", "promiseDaySection", "hugDaySection", "kissDaySection","countdown"];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if(el) el.style.display = "none";
        });
        
        document.getElementById("questionSection").style.display = "block";
    }
}













/************** LOGIN LOGIC **************/
loginBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();

  if (username === "" || realPassword === "") {
    errorMsg.textContent = "Please enter username and love password 💔";
    return;
  }

  if (username === SAVED_USERNAME && realPassword === SAVED_PASSWORD) {
    errorMsg.textContent = "";
    loginSection.style.display = "none";
    const userGreeting = document.getElementById("userGreeting");
    const countdown = document.getElementById("countdown");
    checkValentineTimer();
    handleRoseDay(username);
    showProposeDayIfUnlocked();
    showChocolateDayIfUnlocked();
    showTeddyDayIfUnlocked();
    showPromiseDayIfUnlocked();
    showHugDayIfUnlocked();
    showKissDayIfUnlocked();












userGreeting.textContent = `Hi ${username} 💕`;

  } else {
    errorMsg.textContent = "Wrong username or love password 💔";
  }
});

/************** QUESTION LOGIC **************/
// 1. Initialize the counter
let noCount = 0;

// 2. Select the specific elements from the Question Section
const yesBtn = document.querySelector("#questionSection #Yes");
const noBtn = document.querySelector("#questionSection #No");
const questionTitle = document.querySelector("#questionSection h1");
const questionPara = document.querySelector("#questionSection p");

// 3. The "No" Button Logic
noBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent page jump for <a> tags
    noCount++;

    // Grow the Yes button
    const newScale = 1 + noCount * 0.2; // Increased growth rate for better effect
    yesBtn.style.transform = `scale(${newScale})`;
    yesBtn.style.display = "inline-block"; // Ensure scale works

    // Update text based on clicks
    if (noCount === 1) {
        questionTitle.textContent = "Are you sure? 😢";
        questionPara.textContent = "I think your heart doesn't want to say NO 😊";
    } else if (noCount === 2) {
        questionTitle.textContent = "Please don't say NO! 🥺";
        questionPara.textContent = "Your YES will make my day! 💖";
    } else if (noCount === 3) {
        questionTitle.textContent = "I'll make you the happiest! 😊";
        questionPara.textContent = "Just say YES! 💕";
    } else {
        // Hide the No button after 4 tries
        noBtn.style.display = "none";
        questionTitle.textContent = "Okay, there's only one choice left! 😉";
    }
});

// 4. The "Yes" Button Logic
yesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("questionSection").style.display = "none";
    document.getElementById("valentineSection").style.display = "block";
    alert("Yay! You are my Valentine! 💖");

    
    // Optional: Start celebratory effects
    startPetals(); 
});
yesBtn.onclick = (e) => {
  e.preventDefault();
  questionSection.style.display = "none";
  valentineSection.style.display = "block";

  document.querySelector(".valen-text p").textContent = `
From the very first moment you entered my life, something quietly changed inside me.
You became the reason my ordinary days felt special, my smiles came easier,
and my heart felt a little more at home.

I may not always have the perfect words, but my feelings for you are real,
deep, and constant. In your laughter, I find my happiness.
In your silence, I find comfort. And in your presence, I find peace.

Today isn’t just about saying “Happy Valentine’s Day.”
It’s about choosing you — in every small moment, every challenge,
and every beautiful memory yet to come.

Thank you for being exactly who you are.
Thank you for choosing me.
And thank you for making my world brighter just by being in it 💖🌹

You are, and always will be, my Valentine.
  `;
};
function showValentineDayIfUnlocked() {
  const now = new Date();
  const valentineDay = new Date(
    now.getFullYear(),
    1, // February
    14,
    0, 0, 0
  );

  if (now >= valentineDay) {
    kissDaySection.style.display = "none";
    questionSection.style.display = "block";
    setupValentineQuestion();
  }
}

// If they click Yes
