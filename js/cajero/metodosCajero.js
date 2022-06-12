
document.getElementById("btnExtraer").addEventListener("click", () => {
    const dineroIngresado = document.getElementById("inputExtraccion").value;

    if (dineroIngresado > usuarioInicial.saldo) {
        Swal.fire({
            icon: 'error',
            title: 'Saldo insuficiente!',
            text: 'El monto ingresado es mayor al saldo que posee!'
        })
    }
    else if (dineroIngresado < 100) {
        Swal.fire({
            icon: 'error',
            title: 'Monto invalido!',
            text: 'El monto ingresado debe ser mayor a 100!'
        })
    }
    else {
        Swal.fire(
            'Extracion exitosa!',
            "Usted extrajo $" + dineroIngresado + ". Su saldo restante es " + usuarioInicial.getSaldoFormateado(),
            'success'
        )
        document.getElementById("formExtraccion").style.display = 'none';
        usuarioInicial.saldo -= dineroIngresado;
    }

})


const extraccion = () => {
    document.getElementById("formExtraccion").style.display = 'block';
}


document.getElementById("btnTransferir").addEventListener("click", () => {

    const ingresarCbu = document.getElementById("inputCbu").value;
    const ingresarDinero = document.getElementById("inputDinero").value;


    if (ingresarDinero > usuarioInicial.saldo) {
        Swal.fire({
            icon: 'error',
            title: 'Saldo insuficiente!',
            text: 'El monto ingresado es mayor al saldo que posee!'
        })

    }
    else if (ingresarDinero < 100) {
        Swal.fire({
            icon: 'error',
            title: 'Monto invalido!',
            text: 'El monto ingresado debe ser mayor a 100!'
        })
    }
    else {

        Swal.fire(
            'Transferencia exitosa!',
            "Usted transfirió $" + ingresarDinero + "al CBU " + ingresarCbu,
            'success'
        )

        document.getElementById("formTransferencia").style.display = 'none';
        usuarioInicial.saldo -= ingresarDinero;
    }

})

const transferir = () => {

    document.getElementById("formTransferencia").style.display = 'block';


}






/*const transferir = () => {

    let opcionIncorrectaCbu = true;
    let cbuDestinatario;

    while (opcionIncorrectaCbu) {

        cbuDestinatario = Number(prompt("Ingresar cbu"));

        if (!isNaN(cbuDestinatario) && cbuDestinatario.toString().length === 18) {
            opcionIncorrectaCbu = false
        } else {
            alert(`Ingrese un cbu valido (Tiene que ser 18 números)`)
        }
    }

    let opcionIncorrecta = true;
    let saldoATransferir;

    while (opcionIncorrecta) {

        saldoATransferir = Number(prompt("Ingresar saldo"));

        let permiso;

        if (saldoATransferir > usuarioInicial.saldo) {
            alert(`El monto que desea transferir supera el saldo de su cuenta, el saldo maximo a transferir es de: ${usuarioInicial.getSaldoFormateado()}`)
        }
        else {
            opcionIncorrecta = false
        }
    }

    const getTransferencia = document.createElement("p");
    getTransferencia.innerHTML = `Usted transfirió $ ${saldoATransferir} al CBU ${cbuDestinatario}`;
    document.body.appendChild(getTransferencia)

    usuarioInicial.saldo -= saldoATransferir

}*/
