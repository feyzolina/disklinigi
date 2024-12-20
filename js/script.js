function yukari() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.querySelector("#up").style.display = "block";
    }
    else {
        document.querySelector("#up").style.display = "none";
    }
}
function pageup() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function toggleTumbolum() {
    var tumbolum = document.getElementById("tumbolumclick");
    if (tumbolum.style.display === "none" || tumbolum.style.display === "") {
        tumbolum.style.display = "block"; 
    } else {
        tumbolum.style.display = "none"; 
    }
}


