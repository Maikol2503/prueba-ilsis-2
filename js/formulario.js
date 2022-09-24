let botonNegocio = document.querySelector("#Negocio");
let formNegocio = document.querySelectorAll(".negocio");
let botonCasa = document.querySelector("#Casa");
let formCasa = document.querySelectorAll(".casa");


//casa
botonCasa.addEventListener("click", () =>
{
    for(let i = 0; i < formCasa.length; i++){
        formCasa[i].style.display = "block";
    }
});


//negocio
botonNegocio.addEventListener("click", () => 
{
    for(let i = 0; i < formNegocio.length; i++){
        formNegocio[i].style.display = "block";
    }
});


//funcion que resive como parametro el porcentaje q se desplaza el formulario y la clase del boton check
function desplazar(porcentaje,claseBoton)
{
    let form = document.querySelector(".form");
    let boton = document.querySelectorAll(claseBoton);

    for(let i = 0; i < boton.length; i++){
        boton[i].addEventListener("click", () => {
            form.style.marginLeft = porcentaje;

        });
    }
}

desplazar("-100%",".prg0");
desplazar("-200%",".prg1");
desplazar("-300%",".prg2");
desplazar("-400%",".prg3");
desplazar("-500%",".prg4");
desplazar("-600%",".prg5");
desplazar("-700%",".prg6");
desplazar("-800%",".prg7");
desplazar("-900%",".prg8");
// desplazar("-1000%",".prg9");


















