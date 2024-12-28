document.addEventListener("DOMContentLoaded", function () {
    // Set the initial year in the footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Smooth Scroll for Navigation Links
    document.querySelector("header ul").addEventListener("click", function (e) {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for header height
                    behavior: "smooth",
                });
            }
        }
    });

    // Expandable Project Cards (Optional for future projects)
    document.querySelectorAll(".project-card").forEach((card) => {
        card.addEventListener("click", function () {
            this.classList.toggle("expanded");
        });
    });

    // Alert for External Links
    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
        link.addEventListener("click", function (e) {
            if (!confirm("You are about to visit an external site. Continue?")) {
                e.preventDefault();
            }
        });
    });
});
