const consultarSaldo = () => {
    const saldo = document.createElement("p");

    saldo.innerHTML = `Su saldo es: ${usuarioInicial.getSaldoFormateado()}`;
    document.body.appendChild(saldo)
}


const getUsuarioInicial = () => {

    let nombreIngresado = prompt("ingrese su nombre");

    let saldoPorDefecto = 30000;

    const clienteRegistrado = new Cliente(1, nombreIngresado, saldoPorDefecto);

    // clienteRegistrado.mostrarCliente();


    return clienteRegistrado;
}