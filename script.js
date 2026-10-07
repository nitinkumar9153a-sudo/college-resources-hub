// ==========================================
// MATHEMATICS PPT SLIDER
// ==========================================

const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideCount = document.getElementById("slideCount");
const progressBar = document.getElementById("progressBar");

let currentSlide = 0;


// SHOW SLIDE
function showSlide(index) {

    // Last ke baad first slide
    if (index >= slides.length) {
        index = 0;
    }

    // First se pehle last slide
    if (index < 0) {
        index = slides.length - 1;
    }

    // Sabhi slides hide
    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    // Current slide show
    slides[index].classList.add("active");

    currentSlide = index;

    // Slide number update
    if (slideCount) {
        slideCount.textContent =
            `${currentSlide + 1} / ${slides.length}`;
    }

    // Progress bar
    if (progressBar) {
        const progress =
            ((currentSlide + 1) / slides.length) * 100;

        progressBar.style.width = progress + "%";
    }
}


// NEXT BUTTON
if (nextBtn) {

    nextBtn.addEventListener("click", function() {

        showSlide(currentSlide + 1);

    });

}


// PREVIOUS BUTTON
if (prevBtn) {

    prevBtn.addEventListener("click", function() {

        showSlide(currentSlide - 1);

    });

}


// KEYBOARD CONTROL
document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {

        showSlide(currentSlide + 1);

    }

    if (event.key === "ArrowLeft") {

        showSlide(currentSlide - 1);

    }

});


// START PRESENTATION
if (slides.length > 0) {

    showSlide(0);

}