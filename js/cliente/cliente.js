class Cliente {

    constructor(id, nombre, saldo) {
        this.id = id;
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarCliente() {
        const saludarUsuario = document.getElementById("saludo");

        saludarUsuario.innerHTML = `<b>¡Hola, ${this.nombre}!</b>`
        localStorage.setItem("usuario", this.nombre);
    }

    getSaldoFormateado() {
        return "$ " + Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(this.saldo);
    }
}