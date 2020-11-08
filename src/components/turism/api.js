import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.melhoresdestinos.com.br/melhores-paises-visitar-2020.html'
});

export default api;

