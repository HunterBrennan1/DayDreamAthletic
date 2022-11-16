const signupButton = document.querySelector('#signup');
const modalBg = document.querySelector('#signup-background');
const modal = document.querySelector('#modal1');

signupButton.addEventListener('click', () => {
  modal.classList.add('is-active');
})

modalBg.addEventListener('click', () => {
  modal.classList.remove('is-active');
})
