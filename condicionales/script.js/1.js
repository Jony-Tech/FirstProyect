function beca() {
    let promedio = Number(document.getElementById('p').value);
    let estado = document.getElementById('e').value;
    let edad = Number(document.getElementById('edd').value);

    if (promedio >= 8) {
        if (estado == 'Veracruz') {
            if(edad >= 18) {
                swal('Felicidades', 'su beca ha sido aceptada', 'success')
            }
            else {
                swal('Beca rechazada', 'No es mayor de edad', 'error');
            }

        } else {
            swal('Beca rechazada', 'No vive en el estado de Veracruz', 'error');
        }
    } else {
        swal('Beca rechazada', 'Tiene un promedio menor a 8', 'error');
    }
}