import axios from 'axios';

export const baseURL = axios.create({
    // baseURL: "https://server.razcofoods.net/api/v1",
    baseURL: "http://192.168.10.185:5000/api/v1",
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
});
// export const ImageConfig = "https://server.razcofoods.net"
export const ImageConfig = "http://192.168.10.185:5000"