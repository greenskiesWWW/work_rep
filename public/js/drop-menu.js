let isOpen = false;

function openDrop(){
    if(isOpen == false)
    {
        isOpen = true;
        document.getElementById("drop_menu").setAttribute("style", "display: flex")

        let drop_menu = document.getElementById("drop_menu"); 

        try { drop_menu.classList.remove('Anim-block-show'); } catch (error) {}

        drop_menu.classList.remove('Anim-block-hide');
        drop_menu.classList.add('Anim-block-show');
    }        
    else
    {
        isOpen = false;
        // document.getElementById("drop_menu").setAttribute("style", "display: none")

        try { drop_menu.classList.remove('Anim-block-show'); } catch (error) {}

        drop_menu.classList.add('Anim-block-hide');
        setTimeout(function() {
            drop_menu.style.display = "none";
        },1000)
    } 
}        

