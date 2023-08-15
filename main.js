// defino mi lista de contactos
let listaDeContactos = [
    primerContacto = {
        nombre: 'Yerlys',
        telefono: 300584990,
        direccion: 'barrio nariño'
    }

]
console.log(listaDeContactos);

// funcion que permite crear un nuevo contacto
function agregarContacto(segundoContacto) {
    for (let i = 0; i < listaDeContactos.length; i++) {
        if (segundoContacto.telefono != listaDeContactos[i].telefono) {
            listaDeContactos.push(segundoContacto);
        } else { console.log("el contacto ya existe, ingrese uno nuevo") }
    }
};

// funcion que permite mostrar por consola toda nuestra lista de contactps
function imprimirContactos() {
    for (var i = 0; i < listaDeContactos.length; i++) {
        console.log(listaDeContactos[i]);
    }
};
// funcion para actualizar un contacto existente en la lista
function actualizarContacto(indice, nuevoNombre) {
    if (indice !== -1) {
        listaDeContactos[indice].nombre = nuevoNombre;
    }
};

function mostrarUnContacto(telefono) {
    for (let i = 0; i < listaDeContactos.length; i++) {
        if (listaDeContactos[i].telefono == telefono) {
            console.log(listaDeContactos[i])
        }
    }
}

// Función para borrar un contacto existente de la lista
function borrarContacto(telefono) {
    for (let i = 0; i < listaDeContactos.length; i++) {
        if (listaDeContactos[i].telefono == telefono) {
            listaDeContactos.splice(i, 1);
        }
    }
};

const segundoContacto = new Object()
segundoContacto.nombre = 'Maria'
segundoContacto.telefono = 3204857664
segundoContacto.direccion = 'barrio nariño'
console.log("\nAgregando segundo contacto");
agregarContacto(segundoContacto);

console.log("Lista de contactos:");
imprimirContactos();

console.log("Contacto actualizado")
actualizarContacto(1, 'PAOLA')
console.log("Lista de contactos despues de actualizar:");
imprimirContactos();

console.log("mostrando un solo contacto")
mostrarUnContacto(3204857664)

console.log("\nBorrando contacto existente...");
borrarContacto(3204857664);
console.log("Contactos después de borrar un contacto:");
imprimirContactos();