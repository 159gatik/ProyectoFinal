
const menuNavegacion = () => {
    let opciones = [{ nombre: "CONSULTAR SALDO", metodo: consultarSaldo },
    { nombre: "EXTRACCION", metodo: transferir },
    { nombre: "TRANSFERIR", metodo: transferir },
    { nombre: "CONTACTOS", metodo: dibujarMenuDeContactos }]

    opciones.forEach((opcion) => {

        const boton = document.createElement("button");

        boton.id = "btn_id";
        boton.addEventListener("click", () => {
            opcion.metodo();
        })

        boton.innerHTML = opcion.nombre;
        document.getElementById("main").appendChild(boton);
    });
}

const divisorDeMenu = () => {

    const barra = document.createElement('div');
    barra.className = 'divisor';

    const image = document.createElement("img");
    image.src = "./img/picture.png"

    document.getElementById("main").appendChild(barra);

    document.querySelector(".divisor").appendChild(image)

}