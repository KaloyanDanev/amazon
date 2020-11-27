import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_AXIOS
});

// baseURL: 'http://localhost:5001/fir-9a772/us-central1/api'

export default instance;