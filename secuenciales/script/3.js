function velocidad() {
    let distancia = Number(document.getElementById('d').value);
    let tiempo = Number(document.getElementById('t').value);

    let velocidad = distancia / tiempo;

    swal(`La velocidad es de:`, `${velocidad} k/h`)
}