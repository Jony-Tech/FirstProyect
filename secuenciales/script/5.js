function cambio() {
    let billete = Number(document.getElementById('b').value);
    let pago = Number(document.getElementById('p').value);

    let cambio = billete - pago;

    swal('tu cambio es de:', `$ ${cambio}`)
}