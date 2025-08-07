function contar() {
    const inicioInput = document.querySelector('#txti');
    const fimInput = document.querySelector('#txtf');
    const passosInput = document.querySelector('#txtp');
    const res = document.querySelector('#res');

    if (inicioInput.value.length == 0 || fimInput.value.length == 0 || passosInput.value.length == 0) {
        
        res.innerHTML = 'Impossível contar. Faltam dados!';
    } else {
        res.innerHTML = 'Counting: <br>';
        let inicio = Number(inicioInput.value);
        let fim = Number(fimInput.value);
        let passos = Number(passosInput.value);

        
        if (passos <= 0) {
            window.alert('Passo inválido! Considerando PASSO = 1');
            passos = 1;
        }

        if (inicio < fim) {
            // Contagem crescente
            for (let i = inicio; i <= fim; i += passos) { 
                res.innerHTML += ` ${i} 👉 `;
            }
        } else {
            // Contagem regressiva 
            for (let i = inicio; i >= fim; i -= passos) { 
                res.innerHTML += ` ${i} 👉 `;
            }
        }
        res.innerHTML += `🏁`;
    }
}