var texto = "";

var carro = {
    marca: "ford" ,
    cor: "vermelho",
    acelerar: function(){
        console.log("Vruuuuummm!");
    }
}

// function mensagem(item){
//     console.log("Olá, "+ item);
// }

// nomes.forEach(mensagem);

texto = document.querySelector("h1");
console.log(texto.textContent);

function recolheDados(evento) {
    evento.preventDefault();

    var nome = document.querySelector("#nome").value;
    var ano = document.querySelector("#ano").value;
    var idade = 2022-ano;

    console.log("Olá, " + nome + " vc tem " + idade + " anos de vida." );

    var bemvinda = document.querySelector("#bemvinda"); 
    var mensagem = "<p>Olá, " + nome + ",   vc nasceu " + idade + " anos atrás.</p>";
    bemvinda.innerHTML = mensagem;
}



var myForms = document.querySelector("#formulario");
myForms.addEventListener("submit",recolheDados);

