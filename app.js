window.addEventListener("scroll", function() {
    const mainNav = document.getElementById("navbar");

    if(window.pageYOffset > 80) {
        mainNav.classList.add("bg-pink");
        console.log('hi');
    }
}); 