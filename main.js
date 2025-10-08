// ===============================
// READ MORE TOGGLE
// ===============================
function toggleExpand(button) {
    const moreText = button.nextElementSibling;
    if (moreText.style.display === "inline") {
        moreText.style.display = "none";
        button.textContent = "Read More";
    } else {
        moreText.style.display = "inline";
        button.textContent = "Read Less";
    }
}

// ===============================
// PAGE INTERACTIVITY
// ===============================
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carousel-slide img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let slideIndex = 0;
    let autoSlideInterval;

    function showSlide(n) {
        if (slides.length === 0) return;
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;
        slides.forEach(slide => slide.style.display = "none");
        slides[slideIndex].style.display = "block";
    }

    function moveSlide(n) {
        slideIndex += n;
        showSlide(slideIndex);
        resetAutoSlide();
    }

    function autoSlide() {
        slideIndex++;
        showSlide(slideIndex);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, 3000);
    }

    if (prevBtn) prevBtn.addEventListener("click", () => moveSlide(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => moveSlide(1));

    showSlide(slideIndex);
    resetAutoSlide();
});
