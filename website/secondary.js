var test = 0;
var cir = true;
function openside() {
    if (test % 2 == 0) {
        document.getElementById("slide_m").style.width = "50vw";
        document.getElementById("slide_btn").style.marginLeft = "50vw";
        document.getElementById("slide_btn").style.width = "50vw";
        var art = document.getElementsByClassName('article_m');
        for (var i = 0; i < art.length; i++) {
            art[i].style.width = "50vw";
            art[i].style.marginLeft = "50vw";
        }
    }
    else {
        document.getElementById("slide_m").style.width = "0vw";
        document.getElementById("slide_btn").style.marginLeft = "0vw";
        document.getElementById("slide_btn").style.width = "100vw";
        var art = document.getElementsByClassName('article_m');
        for (var i = 0; i < art.length; i++) {
            art[i].style.width = "100vw";
            art[i].style.marginLeft = "0vw";
        }
    }
    test = (test + 1) % 2
}
function change_baclground() {
    if (cir) {
        let node;
        document.getElementsByClassName("circle")[0].style.left = "27px";
        document.getElementsByClassName("mid_layer")[0].style.width = "50px";
        document.body.style.backgroundColor = "#FFFFFF";
        document.getElementById("slide").style.backgroundColor = "#222222";
        document.getElementsByClassName("circle")[0].style.backgroundColor = "#FFFFFF"
    }
    else {
        document.getElementsByClassName("circle")[0].style.left = "2.5px";
        document.getElementsByClassName("mid_layer")[0].style.width = "0px";
        document.body.style.backgroundColor = "#222222";
        document.getElementById("slide").style.backgroundColor = "#FFFFFF";
        document.getElementsByClassName("circle")[0].style.backgroundColor = "#333333"
    }
    cir = !cir;
}