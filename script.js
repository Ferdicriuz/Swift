"use strict"

// nav

// document.querySelector(".menu-iconn").addEventListener("click", function(){
// const menuLinks = document.querySelector("#menu-links");
// const icon = document.querySelector("#bars");
// menuLinks.classList.toggle("show");
// icon.classList.toggle("fa-user-times");
// });

// Toggle Hamburger Menu
function toggleMenu() { 
    const menu = document.querySelector("#menu-links");
    const icon = document.querySelector("menu-icon");

    menu.classList.toggle("active");

    // Toggle icon
    if (menu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
}


// Close dropdowns when clicking outside
window.onclick = function (event) {
    if (!event.target.matches(".dropdown-button")) {
        document.querySelectorAll(".dropdown-content").forEach((item) => {
            item.classList.remove("show");
        });
    }
};


// For HomePage Favorite Love

function toggleFavorite(button) {
    button.classList.toggle("active");
    let icon = button.querySelector(".icon");
    if (button.classList.contains("active")) {
        icon.classList.remove("far");
        icon.classList.add("fas");
        button.style.backgroundColor = "transparent";
        button.style.borderRadius = "50%";
        button.style.transition = "background-color 0.3s ease-in-out";
    } else {
        icon.classList.remove("fas");
        icon.classList.add("far");
        button.style.backgroundColor = "transparent";
        button.style.borderRadius = "";
        button.style.padding = "";
    }
}

const categories = {
    "Electronics & Gadgets": ["Smartphones & Accessories", "Laptops & Computers", "Gaming & Consoles", "Audio & Wearables"],
    "Fashion & Apparel": ["Men's Clothing", "Women's Clothing", "Kid's Fashion", "Accessories"],
    "Health & Beauty": ["Skincare", "Haircare", "Fitness & Wellness", "Personal Care"],
    "Groceries & Food Items": ["Fresh Produce", "Pantry Staples", "Beverages", "Snacks & Sweets"],
    "Home & Living": ["Furniture", "Kitchen & Dining", "Home Decor", "Snacks & Sweets"],
    "Automotive & Tools": ["Car Accessories", "Motorcycle Accessories", "Power Tools", "Home Improvement"],
    "Baby & Kids": ["Baby Care", "Toys & Games", "Baby Clothing", "Kids' School Supplies"],
    "Sports & Outdoor": ["Exercise Equipment", "Outdoor Gear", "Team Sports", "Team Sports"],
    "Books & Stationery": ["Books", "Office Supplies", "Art & Craft"],
    "Pet Supplies": ["Pet Food", "Pet Accessories", "Pet Grooming", "Pet Toys"]
};

let selections = {};

// Generate categories dynamically
function generateCategories() {
    const container = document.getElementById("categories");
    container.innerHTML = "";

    Object.keys(categories).forEach(category => {
        let categoryDiv = document.createElement("div");
        categoryDiv.className = "category";

        let title = document.createElement("h1");
        title.innerText = `Choose a ${category}`;
        categoryDiv.appendChild(title);

        let optionsDiv = document.createElement("div");
        optionsDiv.className = "preference-container";

        categories[category].forEach(option => {
            let optionDiv = document.createElement("div");
            optionDiv.className = "preference-option";
            optionDiv.setAttribute("data-category", category);
            optionDiv.setAttribute("data-value", option);
            optionDiv.innerHTML = `<p>${option}</p>`;
            optionDiv.onclick = function() {
                selectPreference(category, this);
            };

            optionsDiv.appendChild(optionDiv);
        });

        categoryDiv.appendChild(optionsDiv);
        container.appendChild(categoryDiv);
    });
}

// Handle selection
function selectPreference(category, selectedOption) {
    // Remove "selected" class from other options in the same category
    document.querySelectorAll(`.preference-option[data-category="${category}"]`).forEach(option => {
        option.classList.remove("selected");
    });

    // Add "selected" class to clicked option
    selectedOption.classList.add("selected");

    // Save the selection
    selections[category] = selectedOption.getAttribute("data-value");
}

// Handle submission and redirect to another page
function submitPreferences() {
    if (Object.keys(selections).length === 0) {
        alert("Please select at least one option before proceeding!");
        return;
    }

    let queryString = new URLSearchParams(selections).toString();
    window.location.href = "login.html?" + queryString; // Redirect with data
}

// Load categories when page loads
window.onload = generateCategories;


// news letter

function showAlert(message) {
    const alertBox = document.getElementById("customAlert");
    alertBox.innerText = message;
    alertBox.style.display = "block";
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 3000);
}

