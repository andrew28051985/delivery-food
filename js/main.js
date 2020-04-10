const cardButton = document.querySelector("#card-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal-button-close");
const cancel = document.querySelector(".modal-cancel");

cardButton.addEventListener("click", toggleModal);

close.addEventListener("click", toggleModal);

cancel.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("modal-is-open");
}

new WOW().init();