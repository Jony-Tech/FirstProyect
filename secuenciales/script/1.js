function cali() {
    let m = Number(document.getElementById('m').value);
    let e = Number(document.getElementById('e').value);
    let h = Number(document.getElementById('h').value);
    let f = Number(document.getElementById('f').value);
    let i = Number(document.getElementById('i').value);
    let p = Number(document.getElementById('p').value);

    let calcular = (m + e + h + f + i + p) / 6;
    let calcularFinal = calcular.toFixed(1);
    swal('Tu promedio es:',`${calcularFinal}`);
    
}