"use strict";

const modalsContainer = document.querySelector(".modal-content");

const modals = document.querySelectorAll(".modal");

const overlay = document.querySelector(".overlay");

const btnsOpenModal = document.querySelectorAll(".modal-show");

const btnsCloseModal = document.querySelector(".close");

let closeModal;

for (let i = 0; i < btnsOpenModal.length; i++) {
  const openModal = function () {
    modals[i].classList.remove("hidden");
    modalsContainer.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  closeModal = function () {
    modals[i].classList.add("hidden");
    modalsContainer.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  btnsOpenModal[i].addEventListener("click", openModal);
  btnsCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
}

document.addEventListener("keydown", function (event) {
  console.log(event.key); //test
  if (event.key == "Escape") {
    if (!overlay.classList.contains("hidden")) {
      closeModal();
    }
  }
});

// const openModal = function (j) {
//   modals[j].classList.remove("hidden");
//   modalsContainer.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModal = function (j) {
//   modals[j].classList.add("hidden");
//   modalsContainer.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener("click", openModal(i));
//   btnsCloseModal.addEventListener("click", closeModal);
//   overlay.addEventListener("click", closeModal);
// }

// document.addEventListener("keydown", function (event) {
//   console.log(event.key); //test
//   if (event.key == "Escape") {
//     if (modals[1].classList.contains("hidden")) {
//       closeModal();
//     }
//   }
// });
