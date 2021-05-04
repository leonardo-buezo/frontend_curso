global.fetch = require("node-fetch");

const API_URL='https://swapi.dev/api/'
const PEOPLE_URL='people/:id'
// Usando swapi.dev - Star Wars API
obtenerPersonaje = (id) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}/`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(`Hola, yo soy ${data.name}`)
        });
}
var ids = [1, 2, 3, 4, 5]
var promesas = ids.map( id => obtenerPersonaje(id) )
Promise
    .all(promesas)
    .then( personajes => console.table(personajes) )
    .catch( reason => console.log(reason) );

// Ahora el mismo ejemplo utilizando async await ...
async function obtenemosPersonajesConAsynAwait() {
    var ids = [1, 2, 3, 4, 5]
    var promesas = ids.map( id => obtenerPersonaje(id) )
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch(reason) {
        console.log(reason)
    }
}


const API_URL='https://swapi.dev/api/'
const PEOPLE_URL='people/:id'
var obtenerPersonajeAwait = async (id) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}/`
    let response = await fetch(url)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let myJson = await response.json();
    return myJson
}
obtenerPersonajeAwait(1)
.then((myJson) => {
    for(let i=0;i<myJson.films.lenght;i++) {
        console.log(myJson.films[i])
    }
});

