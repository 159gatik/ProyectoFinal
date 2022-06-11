
// const extraccion = () => {
//     let opcionCorrecta = false;
//     let dineroIngresado;
//     while (opcionCorrecta === false) {
//         dineroIngresado = Number(
//             prompt(`¿Cuánto querés retirar ${usuarioInicial.nombre} ? Solo puede ingresar:
//                                           $2500 
//                                           $4000 
//                                           $10000`)
//         );
//         console.log(dineroIngresado);
//         if (
//             dineroIngresado === 2500 ||
//             dineroIngresado === 4000 ||
//             dineroIngresado === 10000
//         ) {
//             opcionCorrecta = true;
//             usuarioInicial.saldo -= dineroIngresado;
//         } else {
//             alert("El monto es invalido, pruebe de nuevo");
//         }
//     }
//     document.getElementById("dineroExtraido").addEventListener("click", () => {

//         let extraerDinero = document.getElementById("extraccionDinero").value;

//         document.getElementById("formExtraccion").style.display = 'block';

//     })
//     const extraer = document.createElement("p");
//     extraer.innerHTML = "Usted extrajo $" + dineroIngresado + ". Su saldo restante es " + usuarioInicial.getSaldoFormateado();
//     document.body.appendChild(extraer)
// }


document.getElementById("btnExtraer").addEventListener("click", () => {

    const dineroIngresado = document.getElementById("extraccionDinero").value;

    usuarioInicial.saldo -= dineroIngresado;


    Swal.fire(
        'Extracion exitosa!',
        "Usted extrajo $" + dineroIngresado + ". Su saldo restante es " + usuarioInicial.getSaldoFormateado(),
        'success'
    )


    document.getElementById("formExtraccion").style.display = 'none';

})




const transferir = () => {

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

}
