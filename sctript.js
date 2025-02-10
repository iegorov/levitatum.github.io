document.addEventListener("DOMContentLoaded", function () {
    alert('yap');
    const currentUrl = window.location.href;
    const menuItems = document.querySelectorAll("nav#main-menu a");

    menuItems.forEach((item) => {
        if (currentUrl.includes(item.getAttribute("href"))) {
            item.classList.add("active");
        }
    });
});
