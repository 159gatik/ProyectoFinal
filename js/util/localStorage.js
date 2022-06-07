const setItemInLocalStorage = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
}

const getItemInLocalStorage = name => {
    return JSON.parse(localStorage.getItem(name));
}

const contactosObtenidos = getItemInLocalStorage("contactos");

let contactos;


if (contactosObtenidos) {
    contactos = contactosObtenidos;
} else {
    contactos = [];
}