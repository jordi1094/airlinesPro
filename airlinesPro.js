const prompt = require('prompt-sync')();

let listadoVuelos = [
    otgn = {codigo: "otgn", origen: "barcelona", destino: "Islas Feroe", compañia: "Atlantic Airways", precio: "100€"}, 
    tjgy = {indice: "tjgy", origen: "Roma", destino: "Lisboa", compañia: "vueling", precio: "70€"},
    ghsd = {indice: "ghsd", origen: "Amsterdam", destino: "Berlín", compañia: "Air Europa", precio: "80€" },
    jktr = {indice: "jktr",origen: "Luxemburgo", destino: "Tokyo", compañia: " Lufthansa", precio: "1080€"},
    kodc = {indice: "kodc",origen: "Túnez", destino: "Rabat", compañia: "Easyjet", precio: "300€" }
]
const despedida = "Muchas Gracias, ¡hasta la proxima!"



let id = ""

function iniciarPrograma(id){
    id = prompt('Hola , ¿Quieres entrar como usuario o administrador? (USER / ADMIN)  ').toUpperCase();
    
        if (id === "USER"){
            buscarVuelos()
        }if(id === "ADMIN"){
            gestionVuelos()
        };
};

function generarCadenaAleatoria() {
    return cadenaAleatoria = Math.random().toString(36).substring(2, 6);
    
};
function gestionVuelos(){
    let accion = prompt("¿Deseas ELIMINAR, AÑADIR, CONSULTAR un vuelo?   ").toUpperCase();
    if(accion === "ELIMINAR"){
        console.log("Aqui tienes el listado de vuelos.")
        
        console.log(listadoVuelos)
        let codigoEliminar = prompt("Indica el codigo del vuelo a eliminar:   ");
        let indiceEliminar = listadoVuelos.indexOf( vuelo => vuelo.codigo === codigoEliminar)
        listadoVuelos.splice(indiceEliminar,1)
        console.log(listadoVuelos);
        salidaPrograma()
    }if(accion === "AÑADIR"){
        generarCadenaAleatoria()
        let codigo = cadenaAleatoria.toString()
        let nuevoVuelo = codigo
        nuevoVuelo = {}
        nuevoVuelo["codigo"] = codigo
        nuevoVuelo["origen"] = prompt("Indica el origen del vuelo:   ");
        nuevoVuelo["destino"] = prompt("Indica el destino del vuelo:   ");
        nuevoVuelo["compañia"] = prompt("Indica la compañia de vuelo:   ");
        nuevoVuelo["precio"] = prompt("indica el precio del vuelo:   ")
        listadoVuelos.push(nuevoVuelo)
        console.log(nuevoVuelo)
        salidaPrograma()
    }if(accion === "CONSULTAR"){
        console.log(listadoVuelos)
        salidaPrograma()
    }
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
            salidaPrograma()
        };
};
function salidaPrograma(id) {
    console.log("¿deseas salir de la aplicación?");
     console.log("si deseas realizar otra gestión o busqueda escribe CANCEL.") 
     let salida = prompt("Si deseas salir de la aplicación introduce CONFIRM.   ").toUpperCase;
    if(salida ==="CONFIRM") {
        console.log(despedida);
    }if(salida === "CANCEL"){
        
        iniciarPrograma(id);
        
    }
};


iniciarPrograma(id);

