function somarPares() {
    const limite = parseInt(document.getElementById('limite').value);
    let soma = 0;

    for (let i = 2; i <= limite; i += 2) {
        soma += i;
    }

    document.getElementById('resultado').innerHTML = `Soma dos números pares até ${limite}: ${soma}`;
}
