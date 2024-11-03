// Select all product elements
const products = document.querySelectorAll('.product');

// Create an Intersection Observer to detect when each product is visible in the viewport
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add visible class
            observer.unobserve(entry.target); // Stop observing once it's visible
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the product is in view
});

// Observe each product for scroll-triggered animation
products.forEach(product => {
    observer.observe(product);
});

document.addEventListener("DOMContentLoaded", function () {
    const missionSection = document.querySelector(".Mission");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target); // Stop observing after it's in view
                }
            });
        },
        {
            threshold: 0.1 // Trigger when 10% of the element is visible
        }
    );

    observer.observe(missionSection);
});
