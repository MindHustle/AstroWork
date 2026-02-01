// ===== NAVBAR JS START =====
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");

menuOpen.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

menuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});
// ===== NAVBAR JS END =====
// ===== HERO SLIDER START =====
const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}, 3000);
// ===== HERO SLIDER END =====
const scriptURL = 'https://script.google.com/macros/s/AKfycbx_sVuKB5kTTh6V9HC6yH-WX5ddpTPwaWR12KqiuT1hovYf3d8jNvb9jLRZov9nlYwpLw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})