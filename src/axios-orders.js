import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-60e6d.firebaseio.com/'
});

export default instance;