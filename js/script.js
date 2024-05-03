document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const navbarHeight = navbar.clientHeight;
    
    window.addEventListener("scroll", function() {
        if (window.scrollY < navbarHeight) {
            navbar.style.backgroundColor = "#f9f8ff";
        } else {
            navbar.style.backgroundColor = "#999999";
        }
    });
});
