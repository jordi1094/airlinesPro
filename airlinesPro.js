const prompt = require('prompt-sync')();

let listadoVuelos = [
    otgn = {codigo: "otgn", origen: "barcelona", destino: "Islas Feroe", compañia: "Atlantic Airways", precio: "100€"}, 
    tjgy = {indice: "tjgy", origen: "Roma", destino: "Lisboa", compañia: "vueling", precio: "70€"},
    ghsd = {indice: "ghsd", origen: "Amsterdam", destino: "Berlín", compañia: "Air Europa", precio: "80€" },
    jktr = {indice: "jktr",origen: "Luxemburgo", destino: "Tokyo", compañia: " Lufthansa", precio: "1080€"},
    kodc = {indice: "kodc",origen: "Túnez", destino: "Rabat", compañia: "Easyjet", precio: "300€" }
]
let despedida = "Muchas Gracias, ¡hasta la proxima!"


iniciarPrograma();
function iniciarPrograma(){
    let id = prompt('Hola , ¿Eres usuario o administrador? (USER / ADMIN)  ').toUpperCase();
    
        if (id === "USER"){
            buscarVuelos()
        }if(id === "ADMIN"){
            gestionVuelos()
        }if(id !== "USER" || id !== "ADMIN"){
                console.log("Lo siento, no estas registrado como usuario o administrador");
                console.log(despedida)
            };
};
function generarCadenaAleatoria(cadenaAleatoria) {
    cadenaAleatoria = Math.random().toString(36).substring(2, 6);
    return cadenaAleatoria;
};
function gestionVuelos(){
    let accion = prompt("¿Deseas ELIMINAR, AÑADIR, CONSULTAR un nuevo vuelo o SALIR?   ").toUpperCase();
    if(accion === "ELIMINAR"){
        console.log("Aqui tienes el listado de vuelos.")
        
        console.log(listadoVuelos)
        let codigoEliminar = prompt("Indica el codigo del vuelo a eliminar:   ");
        let indiceEliminar = listadoVuelos.indexOf( vuelo => vuelo.codigo === codigoEliminar)
        listadoVuelos.splice(indiceEliminar,1)
        console.log(listadoVuelos);
        gestionVuelos()
    }if(accion === "AÑADIR"){
        let cadenaAleatoria = ""
        generarCadenaAleatoria(cadenaAleatoria)
        cadenaAleatoria = cadenaAleatoria.toString()
        console.log(cadenaAleatoria)
        cadenaAleatoria = {};
        cadenaAleatoria["codigo"] = cadenaAleatoria
        cadenaAleatoria["origen"] = prompt("Indica el origen del vuelo:   ");
        cadenaAleatoria["destino"] = prompt("Indica el destino del vuelo:   ");
        cadenaAleatoria["compañia"] = prompt("Indica la compañia de vuelo:   ");
        cadenaAleatoria["precio"] = prompt("indica el precio del vuelo:   ")
        listadoVuelos.push(cadenaAleatoria)
        gestionVuelos()
    }if(accion === "CONSULTAR"){
        console.log(listadoVuelos)
        gestionVuelos()
    }if(accion === "SALIR") {
        console.log(despedida)
    } ;
};
function buscarVuelos(){
    let precioVueloUsiario = prompt('¿Qué precio tiene el vuelo que buscas?   ');


    let listadoVuelosBuscados = listadoVuelos.filter( vuelo => vuelo.precio === precioVueloUsiario);
    if (listadoVuelosBuscados.length === 0) {
        console.log("No hay vuelos por ese precio.");
        nuevaBusqueda();
        
    } else {
        console.log('Este es el listado de vuelo para ese precio:', listadoVuelosBuscados);
        nuevaBusqueda()
    }
    
   
};
function nuevaBusqueda(){
    let nuevaBusqueda = prompt('¿Deseas realizar una nueva busqueda? SI / NO    ').toUpperCase();
        if(nuevaBusqueda === "SI"){
            buscarVuelos();
        }else{
            console.log(despedida)
        };
};


