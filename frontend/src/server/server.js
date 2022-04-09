import axios from "axios";

const Server = axios.create({
    baseUrl: "localhose:5000",
    timeout: 2000,
});

export default Server;
