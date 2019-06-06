var test = 0;

function openside(){
    if(test%2==0){
        document.getElementById("slide_m").style.width = "50vw";
        document.getElementById("slide_btn").style.marginLeft = "50vw";
        document.getElementById("slide_btn").style.width = "50vw";
        var art = document.getElementsByClassName('article_m');
        for(var i=0;i<art.length;i++){
            art[i].style.width="50vw";
            art[i].style.marginLeft="50vw";
        }
    }
    else{
        document.getElementById("slide_m").style.width = "0vw";
        document.getElementById("slide_btn").style.marginLeft = "0vw";
        document.getElementById("slide_btn").style.width = "100vw";
        var art = document.getElementsByClassName('article_m');
        for(var i=0;i<art.length;i++){
            art[i].style.width="100vw";
            art[i].style.marginLeft="0vw";
        }
    }
    test = (test+1)%2
}
