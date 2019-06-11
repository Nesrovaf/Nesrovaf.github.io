var test = 0;
var cir = true;
function openside() {
    if (test % 2 == 0) {
        document.getElementById("slide_m").style.width = "50vw";
        document.getElementById("slide_btn").style.marginLeft = "50vw";
        document.getElementById("slide_btn").style.width = "47vw";
        var art = document.getElementsByClassName('article_m');
        for (var i = 0; i < art.length; i++) {
            art[i].style.width = "47vw";
            art[i].style.marginLeft = "50vw";
        }
        document.getElementsByClassName("toogle_m")[0].style.marginLeft = "50vw";
        document.getElementsByClassName("topbtn_m")[0].style.marginLeft = "50vw";
        document.getElementsByClassName("topbtn_m")[0].style.width = "47vw";
        

    }
    else {
        document.getElementById("slide_m").style.width = "0vw";
        document.getElementById("slide_btn").style.marginLeft = "0vw";
        document.getElementById("slide_btn").style.width = "100vw";
        var art = document.getElementsByClassName('article_m');
        for (var i = 0; i < art.length; i++) {
            art[i].style.width = "auto";
            art[i].style.marginLeft = "0vw";
        }
        document.getElementsByClassName("toogle_m")[0].style.marginLeft = "0vw";
        document.getElementsByClassName("topbtn_m")[0].style.marginLeft = "0vw";
        document.getElementsByClassName("topbtn_m")[0].style.width = "100%";
        
    }
    test = (test + 1) % 2;
}
function change_baclground() {
    if (cir) {
        let node;
        document.getElementsByClassName("circle")[0].style.left = "27px";
        document.getElementsByClassName("mid_layer")[0].style.width = "50px";
        document.getElementsByClassName("circle_m")[0].style.left = "27px";
        document.getElementsByClassName("mid_layer_m")[0].style.width = "50px";
        document.body.style.backgroundColor = "#FFFFFF";
        document.getElementById("slide").style.backgroundColor = "#222222";
        document.getElementById("slide_m").style.backgroundColor = "#ffffff";
        document.getElementsByClassName("circle")[0].style.backgroundColor = "#FFFFFF";
        node = document.getElementsByClassName("article_title_m");
        for (let i = 0; i < node.length; i++) {
            node[i].style.color = "#222222";
        }
        node = document.getElementsByClassName("droplink");
        for (let i = 0; i < node.length; i++) {
            node[i].style.color = "#ffffff";
        }
        node = document.getElementsByClassName("droplink_m");
        for (let i = 0; i < node.length; i++) {
            node[i].style.color = "#222222";
        }
        node = document.getElementsByClassName("article_title");
        for (let i = 0; i < node.length; i++) {
            node[i].style.color = "#222222";
        }

        document.getElementsByClassName("circle")[0].style.backgroundColor = "#FFFFFF"
        document.getElementsByClassName("circle_m")[0].style.backgroundColor = "#FFFFFF";

        node = document.getElementsByTagName("th");
        for (let i = 0; i < node.length; i++) {
            node[i].style.color = "#222222";
            node[i].style.borderColor = "#222222";
        }
        node = document.getElementsByTagName("td");
        for (let i = 0; i < node.length; i++) {
            node[i].style.color = "#222222";
            node[i].style.borderColor = "#222222";
        }
        node = document.getElementsByClassName("time_div");
        for (let i = 0; i < node.length; i++) {
            node[i].style.color = "#222222";
        }
    }
    else {
        let node;
        document.getElementsByClassName("circle")[0].style.left = "2.5px";
        document.getElementsByClassName("mid_layer")[0].style.width = "0px";
        document.getElementsByClassName("circle_m")[0].style.left = "2.5px";
        document.getElementsByClassName("mid_layer_m")[0].style.width = "0px";
        document.body.style.backgroundColor = "#222222";
        document.getElementById("slide").style.backgroundColor = "#FFFFFF";
        document.getElementsByClassName("circle")[0].style.backgroundColor = "#333333";
        document.getElementById("slide_m").style.backgroundColor = "#222222";
        document.getElementsByClassName("circle")[0].style.backgroundColor = "#333333";
        document.getElementsByClassName("circle_m")[0].style.backgroundColor = "#333333";
        node = document.getElementsByClassName("article_title_m");
        for (let i = 0; i < node.length; i++) {
            node[i].style.color = "#ffffff";
        }
        node = document.getElementsByClassName("droplink");
        for (let i = 0; i < node.length; i++) {
            node[i].style.color = "#222222";
        }
        node = document.getElementsByClassName("droplink_m");
        for (let i = 0; i < node.length; i++) {
            node[i].style.color = "#ffffff";
        }
        node = document.getElementsByClassName("article_title");
        for (let i = 0; i < node.length; i++) {
            node[i].style.color = "#ffffff ";
        }

        node = document.getElementsByTagName("th");
        for (let i = 0; i < node.length; i++) {
            node[i].style.color = "#ffffff";
            node[i].style.borderColor = "#ffffff"
        }
        node = document.getElementsByTagName("td");
        for (let i = 0; i < node.length; i++) {
            node[i].style.color = "#ffffff";
            node[i].style.borderColor = "#ffffff"
        }
        node = document.getElementsByClassName("time_div");
        for (let i = 0; i < node.length; i++) {
            node[i].style.color = "#ffffff";
        }
    }
    cir = !cir;
}

