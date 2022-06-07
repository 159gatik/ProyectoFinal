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
