import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URI,
    withCredentials: false,
    headers: {
        'Authorization': `Token ${import.meta.env.VITE_TOKEN}`,
    },
});

export default apiClient;
