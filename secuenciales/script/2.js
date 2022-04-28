function total(){
    let producto = Number(document.getElementById('p').value);
    let descuento = Number(document.getElementById('d').value);

    let total = producto * descuento / 100;

    let precioFinal = producto - total;

    swal(`$ ${precioFinal}`,'es lo que pagarás')
}