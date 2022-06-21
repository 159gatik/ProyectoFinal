const consultarSaldo = () => {

    const saldo = document.createElement("p");

    saldo.innerHTML = `Su saldo es: ${usuarioInicial.getSaldoFormateado()}`;

    document.querySelector("#main").appendChild(saldo)
}


document.getElementById("ingresarUsuario").addEventListener("click", () => {

    const user = document.getElementById("usuarioIngresado").value;
    const contraseña = document.getElementById("contraseña").value;

    const saldoPorDefecto = 30000;

    usuarioInicial = new Cliente(1, user, saldoPorDefecto);

    usuarioInicial.mostrarCliente()

    setItemInLocalStorage("usuarioRegistrado", usuarioInicial);

    document.getElementById("formLogin").style.display = 'none';
    document.getElementById("main").style.display = 'block';

})
