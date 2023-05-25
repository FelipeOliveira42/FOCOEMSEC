

import axios from "axios";


const api = axios.create({
  baseURL: "https://core-foco.herokuapp.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
    // "Authorization": "Token cb11026a7cf1daea54caf0eed3919658fc291444"
  }
});

export default api;


