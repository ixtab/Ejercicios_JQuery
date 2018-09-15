$(document).ready(function() {
    var rojo = $("#rojo"); // selector por ID
    var azul = $("#azul").css("background", "darkblue")
        .css("color", "gray")
        .css("width", "200px")
        .css("text-align", "center");
    var verde = $("#verde");

    var grande = $(".grande").css("text-shadow", "2px 2px 5px red"); // Selector por Clase

    // console.log(rojo, azul, verde, grande.eq(0)); //Grande es un array pero al ponerlo como eq recoge los atributos de jquery, si no coge los atributos html
    rojo.css("color", "darkred");

    $("p").click(function() {
        var esto = $("this");
        if (esto.hasClass('borde')) {
            $("this").removeClass("borde");
        } else {
            $(this).addClass('borde');
        }
    });

    //Selectores de Atributo
    $('[title="videos"]').css("color", "red");
    $('[title!="videos"]').css("color", "green");

    $("h1").css("cursor", "pointer"); // Selector por  etiqueta

    $("h1").click(function() {
        $('a, p, [title="Probando"]').addClass("margen-superior"); // selector multiple
    })

    var caja = $(".caja");

    for (var a = 1; a <= 5; a++) {
        cosa = document.createElement("p");
        cosa.innerHTML = "Elemento " + a;
        caja.append(cosa);
    }

    var busqueda = $('#caja').find('.resaltado');
    console.log(busqueda);

    var busqueda2 = $('#elemento2').parent().parent().parent().find('[title="videos"]');
    //Hay que salir 3 elementos hacia atras para llegar al body.
    console.log(busqueda2);
    for (var i = 0; i < busqueda2.length; i++) {
        var texto = busqueda2.eq(i).text();
        busqueda2.eq(i).text("ir a " + texto);
    }

});