function tarea() {
    const numero = Number(document.getElementById('n').value);
    let n = numero;
    let nn = document.getElementById('lis');

    let i = 0;
    while(i < n) {
        const lista = document.createElement('li');
            lista.textContent = 'La programación es lo mejor';
            nn.appendChild(lista);

        i++;
    }

}