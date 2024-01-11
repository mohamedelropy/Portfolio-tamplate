let navbar = document.querySelector(".navbar");
let logo = document.querySelector(".navbar-brand");
let navbarlinks = document.querySelectorAll(".nav-item a");
let icon = document.querySelector("#icon .fa-solid");
let phone = document.querySelector(".btn");

document.addEventListener('scroll', function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
        navbar.style.position = "fixed";
        navbar.style.width = "90%";
        navbar.style.marginTop = "1%"
        navbar.style.marginLeft = "5%"
        navbar.style.marginRight = "5%"
        navbar.style.backgroundColor = "white";
        logo.style.color = "black";
        icon.style.backgroundColor = "#16B789";
        icon.style.color = "white";
        phone.style.color = "#16B789";
        phone.style.borderColor = "#16B789";

        for (let i = 0 ; i < navbarlinks.length; i++ ){
            navbarlinks[i].style.color = "black";
        }
    }else {
        navbar.style.position = "relative";
        navbar.style.backgroundColor = "transparent";
        navbar.style.width = "100%";
        navbar.style.marginTop = "0"
        navbar.style.marginLeft = "0"
        navbar.style.marginRight = "0"
        navbar.style.width = "100%";
        logo.style.color = "white";
        icon.style.backgroundColor = "white";
        icon.style.color = "black";
        phone.style.color = "white";
        phone.style.borderColor = "white";
        phone.style.backgroundColor = "transparent";


        for (let i = 0; i < navbarlinks.length; i++) {
            navbarlinks[i].style.color = "white";
        }
    }
})