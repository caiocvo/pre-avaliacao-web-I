const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const data = document.getElementById("data");
const email = document.getElementById("email");


const formulario = document.getElementById('form-cadastro');

formulario.reset();
formulario.addEventListener('submit', function(event){
    event.preventDefault();

    submeter();
});


function submeter() {
    console.log(verificarIdade());
    impressao2();
    var resposta = document.getElementById("resposta");
    if (verificarIdade()) {
        resposta.innerText = "Parabéns, idade válida!"
    } else {
        resposta.innerText = "Infelizmente idade inválida!"
    }

    console.log(document.getElementById("nome").value);
    //console.log(nome.value);
}
function verificarIdade() {
    var idadeValue = idade.value.trim();
    return (idadeValue >= 12 && idadeValue <= 120) ? true : false;
}

function verificarNome() {

}

//Essas duas funções de impressão verificam qual a dificuldade selecionada no radio
function impressao() {
    let facil = document.getElementById('facil').checked;
    let medio = document.getElementById('medio').checked;
    let dificil = document.getElementById('dificil').checked;

    console.log(facil);
    console.log(medio);
    console.log(dificil);
}

function impressao2() {
    let dificuldade = document.querySelector('input[name="dificuldade"]:checked');

    if (dificuldade === null) {
        alert('escolha uma dificuldade');
        return;
    }
}

