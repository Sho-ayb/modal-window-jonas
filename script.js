// All variables assigned of document elements on the webpage

const buttonShowModal = document.querySelectorAll('#show-modal');
const buttonCloseModal = document.querySelectorAll('#close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// You can see these elements in the dev console

console.log(buttonShowModal);
console.log(modal);

// To help refactor code; creating functions

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// When user clicks on any "Show Modal Button" modal window will become visible

buttonShowModal.forEach((button) => {
  button.addEventListener('click', openModal);
});

// When the modal is visible, and user clicks the "Close Modal Button", the modal will be hidden

buttonCloseModal.forEach((button) => {
  button.addEventListener('click', closeModal);
});
