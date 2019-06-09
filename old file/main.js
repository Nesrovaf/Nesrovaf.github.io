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
        document.getElementsByClassName("toogle_m")[0].style.marginLeft = "50vw";
        document.getElementsByClassName("topbtn_m")[0].style.marginLeft = "50vw";
        document.getElementsByClassName("topbtn_m")[0].style.width = "50vw";
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
        document.getElementsByClassName("toogle_m")[0].style.marginLeft = "0vw";
        document.getElementsByClassName("topbtn_m")[0].style.marginLeft = "0vw";
        document.getElementsByClassName("topbtn_m")[0].style.width = "100%";
    }
    test = (test + 1) % 2
}



function change_baclground() {
    if (cir) {
        /*desktop*/
        let node;
        document.getElementsByClassName("circle")[0].style.left = "27px";
        document.getElementsByClassName("mid_layer")[0].style.width = "50px";
        document.getElementsByClassName("circle_m")[0].style.left = "27px";
        document.getElementsByClassName("mid_layer_m")[0].style.width = "50px";
        document.body.style.backgroundColor = "#FFFFFF";
        document.getElementById("slide").style.backgroundColor = "#222222";
        document.getElementsByClassName("circle")[0].style.backgroundColor = "#FFFFFF"
        document.getElementsByClassName("circle_m")[0].style.backgroundColor = "#FFFFFF";
        node = document.getElementsByClassName("droplink");
        for (let i = 0; i < node.length; i++) {
            node[i].style.color = "#ffffff";
        }
        document.getElementsByClassName("topbtn")[0].style.backgroundColor = "#222222";
        document.getElementById("btn_self").style.stroke = "#ffffff"
        document.getElementsByClassName("biography_title")[0].style.color = "#222222"
        document.getElementsByClassName("education_title")[0].style.color = "#222222"
        document.getElementsByClassName("con_word")[0].style.color = "#222222 ";
        document.getElementsByClassName("author")[0].style.color = "#222222";
        document.getElementsByClassName("author")[1].style.color = "#222222";
        document.getElementsByClassName("co-work")[0].style.color = "#222222";
        document.getElementsByClassName("co-work")[1].style.color = "#222222";
        /*mobile*/
        node = document.getElementsByClassName("droplink_m");
        for (let i = 0; i < node.length; i++) {
            node[i].style.color = "#222222";
        }
        document.getElementsByClassName("biography_title_m")[0].style.color = "#222222"
        document.getElementsByClassName("education_title_m")[0].style.color = "#222222"
        document.getElementsByClassName("con_word_m")[0].style.color = "#222222 ";
    }
    else {
        /*desktop*/
        let node;
        document.getElementsByClassName("circle")[0].style.left = "2.5px";
        document.getElementsByClassName("mid_layer")[0].style.width = "0px";
        document.getElementsByClassName("circle_m")[0].style.left = "2.5px";
        document.getElementsByClassName("mid_layer_m")[0].style.width = "0px";
        document.body.style.backgroundColor = "#222222";
        document.getElementById("slide").style.backgroundColor = "#FFFFFF";
        document.getElementsByClassName("circle")[0].style.backgroundColor = "#333333"
        document.getElementsByClassName("circle_m")[0].style.backgroundColor = "#333333"
        node = document.getElementsByClassName("droplink");
        for (let i = 0; i < node.length; i++) {
            node[i].style.color = "#222222";
        }
        document.getElementsByClassName("topbtn")[0].style.backgroundColor = "#ffffff";
        document.getElementById("btn_self").style.stroke = "#222222";
        document.getElementsByClassName("biography_title")[0].style.color = "#ffffff";
        document.getElementsByClassName("education_title")[0].style.color = "#ffffff";
        document.getElementsByClassName("con_word")[0].style.color = "#ffffff";
        document.getElementsByClassName("author")[0].style.color = "#ffffff";
        document.getElementsByClassName("author")[1].style.color = "#ffffff";
        
        document.getElementsByClassName("co-work")[0].style.color = "#ffffff";
        document.getElementsByClassName("co-work")[1].style.color = "#ffffff";
        /*mobile*/
        node = document.getElementsByClassName("droplink_m");
        for (let i = 0; i < node.length; i++) {
            node[i].style.color = "#ffffff";
        }
        document.getElementsByClassName("biography_title_m")[0].style.color = "#ffffff";
        document.getElementsByClassName("education_title_m")[0].style.color = "#ffffff";
        document.getElementsByClassName("con_word_m")[0].style.color = "#ffffff";
    }
    cir = !cir;
}

function idle() {
    var i = 0;
    document.onmousemove = reset;

    setInterval(function () {
        i++;
        if (i == 30) {
            alert("在本頁閒置30秒了囉");
            change_baclground();
        }
    }, 1000)

    function reset() {
        i = 0;
    }
}

