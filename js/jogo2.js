function sortear() {
    let numero = Math.floor(Math.random() * 10) + 1;

    document.getElementById("resultado").innerHTML = numero;
}

function limpar() {
    document.getElementById("resultado").innerHTML = "?";
}