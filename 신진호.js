const acButton = document.querySelector('#acbutton');

const profileContent = document.querySelector(".profile");
const coreContent = document.querySelector(".core-attributes");
const currentContent = document.querySelector(".current-objectives");
const preferContent = document.querySelector(".preferred-arsenal");
const behavioralContent = document.querySelector(".behavioral-matrix");
const dashboard = document.querySelector(".dashboard");

const accessContent = document.querySelector(".access-denied");


document.querySelector('#profile').addEventListener('click', () => {
    profileContent.style.display = "none";
    coreContent.style.display = "none";
    currentContent.style.display = "none";
    preferContent.style.display = "none";
    behavioralContent.style.display = "none";
    dashboard.style.display = "none";

    profileContent.style.display = "block";
});

document.querySelector('#core').addEventListener('click', () => {
    profileContent.style.display = "none";
    coreContent.style.display = "none";
    currentContent.style.display = "none";
    preferContent.style.display = "none";
    behavioralContent.style.display = "none";
    dashboard.style.display = "none";

    coreContent.style.display = "block";
});


document.querySelector('#current').addEventListener('click', () => {
    profileContent.style.display = "none";
    coreContent.style.display = "none";
    currentContent.style.display = "none";
    preferContent.style.display = "none";
    behavioralContent.style.display = "none";
    dashboard.style.display = "none";

    currentContent.style.display = "block";
});


document.querySelector('#prefer').addEventListener('click', () => {
    profileContent.style.display = "none";
    coreContent.style.display = "none";
    currentContent.style.display = "none";
    preferContent.style.display = "none";
    behavioralContent.style.display = "none";
    dashboard.style.display = "none";

    preferContent.style.display = "block";
});


document.querySelector('#behavioral').addEventListener('click', () => {
    profileContent.style.display = "none";
    coreContent.style.display = "none";
    currentContent.style.display = "none";
    preferContent.style.display = "none";
    behavioralContent.style.display = "none";
    dashboard.style.display = "none";

    behavioralContent.style.display = "block";

});





document.querySelector('.content-button').addEventListener('click', () => {
    accessContent.style.display = "block";
})

document.querySelector('.acbutton').addEventListener('click', () => {
    accessContent.style.display = "none";
})