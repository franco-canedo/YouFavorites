import axios from 'axios';

const KEY = 'AIzaSyCfStKLs4sb-QHNsMhhI33Q-MLNrYC3b6Q';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})