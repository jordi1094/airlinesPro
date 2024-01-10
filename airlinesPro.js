const prompt = require('prompt-sync')();
let listadoDeVuelos = [
    BcnFae = {origen: "barcelona", destino: "Islas Feroe", compañia: "Atlantic Airways", precio: "100€"}, 
    RomLis = {origen: "Roma", destino: "Lisboa", compañia: "vueling", precio: "70€"},
    AmsBer = {origen: "Amsterdam", destino: "Berlín", compañia: "Air Europa", precio: "80€" },
    LuxTyo = {origen: "Luxemburgo", destino: "Tokyo", compañia: " Lufthansa", precio: "1080€"},
    TunRba = {origen: "Túnez", destino: "Rabat", compañia: "Easyjet", precio: " 300€" }
]


let usuario = prompt('Hola , ¿qual es tu nombre de usuario?   ');

console.log('bienvenido ', usuario);

let precioVueloUsiario = prompt('¿Me puedes decir que precio tiene el vuelo que buscas?   ');

console.log(listadoDeVuelos[0].precio);