function imprimir() {
    const numero = Number(document.getElementById('n').value);
    let n = numero;
    let nn = document.getElementById('lis');

    for(let i = 1; i<= n; i++){
        if(i % 2 === 0){
            const lista = document.createElement('li');
            lista.textContent = i + ' Es PAR';
            nn.appendChild(lista);
        }else {
            const lista = document.createElement('li');
            lista.textContent = i + ' Es IMPAR';
            nn.appendChild(lista);
        }
    }

}