var ids = document.querySelectorAll('[id]');

Array.prototype.forEach.call( ids, function( el, i ) {

    if(el.id == "galleries_js")
    {
        el.onclick = function () {
            openModalGalleries(el.getAttribute("g_text"));
        }
    }
});

function openModalGalleries(value)
{
    let galleries_modal = document.getElementById('galleries_modal'); 
    let caption_galleries = document.getElementById('caption_galleries'); 
    let close_gallereies_modal = document.getElementById('close_gallereies_modal');

    galleries_modal.classList.remove('Anim-block-hide');
    galleries_modal.classList.add('Anim-block-show');
    galleries_modal.style.display = "flex";
    caption_galleries.innerHTML = "Galleries: " + value;
    close_gallereies_modal.onclick = function() {
        galleries_modal.classList.remove('Anim-block-show');
        galleries_modal.classList.add('Anim-block-hide');
        setTimeout(function() {
            galleries_modal.style.display = "none";
        },1000)
    }
}