function numerosPrimos() {
    const inicio = parseInt(document.getElementById('inicio').value);
    const fim = parseInt(document.getElementById('fim').value);
    let primos = [];

    for (let i = inicio; i <= fim; i++) {
        let isPrimo = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrimo = false;
                break;
            }
        }

        if (isPrimo && i > 1) {
            primos.push(i);
        }
    }

    document.getElementById('resultado').innerHTML = `Números primos entre ${inicio} e ${fim}: ${primos.join(", ")}`;
}
