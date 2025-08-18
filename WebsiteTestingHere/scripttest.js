//This is the codes for expanding and contracting a paragraph
 
function toggleExpand(element) {
    element.classList.toggle('expanded');
}
 
// This is the codes for tooltip where you hover over a word and a message pops up
 
document.addEventListener("DOMContentLoaded", function() {
    var tooltip = document.querySelector('.tooltiptext');
    tooltip.textContent = "An example is something that is representative of all such things in a group.";
});
 
 
 
//This is the java codes for making "image carousel" or "slideshow."
 
 
// ...existing code...

// Carousel logic
let slideIndex = 0;
let slides, autoSlideInterval;

function showSlide(n) {
    slides = document.querySelectorAll('.carousel-slide img');
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? "block" : "none";
    });
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

document.addEventListener("DOMContentLoaded", function() {
    // Tooltip
    var tooltip = document.querySelector('.tooltiptext');
    tooltip.textContent = "An example is something that is representative of all such things in a group.";

    // Carousel
    slides = document.querySelectorAll('.carousel-slide img');
    showSlide(slideIndex);
    autoSlideInterval = setInterval(autoSlide, 3000);
});

// ...existing code...
 
// Initialize the slideshow
showSlides();