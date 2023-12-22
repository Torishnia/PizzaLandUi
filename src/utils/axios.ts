import axios from 'axios';

// export const baseURL = 'https://pizza-land-api-dev-torishnia.vercel.app/';
export const baseURL = 'http://localhost:8080/';

const instance = axios.create({ baseURL });

export default instance;
