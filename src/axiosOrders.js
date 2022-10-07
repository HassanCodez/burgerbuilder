import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://bugerbuilder-d4722-default-rtdb.firebaseio.com/'
});

export default instance;