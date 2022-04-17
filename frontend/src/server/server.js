import axios from "axios";

console.log(process.env.REACT_APP_BASE_URL || "http://localhost:5000/api");

const server = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:5000/api",
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
