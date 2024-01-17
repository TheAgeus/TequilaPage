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

})

carrousel.addEventListener("drag", (e) => {
    e.preventDefault()
})
carrousel.addEventListener("dragstart", (e) => {
    e.preventDefault()
})
carrousel.addEventListener("dragend", (e) => {
    e.preventDefault()
})

carrousel.addEventListener("mousedown", (e) => {

    isSelected = true
    start = e.pageX
})

carrousel.addEventListener("mouseup", (e) => {
    isSelected = false
    end = e.pageX
})
