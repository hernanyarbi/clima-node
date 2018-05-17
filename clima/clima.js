const axios = require('axios');

let obtenerTemperatura = async (lat, lng) => {
    let temp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b6223017798b8c5fcdd546bbb6cfb4e6`)
    if (temp.data.cod === 400) {
        throw new Error('Error al cargar las coordenadas');
    }

    return temp.data.main.temp;
}
module.exports = {
    obtenerTemperatura
}