var ids = document.querySelectorAll('[id]');

Array.prototype.forEach.call( ids, function( el, i ) {

    if(el.id == "frame")
    {
        el.onclick = function () {
            $(".menu-item-selected").toggleClass("menu-item-selected");
            $(this).addClass("menu-item-selected");
        }
    }
});