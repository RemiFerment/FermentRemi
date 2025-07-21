document.addEventListener("DOMContentLoaded", function () {
    let mouseX, mouseY;
    let ww = window.innerWidth;
    let wh = window.innerHeight;
    let traX, traY;

    document.addEventListener("mousemove", function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        traX = ((4 * mouseX) / 570) + 40;
        traY = ((4 * mouseY) / 570) + 50;
        console.log(traX);
        document.querySelector(".title").style.backgroundPosition = traX + "%" + traY + "%";
    });
});