let estadolicuadora ="apagada";
let sonidoLicuadora =document.getElementById("blender-sound");
let botonLicuadora =document.getElementById("blender-buttton-sound");
let licuadora = document.getElementById("blender");

function controladora() {
    if (estadolicuadora == "apagada") {
        estadolicuadora = "encendido";
        hacerBrr();
        licuadora.classList.add("active");
        /* console.log("me prendiste"); */
    } else {
        estadolicuadora ="apagada";
        hacerBrr();
        licuadora.classList.remove("active");
        /* console.log("me apagaste"); */
    }
}

function hacerBrr() {
    if(sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}