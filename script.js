const divInput = document.querySelector("#divInput");
const fileClick = document.querySelector("#fileClick");
const dataKeeper = document.querySelector("[data-keeper]");
const removeChange = document.querySelector("#removeChange");
const removeImg = document.querySelector("#removeImg");
const changeImg = document.querySelector("#changeImg");
const fullName = document.querySelector("#fullName");
const emailAddress = document.querySelector("#emailAddr");
const userName = document.querySelector("#userName");
const drag = document.querySelector("#drag");
const up = document.querySelector("#up");
const generateBtn = document.querySelector("#generateBtn");

// ticket elements
const ticketImg = document.querySelector("#ticketImg");
const ticketName = document.querySelector("#ticketName");
const ticketuserName = document.querySelector("#ticketuserName");
const nameForTicketOne = document.querySelector("#nameForTicketOne");
const sent = document.querySelector("#sent");
const inputs = document.querySelector("#inputs");
const ticket = document.querySelector("#ticketElement");
const randomUnique = document.querySelector("#randomUnique");
const sentEmail = document.querySelector("#sentEmail");
const email = document.querySelector("#email");
const nameForTicketTwo = document.querySelector("#nameForTicketTwo");
const ticketNameHolder = document.querySelector("#ticketNameHolder");
const randomUniqueNumber = document.querySelector("#randomUniqueNumber");

//variable
let file;

const error = (id) => {
  document
    .querySelector(`#${id}`)
    .parentElement.querySelector("[data-error]")
    .classList.remove("hidden");
};

const success = (id) => {
  document
    .querySelector(`#${id}`)
    .parentElement.querySelector("[data-error]")
    .classList.add("hidden");
};

divInput.addEventListener("click", () => {
  if (removeChange.classList.contains("hidden")) {
    fileClick.click();
  }
});

fileClick.addEventListener("change", (e) => {
  file = e.target.files[0];
  if (file) {
    if (
      (file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/jpg") &&
      file.size < 512000
    ) {
      let img = URL.createObjectURL(file);
      const imgElement = dataKeeper.querySelector("img");
      imgElement.src = img;
      imgElement.classList.add("border-Neutral500");
      imgElement.classList.add("w-[55px]");
      imgElement.classList.remove("p-2");
      drag.classList.add("hidden");
      removeChange.classList.remove("hidden");
      up.previousElementSibling
        .querySelector("path")
        .classList.remove("stroke-[hsl(7_71%_60%)]");
      up.previousElementSibling.lastElementChild.classList.remove(
        "stroke-[hsl(7_71%_60%)]"
      );
      up.classList.remove("text-Orange700");
    } else {
      up.previousElementSibling
        .querySelector("path")
        .classList.add("stroke-[hsl(7_71%_60%)]");
      up.previousElementSibling.lastElementChild.classList.add(
        "stroke-[hsl(7_71%_60%)]"
      );
      up.classList.add("text-Orange700");
      file = null;
    }
  }
});

removeImg.addEventListener("click", (e) => {
  e.stopPropagation();
  const imgElement = dataKeeper.querySelector("img");
  imgElement.src = "assets/images/icon-upload.svg";
  imgElement.classList.remove("border-Neutral500");
  imgElement.classList.remove("w-[55px]");
  imgElement.classList.add("p-2");
  drag.classList.remove("hidden");
  removeChange.classList.add("hidden");
  file = null;
  fileClick.value = "";
});

changeImg.addEventListener("click", (e) => {
  fileClick.click();
});

divInput.addEventListener("dragover", (e) => e.preventDefault());

divInput.addEventListener("drop", (e) => {
  e.preventDefault();
  file = e.dataTransfer.files[0];

  if (file) {
    if (
      (file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/jpg") &&
      file.size < 512000
    ) {
      let img = URL.createObjectURL(file);
      const imgElement = dataKeeper.querySelector("img");
      imgElement.src = img;
      imgElement.classList.add("border-Neutral500");
      imgElement.classList.add("w-[55px]");
      imgElement.classList.remove("p-2");
      drag.classList.add("hidden");
      removeChange.classList.remove("hidden");
      up.previousElementSibling
        .querySelector("path")
        .classList.remove("stroke-[hsl(7_71%_60%)]");
      up.previousElementSibling.lastElementChild.classList.remove(
        "stroke-[hsl(7_71%_60%)]"
      );
      up.classList.remove("text-Orange700");
    } else {
      up.previousElementSibling
        .querySelector("path")
        .classList.add("stroke-[hsl(7_71%_60%)]");
      up.previousElementSibling.lastElementChild.classList.add(
        "stroke-[hsl(7_71%_60%)]"
      );
      up.classList.add("text-Orange700");
      file = null;
    }
  }
});

const validation = () => {
  let isValid = true;

  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!file) {
    isValid = false;
    up.previousElementSibling
      .querySelector("path")
      .classList.add("stroke-[hsl(7_71%_60%)]");
    up.previousElementSibling.lastElementChild.classList.add(
      "stroke-[hsl(7_71%_60%)]"
    );
    up.classList.add("text-Orange700");
  } else {
    up.previousElementSibling
      .querySelector("path")
      .classList.remove("stroke-[hsl(7_71%_60%)]");
    up.previousElementSibling.lastElementChild.classList.remove(
      "stroke-[hsl(7_71%_60%)]"
    );
    up.classList.remove("text-Orange700");
  }

  if (!fullName.value) {
    error("fullName");
    isValid = false;
  } else {
    success("fullName");
  }

  if (!regex.test(emailAddress.value) && emailAddress.value.length) {
    document
      .getElementById("emailAddr")
      .parentElement.querySelector("[data-error]")
      .querySelector("p").innerText = "Enter a valid email address";
    isValid = false;
    error("emailAddr");
  } else {
    success("emailAddr");
  }

  if (!emailAddress.value) {
    error("emailAddr");
    isValid = false;
    document
      .getElementById("emailAddr")
      .parentElement.querySelector("[data-error]")
      .querySelector("p").innerText = "Can't be empty";
  }

  if (!userName.value) {
    error("userName");
    isValid = false;
  } else {
    success("userName");
  }
  if (/[0-9]/g.test(fullName.value)) {
    fullName.value = fullName.value.replace(/[0-9]/g, "");
  }

  return isValid;
};

generateBtn.addEventListener("click", (e) => {
  if (validation()) {
    ticket.classList.remove("hidden");
    inputs.classList.add("hidden");
    let img = URL.createObjectURL(file);
    let fullNameValue = fullName.value;
    let emailAdressValue = emailAddress.value;
    let userNameValue = userName.value.toLowerCase();
    ticketImg.src = img;
    ticketName.innerText = fullNameValue;
    ticketuserName.innerText = userNameValue;
    sent.classList.add("hidden");
    sentEmail.classList.remove("hidden");
    email.innerText = emailAdressValue;
    nameForTicketOne.classList.add("hidden");
    nameForTicketTwo.classList.remove("hidden");
    ticketNameHolder.innerText = fullNameValue;
    const randomNum = (Math.floor(Math.random() * (3178 - 1371 + 1)) + 1371)
      .toString()
      .padStart(5, "0");
    randomUniqueNumber.innerText = randomNum;
  }
});

fullName.addEventListener("input", validation);
emailAddress.addEventListener("input", validation);
userName.addEventListener("input", validation);
