document.addEventListener("DOMContentLoaded", function () {
    // Set the current year dynamically in the footer
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Smooth scrolling for navigation links using event delegation
    const headerNav = document.querySelector("header ul");
    if (headerNav) {
        headerNav.addEventListener("click", function (e) {
            if (e.target.tagName === 'A') {
                e.preventDefault();
                const targetId = e.target.getAttribute("href")?.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50, // Adjust for header height
                        behavior: "smooth",
                    });
                }
            }
        });
    }

    // Expandable project cards functionality
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
        card.addEventListener("click", function () {
            this.classList.toggle("expanded");
        });
    });


    // Project buttons functionality (if buttons are inside project cards)
    const projectButtons = document.querySelectorAll('.projects-card-box__buttons button');
    projectButtons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log('Project Button Clicked');
            // Add functionality here, such as opening links or displaying more details
        });
    });
});
