function imprimir() {
    const carrito = [
        {nombre: 'Televisor de 90"'},
        {nombre: 'Celular Xiaomi'},
        {nombre: 'Teclado'},
        {nombre: 'Procesador Ryzen 7'},
        {nombre: 'Memoria Ram'},
        {nombre: 'Camara web'},
        {nombre: 'Microfono'},
        {nombre: 'Monitor Curvo'},
        {nombre: 'Silla gamer'},
        {nombre: 'Escritorio'},
        {nombre: 'Bocinas'},
        {nombre: 'Audifonos'}

    ]


    const numero = Number(document.getElementById('n').value);
    let n = numero;
    let nn = document.getElementById('lis');

    for(let i = 0; i<= n; i++){
        const lista = document.createElement('li');
            lista.textContent = carrito[i].nombre;
            nn.appendChild(lista);
    } 

}
