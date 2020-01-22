function mostrarTab(button){
    var i, contenido_divs, contenido_imagenes;

    contenido_divs = document.getElementsByClassName("tabs");
    for (i = 0; i < contenido_divs.length; i++) {
        contenido_divs[i].style.display = "none";
    }
    
    contenido_imagenes = document.getElementsByClassName("iconos");
    for (i = 0; i < contenido_imagenes.length; i++) {
        contenido_imagenes[i].style.display = "none";
    }

    document.getElementById(button.name).style.display = "block";
    document.getElementById(button.name+"_icono").style.display = "block";

}

function mostrarInformacionSeleccionada(opcion) {
    var i, contenido_opcion;
    contenido_opcion = document.getElementsByClassName("opcion");
    for (i = 0; i < contenido_opcion.length; i++) {
        contenido_opcion[i].style.display = "none";
    }

    document.getElementById(opcion.name).style.display = "block";
}

window.onload = function(){
    document.getElementById('inicio').click();
    document.getElementById('w7_icono').click();
}


function initMap() {
    var uluru = { lat: 7.087166, lng: -73.137299 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 5, center: uluru });
    var marker = new google.maps.Marker({ position: uluru, map: map });
}
