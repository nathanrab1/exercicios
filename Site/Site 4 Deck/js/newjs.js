var grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

var tarjetasTotal = grupoTarjetas.concat(grupoTarjetas);
grupoTarjetas.forEach(function(element) {
    console.log(element);
});

function parteTarjetas () {
    var mesa = document.querySelector("#mesa");

    mesa.innerHTML = "";

    
    tarjetasTotal.forEach(function(element) {
        var tarjeta = document.createElement("div");

        tarjeta.innerHTML=
            "<div class='tarjeta'>" +
            "<div class='tarjeta__contenido'>" +
            element +
            "</div>" +
            "</div>"
            ;
        
        mesa.appendChild(tarjeta);
    });

}

parteTarjetas();
