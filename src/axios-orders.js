import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-data.firebaseio.com/'
});

export default instance;