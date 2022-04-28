function atencion() {
    let temperatura = Number(document.getElementById('t').value);

    if(temperatura >= 38) {
        swal('Advertencia', 'requiere atencion medica inmediata', 'warning');
    } else {
        if(temperatura <= 34){
            swal('Advertencia', 'requiere atencion medica inmediata', 'warning');
        } 
        else {
            swal('Todo bien', 'su temperatura es normal');
        }
    }
}