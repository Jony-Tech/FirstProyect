function edad(){
    let a = Number(document.getElementById('a').value);
    let ac = Number(document.getElementById('ac').value);

    let edad = ac - a;

    swal('Tienes: ', `${edad} años`)
}