import axios from "axios";

const server = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

server.interceptors.request.use(
    (config) => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (userData) {
            config.headers["Authorization"] = `Bearer ${userData.token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default server;
