var test = 0;
var cir = true;
function openside() {
    if (test % 2 == 0) {
        document.getElementById("slide_m").style.width = "50vw";
        document.getElementById("slide_btn").style.marginLeft = "50vw";
        document.getElementById("slide_btn").style.width = "50vw";
        document.getElementById("bio_m").style.width = "50vw";
        document.getElementById("bio_m").style.marginLeft = "50vw";
        document.getElementById("edu_m").style.width = "50vw";
        document.getElementById("edu_m").style.marginLeft = "50vw";
        document.getElementById("com_m").style.width = "50vw";
        document.getElementById("com_m").style.marginLeft = "50vw";
        document.getElementById("title_image_m").style.marginLeft = "50vw";
        document.getElementById("title_image_m").style.width = "50vw";
        document.getElementById("title_image_m").style.height = "300px";
    }
    else {
        document.getElementById("slide_m").style.width = "0vw";
        document.getElementById("slide_btn").style.marginLeft = "0vw";
        document.getElementById("slide_btn").style.width = "100vw";
        document.getElementById("edu_m").style.width = "100vw";
        document.getElementById("edu_m").style.marginLeft = "0vw";
        document.getElementById("bio_m").style.width = "100vw";
        document.getElementById("bio_m").style.marginLeft = "0vw";
        document.getElementById("com_m").style.width = "100vw";
        document.getElementById("com_m").style.marginLeft = "0vw";
        document.getElementById("bio_m").style.maxWidth = "100%";
        document.getElementById("edu_m").style.maxWidth = "100%";
        document.getElementById("com_m").style.maxWidth = "100%";
        document.getElementById("title_image_m").style.marginLeft = "0vw";
        document.getElementById("title_image_m").style.width = "100vw";
        document.getElementById("title_image_m").style.height = "400px";
    }
    test = (test + 1) % 2
}

function time() {
    var staytime = 0;
    setInterval(function () {
        staytime++;
        var time = new Date();
        var h = time.getHours();
        var m = time.getMinutes();
        var s = time.getSeconds();
        document.getElementById("time").innerText = h + " : " + m + " : " + s;
    }, 10);
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

