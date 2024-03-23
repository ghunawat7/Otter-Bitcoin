window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    
    if(document.body.scrollTop>150 || document.documentElement.scrollTop>150)
    {
        document.getElementById("arrowbtn").style.display="inline";
        
    }
    else{
      document.getElementById("arrowbtn").style.display="none";

   }
}

window.onload=()=>show();
function show()
{
    xclock=new Date();
    hour.innerHTML=xclock.getHours();    
    minute.innerHTML=xclock.getMinutes();
    second.innerHTML=xclock.getSeconds();
    setTimeout("show()",10)
}