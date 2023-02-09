import {carrerasData} from "./data/carreras.js"

var data= carrerasData;

$(document).ready(
    function() {
        for ( let index=0; index<7 ; index ++) {

            mostrarCarreras(index);
                

            
        }
            
    }
);
    


function mostrarCarreras(index) {
    let div=$("<div></div>");
    div.addClass("ejemplos-carreras")
    let imagen = $("<img></img>");
    imagen.attr("src", data.carreras[index].img);
    imagen.addClass("img-carreras");
    div.append(imagen);

    let nombreCarreras=$("<p></p>");
    nombreCarreras.append(data.carreras[index].nombre);
    nombreCarreras.addClass("nombre");
    div.append(nombreCarreras);
    let ubicacionCarreras=$("<p></p>");
    ubicacionCarreras.append(data.carreras[index].ubicacion);
    ubicacionCarreras.addClass("ubicacion");
    div.append(ubicacionCarreras);

    $('#contenedorGeneral').append(div);  
}
    

