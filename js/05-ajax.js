$(document).ready(function() {
    var caja = $("#datos");
    // Load
    // $("#datos").load("https://reqres.in/api/users?page=2");

    // Get y Post
    caja.text("Cargando...");
    $.get("https://reqres.in/api/users", { delay: 1 },
        function(response_pag) {
            for (var i = 1; i <= response_pag.total_pages; i++) {
                $.get("https://reqres.in/api/users", { page: i },
                    function(response) {
                        for (var j = 0; j < response_pag.per_page; j++) {
                            caja.append("<img style='width: 60px;' src='" +
                                response.data[j].avatar +
                                "'>" +
                                "<br>" +
                                response.data[j].first_name +
                                " " +
                                response.data[j].last_name +
                                "<hr>"
                            );
                        }
                    });
            }
        }).done(function() {
        caja.html("");
    });

    $("#boton").click(function() {
        var name = $("#nombre").val();
        var job = $("#trabajo").val();
        var usuario = {
            "name": name, // Name podría ir sin comillas igual con job
            "job": job
        };
        $.post("https://reqres.in/api/users", usuario, function(response) {
            console.log(response);
        }).done(function() {
            alert("Usuario añadido");
        });
    });

});

var usuario = {
    email: "Pablo",
    password: "jornalero"
};
$.ajax({
    type: "POST", //  POST, GET, PUT,PATCH, DELETE
    url: "https://reqres.in/ap8/login", //"https://reqres.in/api/login"
    data: usuario,
    // dataType: "json", No suele ser necesarion
    // contentType: "aplication/jason", Tampoco necesario
    // complete:function(jqXHR, textStatus){...} Se llama cuando finaliza(success y error)
    beforeSend: function() {
        console.log("Accediendo, borrando, actualizando...")
    },
    success: function(response, textStatus, jqXHR) {
        {
            console.log(response);
            console.log(textStatus);
            console.log(jqXHR.status);
        }
    },
    error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown, "Ha ocurrido un error");
        } //,timeout: 100 Tiempo de espera.
});