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


        // FAQ

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

// close side bar
document.addEventListener("DOMContentLoaded", function () {
    const cartSidebar = document.querySelector(".cart-sidebar");
    const closeCartBtn = document.querySelector(".close-cart");

    // Close Cart Sidebar on Click
    closeCartBtn.addEventListener("click", function () {
        cartSidebar.classList.remove("open");
    });
});


// Function to Save Cart to Storage
document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!Array.isArray(cart)) {
        cart = []; // Reset if corrupted
    }

    const cartCountElements = document.querySelectorAll(".cart-count");
    const cartNav = document.querySelector(".cart-nav");
    const floatingCart = document.querySelector(".floating-cart");
    const cartSidebar = document.querySelector(".cart-sidebar");
    const cartItems = document.querySelector(".cart-items");
    const cartTotal = document.querySelector(".cart-total");
    const checkoutBtn = document.querySelector(".checkout-btn");

// Function to Toggle Sidebar
    function toggleCartSidebar() {
        if (!cartSidebar) {
            console.error("Cart sidebar element not found!");
            return;
        }
        cartSidebar.classList.toggle("open"); // Toggle class to show/hide sidebar
    }
    
    // Ensure Sidebar Opens on Click
    if (cartNav) {
        cartNav.addEventListener("click", toggleCartSidebar);
    }
    if (floatingCart) {
        floatingCart.addEventListener("click", toggleCartSidebar);
    }
    function updateCart() {
        if (!cartItems || !cartTotal) {
            console.error("Cart elements not found in the DOM.");
            return;
        }

        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            const li = document.createElement("li");
            li.innerHTML = `
                ${item.name} - $${(item.price * item.quantity).toFixed(2)} 
                (x${item.quantity})
                <button onclick="changeQuantity(${index}, -1)">
                    <i class="fa fa-minus"></i>
                </button>
                <button onclick="changeQuantity(${index}, 1)">
                    <i class="fa fa-plus"></i>
                </button>
                <button onclick="removeFromCart(${index})">
                    <i class="fa fa-trash"></i>
                </button>
            `;
            cartItems.appendChild(li);
        });

        cartCountElements.forEach(el => el.textContent = cart.reduce((sum, item) => sum + item.quantity, 0));
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function setupAddToCartButtons() {
        const addToCartButtons = document.querySelectorAll(".add-to-cart");
        if (addToCartButtons.length === 0) {
            console.warn("No '.add-to-cart' buttons found! Check your HTML.");
            return;
        }
        addToCartButtons.forEach(button => {
            button.addEventListener("click", function () {
                const name = this.getAttribute("data-name");
                const price = parseFloat(this.getAttribute("data-price"));
                if (!name || isNaN(price)) {
                    console.error("Invalid product data:", { name, price });
                    return;
                }
                addToCart(name, price);
            });
        });
    }

    function addToCart(name, price) {
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        updateCart();
        saveCart();
    }

    window.changeQuantity = function (index, change) {
        if (cart[index].quantity + change > 0) {
            cart[index].quantity += change;
        } else {
            cart.splice(index, 1);
        }
        updateCart();
        saveCart();
    };

    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        updateCart();
        saveCart();
    };

    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", function () {
            if (cart.length === 0) {
                alert("Your cart is empty!");
            } else {
                window.location.href = "checkout.html";
            }
        });
    }

    function generateCategories() {
        const categoryContainer = document.querySelector(".category-container");
        if (!categoryContainer) {
            console.error("Error: .category-container not found in the DOM.");
            return;
        }
        categoryContainer.innerHTML = "Your categories go here...";
    }

    updateCart(); // ✅ Now called after defining the function
    setupAddToCartButtons();
});




document.addEventListener("click", function (event) {
    if (!cartSidebar.contains(event.target) && !cartNav.contains(event.target) && !floatingCart.contains(event.target)) {
        cartSidebar.classList.remove("open");
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const floatingCart = document.querySelector(".floating-cart");

    if (!floatingCart) {
        console.error("Floating cart element not found!");
        return;
    }

    // Show Floating Cart on Scroll (Only on Desktop)
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            floatingCart.style.display = "flex"; // Show after scrolling down
        } else {
            floatingCart.style.display = "none"; // Hide at the top
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalContainer = document.querySelector(".total");
    const payBtn = document.querySelector(".pay-btn");

    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Retrieve stored cart

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalContainer.textContent = "Total: $0.00";
        payBtn.disabled = true; // Disable button if cart is empty
        return;
    }

    let total = 0;
    cartItemsContainer.innerHTML = "";

    cart.forEach(item => {
        total += item.price * item.quantity;

        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - $${(item.price * item.quantity).toFixed(2)} (x${item.quantity})
        `;
        cartItemsContainer.appendChild(li);
    });

    totalContainer.textContent = `Total: $${total.toFixed(2)}`;
});






// // Function to Save Cart to Local Storage
// function saveCartToStorage(cart) {
//     localStorage.setItem("cart", JSON.stringify(cart));
// }

// // Function to Load Cart from Local Storage
// function loadCartFromStorage() {
//     return JSON.parse(localStorage.getItem("cart")) || [];
// }
// console.log(localStorage);
// updateCart();

// checkout to payment







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

