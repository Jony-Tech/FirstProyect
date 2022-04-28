function descuento() {
    let producto = document.getElementById('p').value;
    let precio = Number(document.getElementById('pr').value);

    if(producto == 'lacteo') {
        let descuento = precio * 0.1;
        let total = precio - descuento;

        swal(`Pagarás $ ${total}`, 'aplicando el 10% de descuento');
    } else{
        if(producto == 'carne') {
            let descuento = precio * 0.2;
            let total = precio - descuento;

            swal(`Pagarás $ ${total}`, 'aplicando el 20% de descuento');
        }
        else {
            let descuento = precio * 0.05;
            let total = precio - descuento;

            swal(`Pagarás $ ${total}`, 'aplicando el 5% de descuento');
        }
    }
}