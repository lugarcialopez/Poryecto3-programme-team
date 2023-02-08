import {carrerasData} from "./data/carreras.js"

var data= carrerasData;
$(document).ready{
    function () {
        for (let index=0; index<20 ; index ++) {
            mostrarCarreras(index);
        }
    }
};

function mostrarCarreras(index) {
    let div=$("<div></div>");
    let imagen = $("<img></img>");
    imagen.sttr("src", data.pokemon[index].img);
    div.append(imagen);
    
}