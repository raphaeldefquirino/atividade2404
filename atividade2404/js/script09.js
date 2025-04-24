function converterHoras() {
    const horas = parseInt(document.getElementById('horas').value);
    const minutos = horas * 60;
    const segundos = minutos * 60;

    document.getElementById('resultado').innerHTML = `${horas} horas são equivalentes a ${minutos} minutos ou ${segundos} segundos.`;
}
