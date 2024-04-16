import axios from 'axios';


export const VerHospitalizaciones = () => {
  const verHospitalizaciones = async (petId) =>{
    try {
      const result =  await axios.get(`http://mcvapi.azurewebsites.net/hospitalizaciones/pet/${petId}`); 
      return result.data

    } catch (error) {
      console.log('Error al traer los datos' + error)
      throw error; 
    }
  }

  return {
    verHospitalizaciones
  }
}
