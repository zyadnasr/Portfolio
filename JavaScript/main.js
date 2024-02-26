let wrapper = document.querySelector('.wrapper');
let closeBtn = document.querySelector('.icon-close');
let popUpBtn = document.querySelector('.btnLogin-popup');
let registerLink = document.querySelector('.register-link');
let loginLink = document.querySelector('.login-link');
let registerFormBox = document.querySelector('.form-box.register');
let loginFormBox = document.querySelector('.form-box.login');

closeBtn.addEventListener ('click', ()=> {
    wrapper.classList.remove('open');
});

popUpBtn.addEventListener ('click', ()=> {
    wrapper.classList.add('open');
});

registerLink.addEventListener ('click', ()=> {
    registerFormBox.classList.add('active');
    loginFormBox.classList.add('active');
    wrapper.classList.add('active');
});

loginLink.addEventListener ('click', ()=> {
    registerFormBox.classList.remove('active');
    loginFormBox.classList.remove('active');
    wrapper.classList.remove('active');
});