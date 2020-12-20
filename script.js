"use strict";

const modalsContainer = document.querySelector(".modal-content");

let modals = document.querySelectorAll(".modal");

const overlay = document.querySelector(".overlay");

let btnsOpenModel = document.querySelectorAll(".modal-show");

const btnCloseModel = document.querySelector(".close");

for (let i = 0; i < btnsOpenModel.length; i++) {
  const openModel = function () {
    modals[i].classList.remove("hidden");
    modalsContainer.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeModal = function () {
    modals[i].classList.add("hidden");
    modalsContainer.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  btnsOpenModel[i].addEventListener("click", openModel);
  btnCloseModel.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
}
