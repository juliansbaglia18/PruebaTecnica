/* ABRIR Y CERRAR BARRA LATERAL */
window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        
        if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
            document.body.classList.toggle('sb-sidenav-toggled');
        }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
});

var ventana;

var contImg1 = 0;
var contImg2 = 0;
var contImg3 = 0;
var contImg4 = 0;
var contImg5 = 0;

/* ABRIR IMAGENES IMPARES */
function abrirVentanaUno(){
    ventana=document.open("./images/torreEiffel.jpg","","width=800, height=400");

    if (ventana.confirm("¿Contar foto?") == true){
        contarImgUno();
    }
    else{
        console.log("ACA NO TIENE QUE ESTAR");
        closeWin();
    }
}

function abrirVentanaTres(){
    ventana=document.open("./images/murallaChina.jpg","","width=800, height=400");
    
    if (ventana.confirm("¿Contar foto?") == true){
        contarImgTres();
        console.log("ACA TIENE QUE ESTAR");
    }
    else{
        console.log("ACA NO TIENE QUE ESTAR");
        closeWin();
    }   

}

function abrirVentanaCinco(){
    ventana=document.open("./images/cataratasIguazu.jpg","","width=800, height=400");
    
    if (ventana.confirm("¿Contar foto?") == true){
        contarImgCinco();
        console.log("ACA TIENE QUE ESTAR");
    }
    else{
        console.log("ACA NO TIENE QUE ESTAR");
        closeWin();
    }
}

/* CERRAR VENTANA ACTUAL */
function closeWin(){
    ventana.close();
}

/* CONTADORES */
function contarImgUno(){
    contImg1++;
    document.getElementById("contImgUno").innerHTML = contImg1;
}
function contarImgDos(){
    contImg2++;
    document.getElementById("contImgDos").innerHTML = contImg2;
}
function contarImgTres(){
    contImg3++;
    document.getElementById("contImgTres").innerHTML = contImg3;
}
function contarImgCuatro(){
    contImg4++;
    document.getElementById("contImgCuatro").innerHTML = contImg4;
}
function contarImgCinco(){
    contImg5++;
    document.getElementById("contImgCinco").innerHTML = contImg5;
}

/* TRAER DATOS CON AJAX */
document.querySelector("#btnAjax").addEventListener("click", mostrarTextoAjax);

function mostrarTextoAjax(){
    const xhttp = new XMLHttpRequest();
    method = 'GET';
    url = 'home.json';

    xhttp.open(method, url, true);

    xhttp.onload = function(){
        if(this.status === 200){
            document.querySelector("#textarea").innerHTML = JSON.parse(this.responseText).texto;
        }else{
            alert("Algo salió mal");
        }
    }

    xhttp.send();
}