function subscribe() {
    const email = document.getElementById("myEmail").value.trim();
    const agree = document.getElementById("myCheck").checked;
    const message = document.getElementById("message");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
        message.style.color = "red";
        message.innerText = "Please enter a valid email address.";
        showAlert("Invalid email address. Please enter a valid email.");
        return;
    }
    
    if (!agree) {
        message.style.color = "red";
        message.innerText = "You must agree to the terms and conditions.";
        showAlert("Please agree to the terms and conditions.");
        return;
    }
    
    message.style.color = "green";
    message.innerText = "Thank you for subscribing!";
    alert("Thank you for subscribing!");
    document.getElementById("email").value = "";
    document.getElementById("agree").checked = false;
}


// seller registration
let currentStep = 0;
        let steps = document.querySelectorAll(".form-step");
        let progressBar = document.getElementById("progressBar");
        let progressSteps = document.querySelectorAll(".progress-step");
        let submitBtn = document.getElementById("submitBtn");

        function updateProgressBar() {
            let progress = (currentStep / (steps.length - 1)) * 100;
            progressBar.style.width = progress + "%";

            progressSteps.forEach((step, index) => {
                if (index <= currentStep) {
                    step.classList.add("active");
                } else {
                    step.classList.remove("active");
                }
            });
        }

        function nextStep() {
            if (currentStep < steps.length - 1) {
                steps[currentStep].classList.remove("active");
                currentStep++;
                steps[currentStep].classList.add("active");
                updateProgressBar();
            }
        }

        function prevStep() {
            if (currentStep > 0) {
                steps[currentStep].classList.remove("active");
                currentStep--;
                steps[currentStep].classList.add("active");
                updateProgressBar();
            }
        }

        function selectCategory(element) {
            document.querySelectorAll(".category").forEach(cat => cat.classList.remove("selected"));
            element.classList.add("selected");
            document.getElementById("selectedCategory").value = element.innerText;
        }

        function toggleSubmit() {
            submitBtn.disabled = !document.getElementById("agreeCheckbox").checked;
        }

        function submitForm(event) {
            event.preventDefault();
            document.getElementById("successMessage").style.display = "block";
        }


        // car

        document.addEventListener("DOMContentLoaded", function() {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector(".icon");

            // Close other open answers and reset icons
            document.querySelectorAll(".faq-answer").forEach(faq => {
                if (faq !== answer) {
                    faq.classList.remove("show");
                }
            });

            document.querySelectorAll(".faq-question").forEach(q => {
                if (q !== question) {
                    q.classList.remove("active");
                    q.querySelector(".icon").textContent = "▼"; // Reset to down arrow
                }
            });

            // Toggle the clicked FAQ
            answer.classList.toggle("show");
            question.classList.toggle("active");

            // Change icon based on state
            if (question.classList.contains("active")) {
                icon.textContent = "▲"; // Change to up arrow
            } else {
                icon.textContent = "▼"; // Change back to down arrow
            }
        });
    });
});




//         document.addEventListener("DOMContentLoaded", function() {
//     const dropdowns = document.querySelectorAll(".dropdown");

//     dropdowns.forEach(dropdown => {
//         const dropbtn = dropdown.querySelector(".dropbutton");
//         const dropdownContent = dropdown.querySelector(".dropdown-content");

//         dropbtn.addEventListener("click", function(event) {
//             event.preventDefault(); // Prevent link default action

//             // Close other open dropdowns
//             document.querySelectorAll(".dropdown-content").forEach(content => {
//                 if (content !== dropdownContent) {
//                     content.classList.remove("show");
//                 }
//             });

//             // Toggle the clicked dropdown
//             dropdownContent.classList.toggle("show");
//         });

//         // Close dropdown if clicking outside
//         document.addEventListener("click", function(event) {
//             if (!dropdown.contains(event.target)) {
//                 dropdownContent.classList.remove("show");
//             }
//         });
//     });
// });
