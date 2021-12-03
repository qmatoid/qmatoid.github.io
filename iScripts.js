// code for randomly changing marquee tag movement speed
let marqInterID
const changeMarqSpeed = () => {
    let vMarqSpeed = Math.random() * 500;
    let hMarqSpeed = Math.random() * 500;
    document.getElementById('vMarq').setAttribute('scrollamount', vMarqSpeed)
    document.getElementById('hMarq').setAttribute('scrollamount', hMarqSpeed)
}
marqInterID = setInterval(changeMarqSpeed, 500)


// helper function for calculating distance
const dist = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
}

// helper function for calculating hypotenuse
const pytha = (l, w) => {
    return Math.sqrt(Math.pow(l, 2) + Math.pow(w, 2))
}

let qmatid = document.getElementById("qmatid")
// sets the minimum distance that the mouse should be to the center of the element to twice the radius of its circumscribed circle
let minDist = pytha(qmatid.clientHeight / 2, qmatid.clientWidth / 2) * 2
window.addEventListener("mousemove", (e) => {
    // updates qmatid position
    let qmatidRect = qmatid.getBoundingClientRect();
    let qmatidCent = [(qmatidRect.left + qmatidRect.right) / 2, (qmatidRect.top + qmatidRect.bottom) / 2]
    // detects if mouse gets too close to qmatid and moves the element in the direction the mouse is moving
    if (dist(qmatidCent[0], qmatidCent[1], e.clientX, e.clientY) < minDist) {
        // extra distance that qmatid can't travel or else it will go off the screen
        let extraX = 0
        let extraY = 0
        // if element will go off the screen vertically upwards
        if (qmatidRect.top + e.movementY < 0) {
            //console.log("up")
            extraY = qmatidRect.top + e.movementY
            qmatid.style.top = 0 + "px"
        // if element will go off the screen vertically downwards
        } else if (qmatidRect.bottom + e.movementY >= window.innerHeight) {
            //console.log("down")
            extraY = window.innerHeight - (qmatidRect.bottom + e.movementY)
            qmatid.style.top = Math.floor(window.innerHeight - qmatid.clientHeight) + "px"
        // default behavior, moves element in relation to mouse movement
        } else {
            qmatid.style.top = Math.floor(qmatidRect.top + e.movementY) + "px"
        }
        // if element will go off the screen horizontally left
        if (qmatidRect.left + e.movementX < 0) {
            extraX = qmatidRect.left + e.movementX
            qmatid.style.left = 0 + "px"
        // if element will go off the screen horizontally right
        } else if (qmatidRect.right + e.movementX >= window.innerWidth) {
            extraX = window.innerWidth - (qmatidRect.right + e.movementX)
            qmatid.style.left = Math.floor(window.innerWidth - qmatid.clientWidth - 1) + "px"
            console.log(qmatid.getBoundingClientRect().right)
            console.log(window.innerWidth)
            console.log(qmatid.clientWidth)
        // default behavior, moves element in relation to mouse movement
        } else {
            qmatid.style.left = Math.floor(qmatidRect.left + e.movementX) + "px"
        }
        
        qmatidRect = qmatid.getBoundingClientRect();
        // detects if the extra vertical movement from extraX will cause the element to go off the screen upwards
        if (qmatidRect.top - Math.abs(extraX) < 0) {
            qmatid.style.top = Math.floor(e.clientY + minDist - (qmatid.clientHeight / 2)) + "px"
        // detects if the extra vertical movement from extraX will cause the element to go off the screen downwards
        } else if (Math.floor(qmatidRect.bottom + Math.abs(extraX)) > window.innerHeight) {
            qmatid.style.top = Math.floor(e.clientY - (minDist + (qmatid.clientHeight / 2))) + "px"
        // if extra vertical movement from extraX is needed
        } else if (extraX < 0) {
            if (e.clientY > qmatidCent[1]) {
                qmatid.style.top = qmatidRect.top + extraX + "px"
            } else {
                qmatid.style.top = qmatidRect.top - extraX + "px"
            }
        }
        // detects if the extra horizontal movement from extraY will cause the element to go off the screen left
        if (qmatidRect.left - Math.abs(extraY) < 0) {
            qmatid.style.left = Math.floor(e.clientX + minDist - (qmatid.clientWidth / 2)) + "px"
        // detects if the extra horizontal movement from extraY will cause the element to go off the screen right
        } else if (Math.floor(qmatidRect.right + Math.abs(extraY)) > window.innerWidth) {
            qmatid.style.left = Math.floor(e.clientX - (minDist + (qmatid.clientWidth / 2))) + "px"
        } else if (extraY < 0) {
            if (e.clientX > qmatidCent[0]) {
                qmatid.style.left = Math.floor(qmatidRect.left + extraY) + "px"
            } else {
                qmatid.style.left = Math.floor(qmatidRect.left - extraY) + "px"
            }
        }


    }
})