document.addEventListener('DOMContentLoaded', function () {
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            const offsetTop = targetSection.offsetTop - 80; // Adjust the offset as needed
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
});