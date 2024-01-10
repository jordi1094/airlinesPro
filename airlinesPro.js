const prompt = require('prompt-sync')();
let listadoVuelos = [
    OO1 = {origen: "barcelona", destino: "Islas Feroe", compañia: "Atlantic Airways", precio: "100€"}, 
    OO2 = {origen: "Roma", destino: "Lisboa", compañia: "vueling", precio: "70€"},
    OO3 = {origen: "Amsterdam", destino: "Berlín", compañia: "Air Europa", precio: "80€" },
    OO4 = {origen: "Luxemburgo", destino: "Tokyo", compañia: " Lufthansa", precio: "1080€"},
    OO5 = {origen: "Túnez", destino: "Rabat", compañia: "Easyjet", precio: "300€" }
]

function inicioSesion(){
let id = prompt('Hola , ¿Eres usuario o administrador? (USER / ADMIN)  ').toUpperCase();

    if (id = "USER"){
        function buscarVuelos(){
            let precioVueloUsiario = prompt('¿Qué precio tiene el vuelo que buscas?   ');


            let listadoVuelosBuscados = listadoVuelos.filter( vuelo => vuelo.precio === precioVueloUsiario);
            if (listadoVuelosBuscados.length === 0) {
                console.log("No hay vuelos por ese precio.");
                buscarVuelos();
            } else {
                console.log('Este es el listado de vuelo para ese precio:', listadoVuelosBuscados);
            }
            
            let nuevaBusqueda = prompt('¿Deseas realizar una nueva busqueda? SI / NO').toUpperCase();
                if(nuevaBusqueda === "SI"){
                    buscarVuelos();
                }else{
                    console.log("Muchas Gracias, ¡hasta la proxima!")
                };
        }if(id = "ADMIN"){
            let accion = prompt("¿Deseas ELIMINAR o AÑADIR un nuevo vuelo?   ").toUpperCase();
            if(accion === "ELIMINAR"){
                
            }if(accion === "AÑADIR"){

            };
        }else{
            console.log("Lo siento, no estas registrado como usuario o administrador");
            inicioSesion();
        }
    };
};
inicioSesion();