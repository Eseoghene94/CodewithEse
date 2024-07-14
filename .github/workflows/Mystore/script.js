document.addEventListener("DOMContentLoaded", function() {
    // Parallax Effect
    window.addEventListener("scroll", function() {
        const parallax = document.querySelectorAll(".parallax");
        parallax.forEach(function(element) {
            let scrollPosition = window.pageYOffset;
            element.style.backgroundPositionY = scrollPosition * 0.5 + "px";
        });
    });

    // Search Functionality
    const searchInput = document.querySelector("header nav ul li input");
    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            alert("Search functionality is not implemented yet!");
        }
    });

    // Email Validation for Login and Register Forms
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    document.querySelectorAll("form").forEach(function(form) {
        form.addEventListener("submit", function(event) {
            const emailInput = form.querySelector("input[type='email']");
            if (emailInput && !validateEmail(emailInput.value)) {
                event.preventDefault();
                alert("Please enter a valid email address.");
            }
        });
    });

    // Payment Button Click Handlers
    const paymentButtons = document.querySelectorAll(".checkout-section button");
    paymentButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            alert("Payment functionality is not implemented yet!");
        });
    });
});