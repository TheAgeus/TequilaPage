const carrousel = document.querySelector(".carrusel")

let start = 0
let end = 0
let amount = 0

let isSelected = false


const time2 = {
    duration: 200,
    iteration: 1,
};

 
carrousel.addEventListener("mousemove", (e) => {
    if (window.innerWidth > 500) {
        if (isSelected) {
            if(e.pageX != 0) {
                console.log(`Start: ${start}  Current: ${e.pageX}  End: ${end}`)
                distancia = (start - e.pageX) * 0.1
                
                amount =  distancia + amount
                console.log(`Cantidad: ${amount}`)
                carrousel.scrollLeft = amount
                if (amount < -20) {
                    carrousel.animate({
                        transform: `translatex(${-amount}px)`
                    }, time2)
                    amount = 0
                }
                if (amount > carrousel.offsetWidth + 20) {
                    carrousel.animate({
                        transform: `translatex(-${amount - carrousel.offsetWidth}px)`
                    }, time2)
                    amount = carrousel.offsetWidth 
                }
            }
        }
    }
})

carrousel.addEventListener("drag", (e) => {
    if (window.innerWidth > 500) {
        console.log("DRAG")
        e.preventDefault()
    }
})
carrousel.addEventListener("dragstart", (e) => {
    if (window.innerWidth > 500) {
        console.log("DRAG START")
        e.preventDefault()
    }
})
carrousel.addEventListener("dragend", (e) => {
    if (window.innerWidth > 500) {
        console.log("DRAG END")
        e.preventDefault()
    }
})

carrousel.addEventListener("mousedown", (e) => {
    if (window.innerWidth > 500) { 
        console.log("MOUSE DOWN")
        isSelected = true
        start = e.pageX
    }
})

carrousel.addEventListener("mouseup", (e) => {
    if (window.innerWidth > 500) {
        console.log("MOUSE UP")
        isSelected = false
        end = e.pageX
    }
})

