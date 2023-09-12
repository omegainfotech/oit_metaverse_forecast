// scroll-to-top.js

// Function to scroll to the top of the page smoothly
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This provides a smooth scroll effect
    });
}

// Attach a click event listener to the "Home" link
const homeLink = document.querySelector('a[href="#home"]');

if (homeLink) {
    homeLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        scrollToTop(); // Call the scrollToTop function
    });
}
