function validarCPF() {
    const cpf = document.getElementById('cpf').value.replace(/\D/g, '');
    let resultado = "";

    if (cpf.length !== 11) {
        resultado = "CPF inválido! O CPF deve ter 11 números.";
    } else {
        // Lógica de validação do CPF (simplificada)
        const digitos = cpf.split('').map(Number);
        const verificarDigitos = (digitos) => {
            let soma = 0;
            let peso = digitos.length + 1;
            for (let i = 0; i < digitos.length; i++) {
                soma += digitos[i] * peso--;
            }
            let resto = soma % 11;
            return resto < 2 ? 0 : 11 - resto;
        };

        const primeiroDigito = verificarDigitos(digitos.slice(0, 9));
        const segundoDigito = verificarDigitos(digitos.slice(0, 10));

        if (digitos[9] === primeiroDigito && digitos[10] === segundoDigito) {
            resultado = "CPF Válido!";
        } else {
            resultado = "CPF Inválido!";
        }
    }

    document.getElementById('resultado').innerHTML = resultado;
}
