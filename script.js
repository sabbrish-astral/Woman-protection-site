document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const navbarRight = document.querySelector(".navbar-right");

    menuIcon.addEventListener("click", function() {
        navbarRight.classList.toggle("active");
    });
// ----------------------------------------------------------------------
    // const navLinks = document.querySelectorAll("nav ul li a");

    // navLinks.forEach(link => {
    //     link.addEventListener("click", function() {
    //         navbarRight.classList.toggle("active");
    //     });
    // });
//------------------------------------------------------------------------------------- 
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);

        // Validation
        for (let [key, value] of formData.entries()) {
            if (!value) {
                alert(`${key} is required.`);
                return;
            }
        }
        // Email sending logic (requires a backend service or third-party API)
        alert("Form submitted successfully!");
    });
});