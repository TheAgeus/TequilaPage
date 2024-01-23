const navbar = document.querySelector(".navbar")
const navbar_button = document.querySelector(".navbar-button")
const navbar_items = document.querySelectorAll(".navbar-item")

window.addEventListener("resize", (event) => {
    console.log("resize")
    if (window.innerWidth < 1000) {
        navbar_items.forEach(e => {
            e.classList.remove("show")
            e.classList.add("hide")
        });
    } else {
        navbar_items.forEach(e => {
            e.classList.remove("hide")
            e.classList.add("show")
        });
    }
});

if (window.innerWidth < 1000) {
    navbar_items.forEach(e => {
        e.classList.remove("show")
        e.classList.add("hide")
    });
}

navbar_button.addEventListener("click", (event) => {
    navbar_items.forEach(e => {
        if (e.classList.contains("show")) {
            e.classList.remove("show")
            e.classList.add("hide")
        } else {
            e.classList.remove("hide")
            e.classList.add("show")
        }
    });
})

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll)
    
    // Change background of navbar if scroll is not 0
    if (scroll > 0) {
        navbar.classList.add("nav-wt-bg")
    }
    else {
        navbar.classList.remove("nav-wt-bg")
    }
});