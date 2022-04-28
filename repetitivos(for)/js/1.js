function elefante() {
    let n = Number(document.getElementById('n').value);
    let n1 = n
    let nn = document.getElementById('lis');

    for(let i = 1; i <= n1; i++){
        const lista = document.createElement('li');
        if(i === 1){
            lista.textContent = i + ' elefante se columpiaba sobre la tela de un araña, como veían que resistía fueron a llamar a otro elefante.';
        } else {
            lista.textContent = i + ' elefantes se columpiaba sobre la tela de un araña, como veían que resistía fueron a llamar a otro elefante.';
        }
        nn.appendChild(lista);
    }
}