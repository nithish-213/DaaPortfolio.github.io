// JavaScript for Dark Mode Toggle

document.addEventListener("DOMContentLoaded", function () {
  // Set the initial year in the footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Get the dark mode toggle button
  const darkModeToggle = document.getElementById("darkModeToggle");

  // Check if dark mode was previously enabled (localStorage)
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "🌞 Light Mode"; // Update button text
  }

  // Add event listener for toggling dark mode
  darkModeToggle.addEventListener("click", function () {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      darkModeToggle.textContent = "🌙 Dark Mode"; // Update button text
      localStorage.setItem("darkMode", "disabled");
    } else {
      document.body.classList.add("dark-mode");
      darkModeToggle.textContent = "🌞 Light Mode"; // Update button text
      localStorage.setItem("darkMode", "enabled");
    }
  });

  // Smooth Scroll for Navigation Links
  document.querySelectorAll("header ul li a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjust for header height
          behavior: "smooth",
        });
      }
    });
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
