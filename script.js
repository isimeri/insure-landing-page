const mobileNav = document.querySelector(".nav-menu-mobile");
const btnNav = document.querySelector(".menu-button");

btnNav.addEventListener("click", function(){
    mobileNav.classList.toggle("show");
})