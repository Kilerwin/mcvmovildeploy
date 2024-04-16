import axios from "axios";

export const ConectionData = async () => {
    const dataGenero = async () => {
        try {
            const response = await axios.get(`http://mcvapi.azurewebsites.net/registro/genero`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    return {
        dataGenero
    }

}

export const DataTypeDoc = async () => {
    const dataDoc = async () => {
        try {
            const response = await axios.get(`http://mcvapi.azurewebsites.net/registro/documento`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    return {
        dataDoc
    }

}


