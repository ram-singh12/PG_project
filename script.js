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


// ========================================
// DIGITAL NOTICE BOARD MANAGEMENT
// ========================================


// Get elements from HTML

const noticeForm = document.getElementById("noticeForm");

const adminNoticeList =
    document.getElementById("adminNoticeList");


// Load existing notices from LocalStorage

let notices = JSON.parse(
    localStorage.getItem("notices")
) || [];


// Display notices

function displayNotices(container) {

    if (!container) return;

    container.innerHTML = "";

    if (notices.length === 0) {
        container.innerHTML = "<p>No notices available.</p>";
        return;
    }

    notices.forEach(function(notice) {

        const card = document.createElement("div");

        card.className = "notice-card";

        const title = document.createElement("h3");
        title.textContent = notice.title;

        const category = document.createElement("p");
        category.textContent = "Category: " + notice.category;

        const date = document.createElement("p");
        date.textContent = notice.date;

        const description = document.createElement("p");
        description.textContent = notice.description;

        card.append(title, category, date, description);

        // Delete button for admin

        if (adminNoticeList) {

            const deleteBtn = document.createElement("button");

            deleteBtn.textContent = "Delete Notice";

            deleteBtn.addEventListener("click", function() {

                notices = notices.filter(function(item) {
                    return item.id !== notice.id;
                });

                localStorage.setItem(
                    "notices",
                    JSON.stringify(notices)
                );

                displayNotices(adminNoticeList);

            });

            card.appendChild(deleteBtn);
        }

        container.appendChild(card);

    });

}


// Publish a new notice

if (noticeForm) {

    noticeForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const title =
            document.getElementById("noticeTitle").value.trim();

        const category =
            document.getElementById("noticeCategory").value;

        const description =
            document.getElementById("noticeDescription").value.trim();

        if (!title || !category || !description) {
            alert("Please fill all fields.");
            return;
        }

        const newNotice = {

            id: Date.now(),

            title: title,

            category: category,

            description: description,

            date: new Date().toLocaleDateString("en-IN")

        };


        notices.push(newNotice);


        localStorage.setItem(
            "notices",
            JSON.stringify(notices)
        );


        alert("Notice published successfully!");

        noticeForm.reset();

        displayNotices(adminNoticeList);

    });

}


// Display existing notices on admin page

displayNotices(adminNoticeList);


// Display notices on residents' page

const publicNoticeList =
    document.getElementById("publicNoticeList");

displayNotices(publicNoticeList);
