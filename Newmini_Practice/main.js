"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsModal = document.querySelectorAll(".show-modal");
const btnTimes = document.querySelector(".close-modal");

// Array-ga for orqali-olish 
for (let m of btnsModal) {
  m.addEventListener("click", btnFocus);
}

// Event-Listener funksiyalari
function btnFocus() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

btnTimes.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Windown-gagi Esc-tugmasiga funksiya
document.addEventListener("keydown", function (m) {
  if (m.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
