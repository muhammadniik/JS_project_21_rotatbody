const icon = document.querySelector(".icon");
let booly = true;
const contat = document.querySelector(".contant");
const navi = document.querySelector(".nav");

function rotatbody() {

    if (booly) {
        icon.style.transform = "rotate(-105deg)";
        booly = false;
    } else {
        icon.style.transform = "rotate(0deg)";
        booly = true;
    }

    contat.classList.toggle("active");
    navi.classList.toggle("active")

}