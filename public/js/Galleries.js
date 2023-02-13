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

$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() >= $(".nfts-block").offset().top - 800)
            $(".nfts-block").addClass("fade-in");
        if($(window).scrollTop() >= $(".galleries-box").offset().top - 800)
			$(".galleries-box").addClass("fade-in");
        if($(window).scrollTop() >= $(".top-seller").offset().top - 800)
			$(".top-seller").addClass("fade-in");
        if($(window).scrollTop() >= $(".lasted-blog-box").offset().top - 800)
			$(".lasted-blog-box").addClass("fade-in");
	});
});

// Slider
let slider = document.getElementById("slider-wrapper");
let countSlider = 0;
let currentSlider = 1;
let arraySliders = ["None"];

window.onload = function() {

    for (let i = 0; i < slider.childNodes.length; i++) {
        if(slider.childNodes[i].className == "slider-content")
        {
            arraySliders.push(slider.childNodes[i]);
            countSlider++;
        }
    }

}

document.getElementById("rightSlider").onclick = function () {

    if(currentSlider + 1 <= countSlider)
    {
        console.log("1");

        console.log(arraySliders[currentSlider]);

        arraySliders[currentSlider].style.display = "none";
        currentSlider++;
        arraySliders[currentSlider].style.display = "flex";
    }

}

document.getElementById("leftSlider").onclick = function () {

    if(currentSlider - 1 >= 1)
    {
        console.log("1");

        console.log(arraySliders[currentSlider]);

        arraySliders[currentSlider].style.display = "none";
        currentSlider--;
        arraySliders[currentSlider].style.display = "flex";
    }

}
