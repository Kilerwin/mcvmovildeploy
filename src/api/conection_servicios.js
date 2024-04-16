import axios from 'axios';


export const ConectionServices = () => {
  const getServices = async (id) => {
    try {
      const result = await axios.get(`http://mcvapi.azurewebsites.net/info_mascotas/historial/${id}`)
      return(result.data[0])
    } catch (error) {
      console.log('Error al traer los datos' + error)
      throw error; 
    }
  }

  return {
    getServices
  }
}













