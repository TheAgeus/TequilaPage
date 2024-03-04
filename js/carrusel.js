const carrousel = document.querySelector(".carrusel-container")
const next_btn = document.querySelector(".button-next") 
const before_btn = document.querySelector(".button-before") 

start = 0

carrousel.addEventListener("mousedown", (e) => {
    start = e.pageX
})

carrousel.addEventListener("drag", (e) => {
    if(start - e.pageX > 0) {
        carrousel.scrollLeft += 10
    } else {
        carrousel.scrollLeft -= 10
    }
})

carrousel.addEventListener("touchend", (e) => {
    console.log(`reset start to 0`)
    start = 0
})

carrousel.addEventListener("touchmove", (e) => {
    if(start == 0 | start == NaN) {
        start = e.changedTouches[0].clientX
        console.log(`start set ${start}`)
    }
    if(start - e.changedTouches[0].clientX > 0) {
        carrousel.scrollLeft += 20
    } else {
        carrousel.scrollLeft -= 20
    }
})




/*
amount = 0
estado = ""

carrousel.addEventListener("mousedown", (e) => {
    width = carrousel.clientWidth
    pixel_clicked = e.pageX

    if(pixel_clicked > width/2) {
        if(estado == "izquierda"){
            amount = 0
            estado = "derecha"
        }
        amount += 20
        if (amount > width) {
            amount = width
        }
        console.log("Derecha " + amount)
    } 
    if (pixel_clicked < width/2) {
        if(estado == "derecha"){
            amount = 0
            estado = "izquierda"
        }
        amount -= 20
        if (amount < 0 ) {
            amount = 0
        }
        console.log("Izquierda " + amount)
    }

    carrousel.scrollLeft = amount
   
})
*/