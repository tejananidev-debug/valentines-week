/************** SAVED LOGIN DETAILS **************/
const SAVED_USERNAME = "sindhu";
const SAVED_PASSWORD = "sindhu@123";

/************** GLOBAL STATE **************/
let realPassword = "";
let petalInterval = null;
let chocolateInterval = null;

/************** ELEMENTS **************/
const loginSection = document.getElementById("loginSection");
const questionSection = document.getElementById("questionSection");
const valentineSection = document.getElementById("valentineSection");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const errorMsg = document.getElementById("errorMsg");

const userGreeting = document.getElementById("userGreeting");
const countdown = document.getElementById("countdown");

const roseDaySection = document.getElementById("roseDaySection");
const proposeDaySection = document.getElementById("proposeDaySection");
const chocolateDaySection = document.getElementById("chocolateDaySection");
const teddyDaySection = document.getElementById("teddyDaySection");
const promiseDaySection = document.getElementById("promiseDaySection");
const hugDaySection = document.getElementById("hugDaySection");
const kissDaySection = document.getElementById("kissDaySection");

/************** LOVE PASSWORD ENGINE **************/
passwordInput.addEventListener("keydown", (e) => {
  e.preventDefault();

  if (e.key === "Backspace") {
    realPassword = realPassword.slice(0, -1);
  } else if (e.key.length === 1) {
    realPassword += e.key;
  }

  passwordInput.value = "💗".repeat(realPassword.length);
});

/************** EFFECTS **************/
function startPetals() {
  if (petalInterval) return;
  petalInterval = setInterval(() => {
    const petal = document.createElement("div");
    petal.textContent = "🌸";
    petal.className = "petal";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = Math.random() * 20 + 16 + "px";
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 6000);
  }, 400);
}

function stopPetals() {
  clearInterval(petalInterval);
  petalInterval = null;
}

function startChocolates() {
  if (chocolateInterval) return;
  chocolateInterval = setInterval(() => {
    const choco = document.createElement("div");
    choco.textContent = "🍫";
    choco.className = "chocolate";
    choco.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(choco);
    setTimeout(() => choco.remove(), 5000);
  }, 400);
}

function stopChocolates() {
  clearInterval(chocolateInterval);
  chocolateInterval = null;
}

/************** TYPING EFFECT **************/
function typeText(el, text, speed = 50) {
  el.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

/************** MASTER VALENTINE CONTROLLER **************/
function showTodayValentineDay(username) {
  const now = new Date();
  const y = now.getFullYear();

  const days = {
    rose: new Date(y, 1, 7),
    propose: new Date(y, 1, 8),
    chocolate: new Date(y, 1, 9),
    teddy: new Date(y, 1, 10),
    promise: new Date(y, 1, 11),
    hug: new Date(y, 1, 12),
    kiss: new Date(y, 1, 13),
    valentine: new Date(y, 1, 14)
  };

  // Hide everything first
  [
    roseDaySection,
    proposeDaySection,
    chocolateDaySection,
    teddyDaySection,
    promiseDaySection,
    hugDaySection,
    kissDaySection,
    questionSection
  ].forEach(sec => sec && (sec.style.display = "none"));

  stopPetals();
  stopChocolates();
  countdown.style.display = "none";

  // Newest day FIRST
  if (now >= days.valentine) {
    questionSection.style.display = "block";
    setupValentineLogic();
  }
  else if (now >= days.kiss) {
    kissDaySection.style.display = "block";
  }
  else if (now >= days.hug) {
    hugDaySection.style.display = "block";
    startHugTyping();
  }
  else if (now >= days.promise) {
    promiseDaySection.style.display = "block";
    typeText(
      document.getElementById("promiseText"),
      "On this Promise Day, I promise to stand by you forever 🤍🤞",
      60
    );
  }
  else if (now >= days.teddy) {
    teddyDaySection.style.display = "block";
  }
  else if (now >= days.chocolate) {
    chocolateDaySection.style.display = "block";
    startChocolates();
  }
  else if (now >= days.propose) {
    proposeDaySection.style.display = "block";
  }
  else if (now >= days.rose) {
    roseDaySection.style.display = "block";
    startPetals();
  }

  userGreeting.textContent = `Hi ${username} 💕`;
}

/************** LOGIN **************/
loginBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();

  if (!username || !realPassword) {
    errorMsg.textContent = "Please enter username and love password 💔";
    return;
  }

  if (username === SAVED_USERNAME && realPassword === SAVED_PASSWORD) {
    errorMsg.textContent = "";
    loginSection.style.display = "none";
    showTodayValentineDay(username);
  } else {
    errorMsg.textContent = "Wrong username or love password 💔";
  }
});

/************** HUG DAY **************/
function startHugTyping() {
  const hugText = document.getElementById("hugText");
  const hugMessage = `A hug is my silent promise that you’re never alone 🤍🫂`;
  typeText(hugText, hugMessage, 40);
}

/************** VALENTINE QUESTION **************/
function setupValentineLogic() {
  let noCount = 0;
  const yesBtn = document.getElementById("Yesbtn");
  const noBtn = document.getElementById("Nobtn");

  noBtn.onclick = () => {
    noCount++;
    yesBtn.style.transform = `scale(${1 + noCount * 0.4})`;
    if (noCount >= 4) noBtn.style.display = "none";
  };

  yesBtn.onclick = () => {
    questionSection.style.display = "none";
    valentineSection.style.display = "block";
    startPetals();
  };
}
