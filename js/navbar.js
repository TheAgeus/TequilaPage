const navbar = document.querySelector(".navbar")
const navbar_button = document.querySelector(".navbar-button")
const navbar_items = document.querySelectorAll(".navbar-item")
const img_hero = document.querySelector(".hero-container").querySelector("img")

if (window.innerWidth < 1000) {
    img_hero.src = "/img/hero_small.png"
}

window.addEventListener("resize", (event) => {
    if (window.innerWidth < 1000) {

        img_hero.src = "/img/hero_small.png"

        navbar_items.forEach(e => {
            e.classList.remove("show")
            e.classList.add("hide")
        });
    } else {

        img_hero.src = "/img/hero6.png"

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
            navbar.classList.remove("nav-wt-bg")
            e.classList.remove("show")
            e.classList.add("hide")
        } else {
            navbar.classList.add("nav-wt-bg")
            e.classList.remove("hide")
            e.classList.add("show")
        }
    });
})

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    
    // Change background of navbar if scroll is not 0
    if (scroll > 0) {
        navbar.classList.add("nav-wt-bg")
    }
    else {
        navbar.classList.remove("nav-wt-bg")
    }
});