"use strict"

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

function selectPreference(category, selectedOption) {
    document.querySelectorAll(`.preference-option[data-category="${category}"]`).forEach(option => {
        option.classList.remove("selected");
    });

    selectedOption.classList.add("selected");

    selections[category] = selectedOption.getAttribute("data-value");
}

function submitPreferences() {
    let queryString = new URLSearchParams(selections).toString();
    window.location.href = "login.html" + queryString; // Redirect to results page
}

window.onload = generateCategories;
