// ------------------------------
// Expand/Collapse Paragraph
// ------------------------------
// This function makes hidden text appear or disappear when you click on a paragraph.
// It adds or removes the CSS class "expanded" to the element you clicked on.
function toggleExpand(element) {
    element.classList.toggle('expanded'); 
}

// ------------------------------
// Wait until the webpage has fully loaded
// ------------------------------
document.addEventListener("DOMContentLoaded", function() {

    // ------------------------------
    // Tooltip Logic
    // ------------------------------
    // A tooltip is a little "hover message" that shows when the user hovers over a word.
    // This code finds the tooltip text area and fills it with a definition.
    var tooltip = document.querySelector('.tooltiptext');
    if (tooltip) {
        tooltip.textContent = "An example is something that is representative of all such things in a group.";
    }

    // ------------------------------
    // Carousel (Image Slideshow)
    // ------------------------------
    let slideIndex = 0; // Keeps track of which image is showing
    const slides = document.querySelectorAll('.carousel-slide img'); // Selects all carousel images
    let autoSlideInterval; // Stores the "timer" for automatic sliding

    // Function: Show a specific slide
    // It hides all images except the one at 'slideIndex'
    function showSlide(n) {
        if (slides.length === 0) return; // If no images, do nothing

        // If the index goes past the last slide, loop back to the first
        if (n >= slides.length) slideIndex = 0;

        // If the index goes before the first slide, loop to the last
        if (n < 0) slideIndex = slides.length - 1;

        // Show only the slide at the current index
        slides.forEach((slide, i) => {
            slide.style.display = i === slideIndex ? "block" : "none";
        });
    }

    // Function: Move to the next or previous slide
    // 'n' is either +1 (next) or -1 (previous)
    function moveSlide(n) {
        slideIndex += n;     // Move slide index forward or backward
        showSlide(slideIndex); // Show the new slide
        resetAutoSlide();    // Restart the auto-slide timer
    }

    // Function: Automatically go to the next slide every 3 seconds
    function autoSlide() {
        slideIndex++;
        showSlide(slideIndex);
    }

    // Function: Reset the auto-slide timer
    // This stops the old timer and starts a fresh one
    function resetAutoSlide() {
        clearInterval(autoSlideInterval); // Stop old timer
        autoSlideInterval = setInterval(autoSlide, 3000); // Restart timer
    }

    // ------------------------------
    // Connect moveSlide() to the buttons
    // ------------------------------
    // By putting it on 'window', we can call it from the HTML buttons
    window.moveSlide = moveSlide;

    // ------------------------------
    // Start the carousel!
    // ------------------------------
    showSlide(slideIndex); // Show the first slide
    autoSlideInterval = setInterval(autoSlide, 3000); // Start automatic sliding every 3 seconds
});
