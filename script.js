const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const data = document.getElementById("data");
const email = document.getElementById("email");

function submeter() {
    console.log(verificarIdade());
    var resposta = document.getElementById("resposta");
    if (verificarIdade()) {
        resposta.innerText = "Parabéns, idade válida!"
    } else {
        resposta.innerText = "Infelizmente idade inválida!"
    }

}
function verificarIdade() {
    var idadeValue = idade.value.trim();
    return (idadeValue >= 12 && idadeValue <= 120) ? true : false;
}