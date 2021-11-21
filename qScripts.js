/*const col1 = 'FFB2E6'
const col2 = 'D972FF'
const col3 = '8447FF'
const col4 = '8CFFDA'
const col1 = 'FFFFE8'*/
const colors = ["e7fdf7","bff1e7","96dede","45b4ba","257571","ab03ba"]

let navbar = document.getElementById("navbar")
let activePg = document.getElementById("active")

let timeout
/*navbar.addEventListener("mouseover", (e) => {
    activePg
})*/

window.addEventListener("touchstart", (e) => {
    e.preventDefault()
    navbar.style.opacity = 1
    //navbar.style.transform = 'translateY(0%)'
    clearTimeout(timeout)
    timeout = setTimeout(() => {
        navbar.style.opacity = 0
        //navbar.style.transform = 'translateY(-100%)'
    }, 3000)
})

window.addEventListener("mousemove", (e) => {
    e.preventDefault()
    navbar.style.opacity = 1
    //navbar.style.transform = 'translateY(0%)'
    clearTimeout(timeout)
    timeout = setTimeout(() => {
        navbar.style.opacity = 0
        //navbar.style.transform = 'translateY(-100%)'
    }, 1000)
})