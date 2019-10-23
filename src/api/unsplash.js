import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d5b39169c9a15ca15fac846b831c304e02ee945462c946294d4690ea6ce6e4f8'
    }
})