function time() {
    setInterval(function () {
        var time = new Date();
        var date = time.getDay();
        switch (date) {
            case 0:
                document.getElementById("time").innerHTML = "Today isn't Working day";
                document.getElementById("time_m").innerHTML = "Today isn't Working day";
                break;
            case 1:
                if (time.getHours() == 10 || time.getHours() == 11 || time.getHours() == 16 || time.getHours() == 18 || time.getHours() == 19 || time.getHours() == 20) {
                    document.getElementById("time").innerHTML = "The professor is in lecture";
                    document.getElementById("time_m").innerHTML = "The professor is in lecture";
                }
                else {
                    document.getElementById("time").innerHTML = "The professor isn't in lecture";
                    document.getElementById("time_m").innerHTML = "The professor isn't in lecture";
                }
                break;
            case 2:
                if (time.getHours() == 9    ) {
                    document.getElementById("time").innerHTML = "The professor is in lecture";
                    document.getElementById("time_m").innerHTML = "The professor is in lecture";
                }
                else {
                    document.getElementById("time").innerHTML = "The professor isn't in lecture";
                    document.getElementById("time_m").innerHTML = "The professor isn't in lecture";
                }
                break;
            case 3:
                if (time.getHours() == 10 || time.getHours() == 11 || time.getHours() == 15 || time.getHours() == 16 || time.getHours() == 17) {
                    document.getElementById("time").innerHTML = "The professor is in lecture";
                    document.getElementById("time_m").innerHTML = "The professor is in lecture";
                } else {
                    document.getElementById("time").innerHTML = "The professor isn't in lecture";
                    document.getElementById("time_m").innerHTML = "The professor isn't in lecture";
                }
                break;
            case 4:
                if (time.getHours() == 14 || time.getHours() == 15) {
                    document.getElementById("time").innerHTML = "The professor is in lecture";
                    document.getElementById("time_m").innerHTML = "The professor is in lecture";
                } else {
                    document.getElementById("time").innerHTML = "The professor isn't in lecture";
                    document.getElementById("time_m").innerHTML = "The professor isn't in lecture";
                }
                break;
            case 5:
                document.getElementById("time").innerHTML = "The professor isn't in lecture";
                document.getElementById("time_m").innerHTML = "The professor isn't in lecture";
                break;
            case 6:
                if (time.getHours() == 15 || time.getHours() == 16 || time.getHours() == 17) {
                    document.getElementById("time").innerHTML = "The professor is in lecture";
                    document.getElementById("time_m").innerHTML = "The professor is in lecture";
                } else {
                    document.getElementById("time").innerHTML = "The professor isn't in lecture";
                    document.getElementById("time_m").innerHTML = "The professor isn't in lecture";
                }
                break;
        }
    }, 10);
}