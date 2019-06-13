// // modal script
const signupmodal = document.querySelector('#signup-modal'),
  signupButton = document.querySelector('#signup'),
  closeModalButton = document.querySelector('.close-modal'),
  // sinin const
  signinmodal = document.querySelector('#signin-modal'),
  signinButton = document.querySelector('#signin'),
  signinclose = document.querySelector('#close-signin');

signupButton.addEventListener('click', () => {
  signupmodal.classList.add('visible');
});

closeModalButton.addEventListener('click', () => {
  signupmodal.classList.remove('visible');
});

// // login
signinButton.addEventListener('click', () => {
  signinmodal.classList.add('visible');
});
signinclose.addEventListener('click', () => {
  signinmodal.classList.remove('visible');
});
