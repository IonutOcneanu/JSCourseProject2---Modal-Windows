"use strict";

const modalsContainer = document.querySelector(".modal-content");

const modals = document.querySelectorAll(".modal");

const overlay = document.querySelector(".overlay");

const btnsOpenModal = document.querySelectorAll(".modal-show");

const btnsCloseModal = document.querySelector(".close");

for (let i = 0; i < btnsOpenModal.length; i++) {
  const openModal = function () {
    modals[i].classList.remove("hidden");
    modalsContainer.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeModal = function () {
    modals[i].classList.add("hidden");
    modalsContainer.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  btnsOpenModal[i].addEventListener("click", openModal);
  btnsCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (event) {
    if (event.key == "Escape" && !modals[i].classList.contains("hidden")) {
      closeModal();
      console.log(event.key);
    }
  });
}
