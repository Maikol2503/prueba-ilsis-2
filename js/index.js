window.addEventListener("load", function(){
    new Glider(document.querySelector(".cartas"),{
        slidesToShow: 3,
        slidesToScroll: 2,
        draggable: true,
        dots: '.indicadores',
        arrows: {
          prev: '.i',
          next: '.d'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 550,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.75
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 900,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.75
              }
            }
          ]
    })
})








let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides( indice+=n );
}

function posicionSlide(n){
    muestraSlides(indice=n);
}
setInterval(function tiempo(){
    muestraSlides(indice+=1)
}, 10000);
function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active1", "");
    }

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active1';

}