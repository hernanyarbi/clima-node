const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('yargs').options({
    directions: {
        alias: 'd',
        desc: 'Pais pendejo',
        demand: true
    }
}).argv;

let obtenerClima = async (direction) => {
    try {
        let pais = await lugar.obtenerLugar(direction);
        let temp = await clima.obtenerTemperatura(pais.latitud, pais.longitud);

        return `La temperatura en ${direction} es de ${temp}C°`;
    } catch (error) {
        return `no se pudo comprobar la temperatura para ${direction}`;
    }
}


obtenerClima(argv.directions)
    .then(temp => console.log(temp))
    .catch(err => console.log(err))