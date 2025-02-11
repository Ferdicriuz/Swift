"use strict"

    const dropdownBtn = document.getElementById("dropdown-button");
    const dropdownMenu = document.getElementsByClassName("dropdown-content");
    const iconMenu = document.querySelector("#drop-icon");

    dropdownBtn.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show");
        iconMenu.classList.toggle("fa-user-times");
    });

    document.addEventListener("click", function (event) {
        if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }});
