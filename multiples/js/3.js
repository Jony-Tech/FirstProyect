function operacion() {
    let num1 = Number(document.getElementById('1').value);
    let num2 = Number(document.getElementById('2').value);
    let opera = document.getElementById('o').value;

    switch (opera) {
        case 's':
        let suma = num1 + num2;
        swal('Suma', `${suma}`)
            break;
        case 'r':
        let resta = num1 - num2;
        swal('Resta', `${resta}`)
            break;
        case 'm':
        let multi = num1 * num2;
        swal('Multiplicación', `${multi}`)
            break;
        case 'd':
        let division = num1 / num2;
        swal('División', `${division}`)
            break;

        default:
            break;
    }
}