import axios from 'axios';

const Api_URL = 'http://localhost:8000';

export const uploadFile = async (data) => {
    try {
     let response = await axios.post(`${Api_URL}/upload`, data);
     return response.data;
    } catch(error){
        console.error('Error while calling the api', error.message);

    }

}
