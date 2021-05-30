window.addEventListener("scroll", function() {
    const mainNav = document.getElementById("navbar");
    const bigImg = document.getElementById("container_big-img");
    const nav__links = document.getElementById("nav");


    if(window.pageYOffset > 10) {
        // mainNav.classList.add("bg-pink");
        mainNav.style.height = "75px";
        bigImg.style.height = "0px";
      
        console.log('hi');
    } else if(this.window.pageYOffset < 0.5) {
        // mainNav.classList.remove("bg-pink");
        mainNav.style.height = "100px";
        bigImg.style.height = "100vh";
       
        
      

    }
}); 

/////////////////////////

function toggleSidebar(ref){
    document.getElementById("nav").classList.toggle('nav__open');
  }

  function toggleSidebar(ref){
    document.getElementById("all").classList.toggle('nav__open');
  }

