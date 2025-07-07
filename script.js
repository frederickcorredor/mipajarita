const btnNo = document.querySelector("#btn-random")

function moverAleatoriamente(btn) {
    btn.style.position = "absolute";
    btn.style.fontWeight = "bolder";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%"
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%"
}

btnNo.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target)
})

let diapo2 = () => {
    document.querySelector("#diapo1").style.display = "none";
    document.querySelector("#diapo2").style.display = "flex";
    document.querySelector("#diapo3").style.display = "none";
}

let diapo3 = () => {
    document.querySelector("#diapo1").style.display = "none";
    document.querySelector("#diapo2").style.display = "none";
    document.querySelector("#diapo3").style.display = "flex";
}
