"use strict";
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.querySelector("#email-submit").addEventListener("click", checkEmail);

function checkEmail() {
  let inputString = document.querySelector("#text-input").value;
  console.log(inputString);
  if (regex.test(inputString)) {
    document.querySelector(".email-layer").classList.add("hidden");
    document.querySelector(".info-layer").classList.remove("hidden");
  } else {
    alert(`Enter a valid email`);
  }
}

const infoItem = document.querySelectorAll(".info-item");
const viewButton = document.querySelectorAll(".view-button");
const infoContent = document.querySelectorAll(".info-content");

for (let i = 0; i < infoItem.length; i++) {
  infoItem[i].addEventListener("mouseover", function () {
    viewButton[i].classList.remove("hidden");
  });
}

for (let i = 0; i < infoItem.length; i++) {
  infoItem[i].addEventListener("mouseleave", function () {
    viewButton[i].classList.add("hidden");
  });
}

let show = false;
for (let i = 0; i < viewButton.length; i++) {
  viewButton[i].addEventListener("click", function () {
    if (!show) {
      infoContent[i].classList.remove("hidden");
      viewButton[i].textContent = `\u25B2 View less`;
      show = true;
    } else {
      infoContent[i].classList.add("hidden");
      viewButton[i].textContent = `\u25BC View more`;
      show = false;
    }
  });
}
