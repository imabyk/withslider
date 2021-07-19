var slider_btn = document.getElementsByClassName('.slider-btn');
var slides = document.getElementsByClassName('.slide');
var l=0;
slider_btn[1].onClick = ()=>{
    l++;
    for(var i of slides){
        if(l==0){i.style.left="0px";}
        if(l==1){i.style.left="-740px";}
        if(l==2){i.style.left="-1480px";}
        if(l==3){i.style.left="-2220px";}
        if(l==4){i.style.left="-2960px";}
        if(l>4){l=4;}
    }
}