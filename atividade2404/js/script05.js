let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

function adivinharNumero() {
    const palpite = parseInt(document.getElementById('palpite').value);
    let resultado = "";

    if (palpite > numeroAleatorio) {
        resultado = "Tente um número menor!";
    } else if (palpite < numeroAleatorio) {
        resultado = "Tente um número maior!";
    } else {
        resultado = "Parabéns! Você acertou!";
        numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Novo número aleatório
    }

    document.getElementById('resultado').innerHTML = resultado;
}
