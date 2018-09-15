$(document).ready(function() {

    $("#mostrar").click(function() {
        $("#caja").fadeIn(1000)
            .animate({ borderRadius: "0%" }, 1000);
        //fadeTo(2000, 0.8) el 0.8 es la opacidad en la que acaba.
        $("#ocultar").show(100);
        $("#caja").animate({
            marginLeft: '500px',
            borderWidth: "50px",
            fontSize: "200%",
            height: '110px',
            paddingTop: "6%"
        }, 1000);
        $(this).hide();

    });

    $("#ocultar").click(function() {
        $("#caja").animate({
            marginLeft: '0px',
            borderWidth: "5px",
            fontSize: "100%",
            height: "50px",
            paddingTop: "0"
        }, 1000).
        animate({ borderRadius: "50%" }, 1000);
        $("#caja").fadeOut(1000); //.hide(2000); También están slideUp y slideDown.
        $("#mostrar").show(100);

        $(this).hide();
    });



    $("caja2").hide();
    var movimiento = 0;
    $("#boton").click(function() {
        $("#caja2").slideToggle(2000, function() {
            $("#caja2").css("margin-left", movimiento + "px");
            movimiento = movimiento + 10;
        }); //toggle('fast');
    });

});