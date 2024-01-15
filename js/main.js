let navbar = document.querySelector(".navbar");
let logo = document.querySelector(".navbar-brand");
let navbarlinks = document.querySelectorAll(".nav-item a");
let activelink = document.querySelector(".navbar-nav .active");
let icon = document.querySelector("#icon .fa-solid");
let phone = document.querySelector(".btn");

document.addEventListener('scroll', function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
        navbar.style.position = "fixed";
        navbar.style.width = "90%";
        navbar.style.paddingTop = "0.5rem";
        navbar.style.marginTop = "1%";
        navbar.style.marginLeft = "5%";
        navbar.style.borderRadius = "0.5rem";
        navbar.style.marginRight = "5%";
        navbar.style.backgroundColor = "white";
        logo.style.color = "black";
        icon.style.backgroundColor = "#16B789";
        icon.style.color = "white";
        phone.style.color = "#16B789";
        phone.style.borderColor = "#16B789";

        for (let i = 0 ; i < navbarlinks.length; i++ ){
            navbarlinks[i].style.color = "black";
            navbarlinks[0].style.color = "#16B789";
        }
    }else {
        navbar.style.position = "relative";
        navbar.style.backgroundColor = "transparent";
        navbar.style.width = "100%";
        navbar.style.paddingTop = "1.5rem";
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
            navbarlinks[0].style.color = "#16B789";
        }
    }
})

let sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id")

        if (top >= offset && top < offset + height ) {
            navbarlinks.forEach(link => {
                link.classList.remove("active");
            })
            document.querySelector(`.nav-item a[href = '#${id}']`).classList.add('active');
        }
        
    } ) 
    
})

