var ids = document.querySelectorAll('[id]');

Array.prototype.forEach.call( ids, function( el, i ) {

    if(el.id == "galleries_js")
    {
        el.onclick = function () {
            openModalGalleries(el.getAttribute("target"), el.getAttribute("ctarget"));
        }
    }

    if(el.id == "img-card-clicker")
    {
        el.onclick = function () {
            changeImage(el, el.getAttribute("target"));
        }
    }
});

function changeImage(el, target)
{

    let img_target = document.getElementById("img-card-" + target); 

    let target_temp = img_target.src;
    let temp = el.src;

    el.src = target_temp;
    img_target.src = temp;

}

function openModalGalleries(target, ctarget)
{
    let galleries_modal = document.getElementById(target); 
    let close_gallereies_modal = document.getElementById(ctarget);

    try { galleries_modal.classList.remove('Anim-block-hide'); } catch (error) {}

    galleries_modal.classList.remove('Anim-block-hide');
    galleries_modal.classList.add('Anim-block-show');
    galleries_modal.style.display = "flex";
    close_gallereies_modal.onclick = function() {

        try { galleries_modal.classList.remove('Anim-block-show'); } catch (error) {}

        galleries_modal.classList.add('Anim-block-hide');
        setTimeout(function() {
            galleries_modal.style.display = "none";
        },1000)
    }
}