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




const getUsuarioInicial = () => {

    const usuarioObtenido = getItemInLocalStorage("usuarioRegistrado");

    let usuarioResultado;

    if (usuarioObtenido) {
        usuarioResultado = new Cliente(1, usuarioObtenido.nombre, usuarioObtenido.saldo);
        document.getElementById("main").style.display = 'block';
        document.getElementById("formLogin").style.display = 'none';
    }
    else {
        document.getElementById("formLogin").style.display = 'block';
    }

    return usuarioResultado;
}

let usuarioInicial = getUsuarioInicial();

