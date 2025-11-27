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
// PAGE INTERACTIVITY (CAROUSEL)
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
        autoSlideInterval = setInterval(autoSlide, 10000);
    }

    if (prevBtn) prevBtn.addEventListener("click", () => moveSlide(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => moveSlide(1));

    showSlide(slideIndex);
    resetAutoSlide();
});


// ===============================
// BACK TO TOP BUTTON
// ===============================

// Show the button after scrolling
window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTop');
    if (!btn) return; // safety in case it's missing

    if (window.scrollY > 300) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});

// Smooth scroll to top when clicked
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


// Show button after scrolling
window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});

// Scroll smoothly to top when clicked
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
