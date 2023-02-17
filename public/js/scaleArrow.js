let isOpen = false;

function scaleArrow_details(){
    if(isOpen == false)
    {
        isOpen = true;
        document.getElementById("arrow_details").setAttribute("style", "transform: scale(-1);");
    }
    else
    {
        isOpen = false;
        document.getElementById("arrow_details").setAttribute("style", "transform: scale(1);");
    }
    
}
