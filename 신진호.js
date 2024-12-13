const deploy = document.querySelector("deploy");
const loginBtn = document.querySelector(".loginBtn");


document.querySelector('.loginBtn').addEventListener('click', () => {
    const www = document.querySelector('.www');
    const login = document.querySelector('.login');

    login.style.display = 'none';
    www.style.display = 'block';
});


document.querySelector('.deploy').addEventListener('click', () => {
    const easterEgg = document.querySelector('.easterEGG');
    easterEgg.style.display = 'block';
});
