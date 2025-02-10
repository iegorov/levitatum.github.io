"use strict";

function highlightActiveMenuItem() {
    const currentUrl = window.location.href;
    const menuItems = document.querySelectorAll("nav#main-menu a");

    menuItems.forEach((item) => {
        item.classList.remove("active");
        if (currentUrl.includes(item.getAttribute("href"))) {
            item.classList.add("active");
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    highlightActiveMenuItem();

    window.addEventListener("hashchange", function () {
        highlightActiveMenuItem();
    });
});
