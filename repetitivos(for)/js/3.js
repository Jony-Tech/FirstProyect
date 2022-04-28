function imprimir() {
    const numero = Number(document.getElementById('n').value);
    let n = numero;
    let nn = document.getElementById('lis');

    for(let i = 1; i<= 100; i++){
        if(i % n === 0){
            const lista = document.createElement('li');
            lista.textContent = i;
            nn.appendChild(lista);
        }
    }

}