const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

const myTimer = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 2000);
