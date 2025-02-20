"use strict"

document.getElementById("fill").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting if validation fails

    let email = document.getElementById("email").value;
    let password = document.getElementById("psword").value;
    let emailMessage = document.getElementById("emailMessage");
    let passwordMessage = document.getElementById("passwordMessage");

    let isValid = true; // Track overall form validity

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com"];

    if (!email) {
        emailMessage.style.color = "red";
        emailMessage.textContent = "Email cannot be empty";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailMessage.style.color = "red";
        emailMessage.textContent = "Invalid email format";
        isValid = false;
    } else if (!allowedDomains.includes(email.split("@")[1])) {
        emailMessage.style.color = "orange";
        emailMessage.textContent = "Email domain not allowed";
        isValid = false;
    } else {
        emailMessage.style.color = "green";
        emailMessage.textContent = "Valid email";
    }

    // Password Validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!password) {
        passwordMessage.style.color = "red";
        passwordMessage.textContent = "Password cannot be empty";
        isValid = false;
    } else if (!passwordRegex.test(password)) {
        passwordMessage.style.color = "red";
        passwordMessage.textContent = "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, and a number.";
        isValid = false;
    } else {
        passwordMessage.style.color = "green";
        passwordMessage.textContent = "Strong password";
    }

});

document.getElementById("#emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    let email = document.getElementById("emailInput").value;
    let message = document.getElementById("message");

    // Check if email is empty
    if (!email) {
        message.style.color = "red";
        message.textContent = "Email cannot be empty";
        return;
    }

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        message.style.color = "red";
        message.textContent = "Invalid email format";
        return;
    }

    // Extract domain
    let domain = email.split("@")[1];

    // List of allowed domains
    const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com"];

    if (!allowedDomains.includes(domain)) {
        message.style.color = "orange";
        message.textContent = "Email domain not allowed";
        return;
    }

    message.style.color = "green";
    message.textContent = "Valid email address";
});

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