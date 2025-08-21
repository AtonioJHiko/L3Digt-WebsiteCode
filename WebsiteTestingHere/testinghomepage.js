// ------------------------------
// Expand / Collapse (Read More)
// ------------------------------

/* 
Function: toggleExpand(button)
- Called whenever a "Read More" button is clicked.
- It shows or hides the extra text directly after the button.

Think of this like a light switch:
→ If the text is hidden, turn it on.
→ If it’s visible, turn it off.
*/
function toggleExpand(button) {
    /*
    nextElementSibling → finds the element that comes right 
    after this button in the HTML.

    Why? → So we don’t have to hard-code IDs for every section.
            The function will work on ANY "Read More" button.
    */
    const moreText = button.nextElementSibling;

    /*
    If the text is already shown, hide it again.
    Otherwise, show it.
    */
    if (moreText.style.display === "inline") {
        moreText.style.display = "none";       // Hide text
        button.textContent = "Read More";      // Reset label

        // 🔍 TEST: In browser DevTools console, type:
        // document.querySelector("button").click()
        // → Button should toggle itself off.
    } else {
        moreText.style.display = "inline";     // Show text
        button.textContent = "Read Less";      // Update label

        // 🔍 TEST: Add multiple "Read More" buttons in HTML.
        // Each should work independently because of nextElementSibling.
    }
}

// ------------------------------
// Run after the page fully loads
// ------------------------------

/*
Why DOMContentLoaded?
- The browser reads HTML top to bottom.
- If JavaScript runs *before* HTML is ready, it fails (because 
  it can’t find elements yet).
- This event waits until the HTML "blueprint" is fully built.
*/
document.addEventListener("DOMContentLoaded", function() {

    // ------------------------------
    // Tooltip Example
    // ------------------------------

    const tooltip = document.querySelector('.tooltiptext');

    if (tooltip) {
        tooltip.textContent = "An example is something that represents a group or category.";

        // 🔍 TEST: Hover over tooltip text on page.
        // In console: tooltip.textContent → should show updated string.
    }

    // ------------------------------
    // Carousel (Image Slideshow)
    // ------------------------------

    let slideIndex = 0;  // Keep track of current slide
    const slides = document.querySelectorAll('.carousel-slide img'); // All images
    const prevBtn = document.querySelector('.prev'); // Previous button
    const nextBtn = document.querySelector('.next'); // Next button
    let autoSlideInterval; // Will hold the auto-rotation timer

    /*
    Function: showSlide(n)
    - Makes only one slide visible (at index n).
    - Hides all others.
    */
    function showSlide(n) {
        if (slides.length === 0) return;  // Exit if no slides exist

        // Wrap around logic (loop back to start/end)
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;

        slides.forEach(slide => slide.style.display = "none"); // Hide all
        slides[slideIndex].style.display = "block";            // Show one

        // 🔍 TEST: In console:
        // slideIndex = 2; showSlide(slideIndex);
        // → Jumps straight to 3rd image.
    }

    /*
    Function: moveSlide(n)
    - Move forward/back by n.
    - Example: moveSlide(1) = next slide, moveSlide(-1) = previous.
    */
    function moveSlide(n) {
        slideIndex += n;
        showSlide(slideIndex);
        resetAutoSlide();

        // 🔍 TEST: Click next/prev buttons OR:
        // moveSlide(-1) in console → moves back.
    }

    /*
    Function: autoSlide()
    - Automatically goes to next slide.
    */
    function autoSlide() {
        slideIndex++;
        showSlide(slideIndex);
    }

    /*
    Function: resetAutoSlide()
    - Clears old timer, starts a new one.
    - Prevents slideshow from instantly skipping right after you click.
    */
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, 3000); // 3s interval
    }

    // Hook up buttons
    if (prevBtn) prevBtn.addEventListener("click", () => moveSlide(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => moveSlide(1));

    // Show the first slide immediately
    showSlide(slideIndex);

    // Start auto slideshow
    autoSlideInterval = setInterval(autoSlide, 3000);

    // 🔍 TEST IDEA: 
    // In console: clearInterval(autoSlideInterval);
    // → Stops autoplay. Then call resetAutoSlide() → starts again.
});
