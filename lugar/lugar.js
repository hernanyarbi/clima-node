const axios = require('axios');

let obtenerLugar = async (direccion) => {
  let encodedUrl = encodeURI(direccion);

  let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyD7bovKzBZ-HeTyjyI8aCuEdXER27dk3yQ`)

  if (res.data.status === "ZERO_RESULTS") {
    throw new Error(`No se encontraron datos para la ciudad ${direccion}`);
  }

  let location = res.data.results[0];
  let lat = location.geometry.location.lat;
  let lng = location.geometry.location.lng;

  return {
    direcicon: location.formatted_address,
    latitud: lat,
    longitud: lng
  }
} 

module.exports = {
  obtenerLugar
}