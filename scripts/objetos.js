var objecto = {}; // Object Literal Syntax 

var miAuto = {
    marca: "Toyota",  // key - value 
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
      return `Auto ${this.marca} , ${this.modelo} , ${this.annio}`;
  }
};

miAuto.annio
miAuto.modelo
miAuto.detallesDelAuto(); 

// Función constructora 
function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio;
}

var marcaAuto, modeloAuto, annioAuto;
var autos = [];
marcaAuto = prompt("Ingrese una marca de auto (mínimo tres caracteres - 0 para salir): ");
while(marcaAuto != 0) {
    modeloAuto = prompt("Ingrese un modelo de auto: ");
    annioAuto = prompt("Ingrese el annio para ese modelo de auto: ");
    autos.push(new auto(marcaAuto, modeloAuto, annioAuto));
    marcaAuto = prompt("Ingrese una marca de auto (mínimo tres caracteres - 0 para salir): ");
}
console.log(autos);

// Arrays
// filter, valida si algo es true or false dependiendo la condicion establecida en 
// la function de filter, luego crea un nuevo array con los elementos filtrados.

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
]

var articulosFiltrados = articulos.filter((articulo) => {
    return articulo.costo <= 500;
});

articulosFiltrados


// map: genera un array mapeando sólo el atributo que yo le menciono en la function de map.
var nombreArticulos = articulos.map((articulo) => {
    return articulo.nombre;
});
nombreArticulos
// Salida por consola:
// Array(7) [ "Bici", "TV", "Libro", "Celular", "Laptop", "Teclado", "Audifonos" ]

var encuentraArticulo = articulos.find((articulo) => {
    return articulo.nombre === 'Laptop';
});
encuentraArticulo

// some: devuelve true or false para una condición dada
var existenArticulosBaratos = articulos.some((articulo) => {
    return articulo.costo <= 700;
});
articulosBaratos

// Desestructurar objetos...
const persona = {
    nombre: 'Sacha',
    edad: 28,
    peso: 65
};

function imprimirNombreYEdad(persona) {
    var { nombre } = persona;
    var { edad } = persona;
    console.log('Hola, me llamo ' + nombre + ' y tengo ' + edad + ' años');
};

// Uso del Spread Operator ...
function cumpleannios(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
};

const personas = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'Pepe', edad: 22 },
    { nombre: 'Darío', edad: 24 },
];

var imprimoArray = (personas) => {
    for(i in personas) {
        console.log('Hola, me llamo ' + personas[i].nombre + ' y tengo ' + personas[i].edad + ' años');
    }
};

function imprimirSiEsMayorDeEdad(persona) {
    esMayor = persona.edad >= 18
    if(esMayor) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

// Utilizando arrow functions
const esMayorDeEdad = persona => persona.edad >= 18
const permitirAcceso = persona => !(persona.edad >= 18) ? console.log('DENEGADO') : console.log('Bienvenido!')

// Haciendo una simulación de incremento o decremento
// de peso de una persona a lo largo de 365 días
var pruebaPesoFinal = () => {
    const persona = {
        nombre: 'Sacha',
        edad: 28,
        peso: 65
    };
    const VARIANTE = 0.2
    const DIAS_DEL_ANNIO = 365
    const subirDePeso = (persona) => persona.peso += VARIANTE
    const bajarDePeso = (persona) => persona.peso -= VARIANTE

    for (var i = 1; i <= DIAS_DEL_ANNIO; i++) {
        var rando = Math.random()
        if (rando < 0.25) {
            subirDePeso(persona)
        } else if (rando < 0.5) {
            bajarDePeso(persona)
        }
    }
    console.log(persona.peso.toFixed(2))
}

// Haciendo otra simulación pero esta vez con un
// objetivo de bajar 3Kgs
var bajarTresKilos = () => {
    const persona = {
        nombre: 'Sacha',
        edad: 28,
        peso: 70
    };
    const VARIANTE = 0.2
    var dias_de_trabajo = 0
    const OBJETIVO = persona.peso - 3
    const subirDePeso = (persona) => persona.peso += VARIANTE
    const bajarDePeso = (persona) => persona.peso -= VARIANTE
    const comeMucho = () => Math.random() < 0.3
    const realizaDeporte = () => Math.random() < 0.4
    while (persona.peso > OBJETIVO) {
        if (comeMucho()) {
            subirDePeso(persona)
        } 
        if (realizaDeporte()) {
            bajarDePeso(persona)
        }
        dias_de_trabajo += 1
    }
    console.log(`La persona ${persona.nombre} logró su objetivo de peso en ${dias_de_trabajo} días.`)
}

//-------------------------------------------------------------
// Haciendo uso de arrays
// const esPesada = ({ peso }) => peso > 80
const esPesada = persona => persona.peso > 80
var personas = [sacha, alan, martin, dario, vicky, paula]
var personasPesadas = personas.filter(esPesada)

// Transformación de Arrays
// Funcion map(): devuelve un array con los datos modificados del array original
const pesoEnGramos = persona => {
    return {
        ...persona,
        peso: persona.peso * 1000
    }
}
var personasConPesoEnGramos = personas.map(pesoEnGramos)


// Reducer: trabaja con un acumulador, el cual se inicializa en la llamada a la función reduce.
const reducer = (acum, { cantDeLibros }) => acum + cantDeLibros
var totalDeLibros = personas.reduce(reducer, 0)


// Objetos
function Persona() {
    console.log('me instanciaron')
}
var nuevaPersona = new Persona()

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido} y ${this.soyAlto()}`)
}

Persona.prototype.soyAlto = function() {
    if(this.altura > 1.8) {
        return 'Soy alto'
    } else {
        return 'No soy alto'
    }
}    

var nuevaPersona2 = new Persona('Leo', 'Buessi', 1.9)
nuevaPersona2.saludar()


//-------------------------------------------
//----- Clases en JS - ECMA Script 2015 -----
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}

//-------------------------------------------

setTimeout(() => console.log('Hello world'), 3000)

function funcionIntrusa() {
    console.log('PATATA!!!')
}

function hacerPrimeraCosa() {
    funcionIntrusa()
    console.log('Hago una cosa')
}

function hacerSegundaCosa() {
    console.log('Hago otra cosa')
    for(let i=0;i<10000000;i++) {}
}

setTimeout(hacerSegundaCosa, 3000)
hacerPrimeraCosa()

// Usando swapi.dev - Star Wars API
fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then(data => console.log(`Hola, yo soy ${data.name}`))
    .catch( error=> console.error('Error: ', error))

