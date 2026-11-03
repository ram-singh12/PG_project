// ========================================
// Nakul Boys Hostel
// Main JavaScript File
// ========================================


// CONTACT FORM

const contactForm = document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        alert(
            "Thank you " +
            name +
            "! Your enquiry has been received."
        );

        contactForm.reset();

    });

}


// ADMIN LOGIN
// ----------------------------------------
// TEMPORARY DEMO LOGIN
// This will NOT be used in the final
// production system.
// We will move authentication to Flask.

const loginForm = document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value;

        const password =
            document.getElementById("password").value;

        const message =
            document.getElementById("loginMessage");


        // Temporary demo credentials

        if (
            username === "admin" &&
            password === "1234"
        ) {

            message.innerText =
                "Login successful!";

            message.style.color = "green";


            setTimeout(function() {

                window.location.href =
                    "admin.html";

            }, 500);

        }

        else {

            message.innerText =
                "Invalid username or password.";

            message.style.color = "red";

        }

    });

}