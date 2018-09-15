$(document).ready(function() {

    loadLinks();

    $("#add_button").click(function() {
        $("#menu").prepend("<li><a href='https://" + $("#add_link").val() + "'></a></li>");
        $("#add_link").val('');
        loadLinks();
    });

    function loadLinks() {
        var elementos = $("a");
        elementos.each(function(index, element) {
            var enlace = $(this).attr("href");
            $(this).attr("title", enlace);
            $(this).text(enlace);
            $(this)[0].target = "blank"; /* $(this) es un array. El tiene el elemento 0 y _proto_ en el elemento 0 están tambien los attr.*/
            $(this).removeAttr("style");
        });
    }

});