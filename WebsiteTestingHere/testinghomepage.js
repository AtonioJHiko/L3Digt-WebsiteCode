// ------------------------------
// Expand/Collapse Paragraph
// ------------------------------
// This function shows or hides the extra text.
// We use 'element' to toggle a CSS class called "expanded".
function toggleExpand(element) {
    element.classList.toggle('expanded'); 
}

document.addEventListener("DOMContentLoaded", function() {

    // ------------------------------
    // Tooltip Logic
    // ------------------------------
    // Tooltips are little hover boxes.
    // Here we fill in the hidden span with a definition.
    const tooltip = document.querySelector('.tooltiptext');
    if (tooltip) {
        tooltip.textContent = "An example is something that represents a group or category.";
    }

    // ------------------------------
    // Carousel (Image Slideshow)
    // ------------------------------
    let slideIndex = 0; // Keeps track of which image is showing
    const slides = document.querySelectorAll('.carousel-slide img'); // Select all images
    const prevBtn = document.querySelector('.prev'); // Left button
    const nextBtn = document.querySelector('.next'); // Right button
    const carouselContainer = document.querySelector('.carousel-container'); // Whole slideshow area
    let autoSlideInterval; // Timer for automatic slide change

    // Function: Show the current slide with fade effect
    function showSlide(n) {
        if (slides.length === 0) return;

        // Wrap around if index goes out of range
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;

        // Hide all slides first
        slides.forEach(slide => {
            slide.style.display = "none";
            slide.style.opacity = 0; // invisible
        });

        // Show the current slide
        slides[slideIndex].style.display = "block";
        setTimeout(() => {
            slides[slideIndex].style.opacity = 1; // fade in
        }, 50);
    }

    // Function: Move to next or previous slide
    function moveSlide(n) {
        slideIndex += n;
        showSlide(slideIndex);
        resetAutoSlide();
    }

    // Function: Automatically show next slide
    function autoSlide() {
        slideIndex++;
        showSlide(slideIndex);
    }

    // Function: Reset auto-slide timer
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, 3000); // 3 sec
    }

    // ------------------------------
    // Attach Event Listeners
    // ------------------------------
    if (prevBtn) prevBtn.addEventListener("click", () => moveSlide(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => moveSlide(1));

    // Pause slideshow when hovering, resume when leaving
    if (carouselContainer) {
        carouselContainer.addEventListener("mouseenter", () => clearInterval(autoSlideInterval));
        carouselContainer.addEventListener("mouseleave", resetAutoSlide);
    }

    // ------------------------------
    // Start the carousel!
    // ------------------------------
    showSlide(slideIndex);
    autoSlideInterval = setInterval(autoSlide, 3000);
});
