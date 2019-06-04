var test = 0;

function openside() {
    if (test % 2 == 0) {
        document.getElementById("slide").style.width = "50vw";
        document.getElementById("slide_btn").style.marginLeft = "50vw";
        document.getElementById("slide_btn").style.width = "50vw";
        document.getElementById("bio").style.width = "50vw";
        document.getElementById("bio").style.marginLeft = "50vw";
        document.getElementById("edu").style.width = "50vw";
        document.getElementById("edu").style.marginLeft = "50vw";
        document.getElementById("com").style.width = "50vw";
        document.getElementById("com").style.marginLeft = "50vw";
        document.getElementById("title_image").style.marginLeft = "50vw";
        document.getElementById("title_image").style.width = "50vw";
        document.getElementById("title_image").style.height = "300px";
    }
    else {
        document.getElementById("slide").style.width = "0vw";
        document.getElementById("slide_btn").style.marginLeft = "0vw";
        document.getElementById("slide_btn").style.width = "100vw";
        document.getElementById("edu").style.width = "100vw";
        document.getElementById("edu").style.marginLeft = "0vw";
        document.getElementById("bio").style.width = "100vw";
        document.getElementById("bio").style.marginLeft = "0vw";
        document.getElementById("com").style.width = "100vw";
        document.getElementById("com").style.marginLeft = "0vw";
        document.getElementById("bio").style.maxWidth = "100%";
        document.getElementById("edu").style.maxWidth = "100%";
        document.getElementById("com").style.maxWidth = "100%";
        document.getElementById("title_image").style.marginLeft = "0vw";
        document.getElementById("title_image").style.width = "100vw";
        document.getElementById("title_image").style.height = "400px";
    }
    test = (test + 1) % 2
}

function time() {
    var staytime=0;
    setInterval(function () {
        staytime++;
        // if(staytime==60){
        //     document.location.href="https://www.youtube.com/watch?v=Z3ZAGBL6UBA";
        // }
        var time = new Date();
        var h = time.getHours();
        var m = time.getMinutes();
        var s = time.getSeconds();
        document.getElementById("time").innerText = h + " : " + m + " : " + s;
    }, 10);
}
