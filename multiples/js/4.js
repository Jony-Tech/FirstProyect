function cali() {
    let calif = document.getElementById('c').value;

    switch (calif) {
        case '10':
        swal('Excelente')
            break;
        case '9':
        swal('Muy bien')
            break;
        case '8':
        swal('Bien')
            break;
        case '7':
        swal('Suficiente')
            break;
        case '6':
        swal('Aprobado')
            break;
        case '5':
        swal('Reprobado')
            break;

        default:
            break;
    }
}