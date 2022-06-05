class Cliente {
    constructor(id, nombre, saldo) {
        this.id = id;
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarCliente() {
        saludo.innerHTML = `<b>¡Hola, ${nombreIngresado}!</b>`
        localStorage.setItem("usuario", nombreIngresado);
    }

    getSaldoFormateado() {
        return "$ " + Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(this.saldo);
    }
}

const saludo = document.getElementById("saludo");


let nombreIngresado = prompt("ingrese su nombre");

let saldoPorDefecto = 30000;




const cliente1 = new Cliente(1, nombreIngresado, saldoPorDefecto);

cliente1.mostrarCliente();


class Contacto {

    constructor(nombre, cbu, referencia) {
        this.nombre = nombre;
        this.cbu = cbu;
        this.referencia = referencia;
    }
}


// Util
const setItemInLocalStorage = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
}

const getItemInLocalStorage = name => {
    return JSON.parse(localStorage.getItem(name));
}

const contactosObtenidos = getItemInLocalStorage("contactos");

let contactos;

// si los contactos obtenidos son diferentes de nulo, se los asigno. Sino le pongo una l vacio
if (contactosObtenidos) {
    contactos = contactosObtenidos;
} else {
    contactos = [];
}



//EXTRACCIONES 

const extraccion = () => {
    let opcionCorrecta = false;
    let dineroIngresado;
    while (opcionCorrecta === false) {
        dineroIngresado = Number(
            prompt(`¿Cuánto querés retirar ${cliente1.nombre} ? Solo puede ingresar:
                                          $2500 
                                          $4000 
                                          $10000`)
        );
        console.log(dineroIngresado);
        if (
            dineroIngresado === 2500 ||
            dineroIngresado === 4000 ||
            dineroIngresado === 10000
        ) {
            opcionCorrecta = true;
            cliente1.saldo -= dineroIngresado;
        } else {
            alert("El monto es invalido, pruebe de nuevo");
        }
    }
    const extraer = document.createElement("p");
    extraer.innerHTML = "Usted extrajo $" + dineroIngresado + ". Su saldo restante es " + cliente1.getSaldoFormateado();
    document.body.appendChild(extraer)
}

//TRANSFERENCIA

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

        if (saldoATransferir > cliente1.saldo) {
            alert(`El monto que desea transferir supera el saldo de su cuenta, el saldo maximo a transferir es de: ${cliente1.getSaldoFormateado()}`)
        }
        else {
            opcionIncorrecta = false
        }
    }

    const getTransferencia = document.createElement("p");
    getTransferencia.innerHTML = `Usted transfirió $ ${saldoATransferir} al CBU ${cbuDestinatario}`;
    document.body.appendChild(getTransferencia)

    cliente1.saldo -= saldoATransferir

}




// AGREGA CONTACTOS


const agregarContacto = () => {

    let nombre = prompt("Ingrese nombre")
    let cbu = prompt("Ingrese cbu")
    let referencia = prompt("Ingrese una referencia")

    let contacto = new Contacto(nombre, cbu, referencia);

    contactos.push(contacto);

    setItemInLocalStorage("contactos", contactos);
}




const listarContactos = () => {

    let listado = ``;

    for (let i = 0; i < contactos.length; i++) {

        let unContacto = contactos[i];
        const listado = document.createElement("p");

        listado.innerHTML = `Nombre: ${unContacto.nombre}
         CBU: ${unContacto.cbu}
         Referencia: ${unContacto.referencia}
         `
        document.body.appendChild(listado)
    }

}

//MENU DE CONTACTOS

const dibujarMenuDeContactos = () => {

    let seguir = true;

    while (seguir) {

        let opcion = prompt(`Ingrese opción: 
                  1. AGREGAR CONTACTO NUEVO
                  2. LISTAR CONTACTOS
                  3. VOLVER`);

        switch (opcion) {
            case "1":
                agregarContacto();
                break;
            case "2":
                listarContactos();
                break;
            case "3":
                seguir = false;
                break;
            default:
                alert("Ingrese una opción correcta");
                break;
        }

    }
}


//SE CREA EL MENU DESDE JS

const consultarSaldo = () => {
    const saldo = document.createElement("p");

    saldo.innerHTML = `Su saldo es: ${cliente1.getSaldoFormateado()}`;
    document.body.appendChild(saldo)
}

const menuNavegacion = () => {
    let opciones = [{ nombre: "CONSULTAR SALDO", metodo: consultarSaldo },
    { nombre: "EXTRACCION", metodo: extraccion },
    { nombre: "TRANSFERIR", metodo: transferir },
    { nombre: "CONTACTOS", metodo: dibujarMenuDeContactos }]

    opciones.forEach((opcion) => {

        const boton = document.createElement("button");

        boton.addEventListener("click", () => {
            opcion.metodo();
        })

        boton.innerHTML = opcion.nombre;
        document.body.appendChild(boton);
    });
}

menuNavegacion();

const divisor = () => {

    const g = document.createElement('div');
    g.className = 'divisor';


    const image = document.createElement("img");
    image.src = "./img/picture.png"

    document.body.appendChild(g)

    document.querySelector(".divisor").appendChild(image)

}

divisor();


