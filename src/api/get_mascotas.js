import axios from 'axios';


export const VerMascotas = () => {
  const verMascotas = async (cliente_id) =>{
    try {
    const result =  await axios.get(`http://mcvapi.azurewebsites.net/info_mascotas/${cliente_id}`); 
      return result.data

    } catch (error) {
      console.log('Error al traer los datos' + error)
      throw error; 
    }
  }

  return {
    verMascotas
  }
}
