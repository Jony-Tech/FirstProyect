function n() {
    let n = Number(document.getElementById('n').value);
    let n1 = n
    let nn = document.getElementById('lis');
    let texto = document.getElementById('t').value;

    for(let i = 0; i < n1; i++){
        const lista = document.createElement('li');
        lista.textContent = texto;
        nn.appendChild(lista);
    }
}