var nomes = ["jorginho" , "Zezinho" , "Luizinho"];
var texto = "";

var carro = {
    marca: "ford" ,
    cor: "vermelho",
    acelerar: function(){
        console.log("Vruuuuummm!");
    }
}

function mensagem(item){
    console.log("Olá, "+ item);
}

nomes.forEach(mensagem);

texto = document.querySelector("h1");
console.log(texto.textContent);

const list = document.querySelector(".lista");
console.log(list.textContent);