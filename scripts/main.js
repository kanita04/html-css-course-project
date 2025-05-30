// Toggle mobile menu
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.navigation-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

const screenshots = [
  "assets/images/Screen1-mobileUI.png",
  "assets/images/Screen2-mobileUI.png",
  "assets/images/Screen3-mobileUI.png"
];

let currentIndex = 0;

function showSlide(index) {
  const mainImg = document.getElementById('main-img');
  mainImg.src = screenshots[index];
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % screenshots.length;
  showSlide(currentIndex);
}

document.querySelectorAll('.faq-item .question').forEach((question) => {
  question.addEventListener('click', () => {
    const parent = question.parentElement;
    parent.classList.toggle('open');
  });
});
