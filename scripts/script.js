document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;

            // Select the menu toggle button and navigation menu
            const menuToggle = document.querySelector(".menu-toggle");
            const navigation = document.querySelector(".navigation");

            if (menuToggle && navigation) {
                menuToggle.addEventListener("click", function() {
                    navigation.classList.toggle("show");

                    // Ensure background only appears when open
                    if (navigation.classList.contains("show")) {
                        navigation.style.backgroundColor = "white";
                    } else {
                        navigation.style.backgroundColor = "transparent";
                    }
                });

                // Close menu when clicking outside of it
                document.addEventListener("click", function(event) {
                    if (!menuToggle.contains(event.target) && !navigation.contains(event.target)) {
                        navigation.classList.remove("show");
                        navigation.style.backgroundColor = "transparent"; // Ensures it disappears fully
                    }
                });
            }
        })
        .catch(error => console.error("Error loading navbar:", error));
});
