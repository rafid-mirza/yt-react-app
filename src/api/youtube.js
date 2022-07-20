import axios from 'axios';
const KEY = 'AIzaSyAOJIROfML4jTDCvgLCphOsK3QegYzTLD8';
export default axios.create({
    params: {
        part : 'snippet',
        key: KEY,
        type: 'video',
    },
    baseURL: 'https://www.googleapis.com/youtube/v3'
})