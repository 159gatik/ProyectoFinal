
const monedaExtranjera = () => {

    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
        .then((response) => response.json())
        .then((json) => mostrarDatos(json))

}

const mostrarDatos = (data) => {

    const div = document.getElementById("btnCotizacion");

    data.forEach(dolar => {
        const divPag = document.createElement("div")
        divPag.innerHTML = `
        <div class="card  mb-3" style="max-width: 18rem;">
        <div class="card-header text-center"> <h5> ${dolar.casa.nombre} </h5></div>
        <div class="card-body text-center ">
        <p class="card-text text-light ">VENTA ${dolar.casa.venta}</p>
        <p class="card-text text-light">COMPRA ${dolar.casa.compra}</p>
        <p class="card-text text-light">VARIACION ${dolar.casa.variacion}</p>
        </div>
        `
        div.appendChild(divPag)

    })

}