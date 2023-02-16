var ids = document.querySelectorAll('[id]');

Array.prototype.forEach.call( ids, function( el, i ) {

    if(el.id == "frame")
    {
        el.onclick = function () {
            $(".menu-item-selected").toggleClass("menu-item-selected");
            $(".main-box-activity").toggleClass("main-box-activity");

            let frameID = $(this).attr("number_frame");

            $(this).addClass("menu-item-selected");
            $("#frame-"+frameID).addClass("main-box-activity");

        }
    }
});

function copy()
{
    let adressID = document.getElementById("address")
    let adress = adressID.innerHTML;
    let myInputAdress = document.getElementById("myInputAdress");

    myInputAdress.value = adress;
    myInputAdress.select();
    document.execCommand("copy");

    adressID.innerHTML = "Copied text to clipboard";

    setTimeout(function() {
        adressID.innerHTML = adress;
    },700)

}