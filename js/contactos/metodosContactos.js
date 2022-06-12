let menuDibujado;


document.getElementById("btnContacto").addEventListener("click", () => {

    const nombre = document.getElementById("nombre").value;
    const cbu = document.getElementById("cbu").value;
    const referencia = document.getElementById("referencia").value;

    contactos.push(new Contacto(nombre, cbu, referencia));

    setItemInLocalStorage("contactos", contactos);
    document.getElementById("contactoFormulario").style.display = 'none';
    document.querySelector(".divisor").appendChild("contactoFormulario")
})


const mostrarFormularioDeAgregarContacto = (nombre, cbu, referencia) => {

    document.getElementById("contactoFormulario").style.display = 'block';
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
        document.querySelector(".divisor").appendChild(listado)
    }

}


const dibujarMenuDeContactos = () => {

    if (!menuDibujado) {
        menuDibujado = true;

        let opciones = [
            { nombre: "AGREGAR CONTACTO NUEVO", metodo: mostrarFormularioDeAgregarContacto },
            { nombre: "LISTAR CONTACTOS", metodo: listarContactos }]

        opciones.forEach((opcion) => {

            const boton = document.createElement("button");
            boton.id = "btn_contact"
            boton.addEventListener("click", () => {
                opcion.metodo();
            })

            boton.innerHTML = opcion.nombre;

            document.getElementById("main").appendChild(boton)
            //document.body.appendChild(boton);
        });

    }

}
