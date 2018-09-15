$(document).ready(function() {

    var caja = $("#caja");

    // MouseOver y MouseOut //
    /* 
    caja.mouseover(function() {
        $(this)
            .css("background", "#92c")
            .css("color", "white");

    });
    caja.mouseout(function() {
        $(this)
            .css("background", "#cfb5e4")
            .css("color", "black");
    });
    */
    caja.hover(function() { // Evento hover
        // over
        $(this)
            .css("background", "#92c")
            .css("color", "white");

    }, function() {
        // out
        $(this)
            .css("background", "#cfb5e4")
            .css("color", "black");
    });

    function bordeGordo() {
        $(this).css("border", "10px solid black");
    }

    function bordefino() {
        $(this).css("border", "1px solid black");
    }
    caja.hover(bordeGordo, bordefino);

    var pequenia = true;
    caja.click(function() { // Evento click
        if (pequenia) {
            $(this).animate({ width: '800px' }, "slow");
            pequenia = false;
        } else {
            $(this).animate({ width: '300px' }, "slow");
            pequenia = true;
        }
    });

    var sombra = false;
    caja.dblclick(function() { // Evento doble click
        if (!sombra) {
            $(this).css("box-shadow", "0 0 100px purple");
            sombra = true;
        } else {
            $(this).css("box-shadow", "0 0 0 white");
            sombra = false;
        }
    });

    var nombre = $('#nombre');
    var datos = $("#datos");
    nombre.focus(function() { // Evento focuus
        $(this).css("color", "blue");
    });
    nombre.blur(function() { // Evento blur
        $(this).css("color", "black");
    });
    nombre.keyup(function() { // Evento keyup
        datos.text($(this).val()).show();
    });

    datos.mousedown(function() { // Evento mousedown
        $(this).css("color", "white").css("background", "darkblue");
    });
    datos.mouseup(function() { // Evento mouseup 
        $(this).css("color", "black").css("background", "white");
    });

    $(document).mousemove(function() {
        $("#coor1").show();
        $("#coor2").text("X: " + event.clientX + " Y: " + event.clientY);

        $("#sigueme").css("margin-left", (event.clientX) - 307);
        $("#sigueme").css("margin-top", (event.clientY) - 122);
    });

    var numero_click = 1;
    $(document).click(function() {
        $("#coor3").show();
        $("#coor4").html(
            $("#coor4").html() +
            numero_click +
            " - " +
            "(X: " +
            event.clientX +
            ", Y: " +
            event.clientY +
            ")<br>"
        );
        numero_click++;
    });
});