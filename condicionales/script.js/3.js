function prome() {
    let programacion = Number(document.getElementById('p').value);
    let calculo = Number(document.getElementById('c').value);
    let ingles = Number(document.getElementById('i').value);

    let promedio = (programacion + calculo + ingles) / 3;
    let promedioFinal = promedio.toFixed(1);

    if( promedio >= 70) {
        swal('Aprobaste', `Tienes un promedio de ${promedioFinal}`, 'success');
    } else {
        swal('Reprobaste', `tu promedio es ${promedioFinal}`, 'error');
    }
}