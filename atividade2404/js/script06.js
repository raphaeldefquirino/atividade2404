function calcularFatorial() {
    const numero = parseInt(document.getElementById('numero').value);
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    document.getElementById('resultado').innerHTML = `Fatorial de ${numero}: ${fatorial}`;
}
