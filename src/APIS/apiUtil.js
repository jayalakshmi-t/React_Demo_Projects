import axios from "axios";

const apiUtil = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com',
    headers : {
    'Content-Type' : 'application/json',
    'Authorization' : 'Bearer TOKEN'
    }
}

)


apiUtil.interceptors.request.use(request => {
    console.log("Starting request: " ,request);
    return request;
},
(config) => {
    const token = localStorage.getItem('token');
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
},
    (error) => {
        console.error('Request error ',error);
        return Promise.return(error);
    }
);


apiUtil.interceptors.response.use(response => {
    console.log("Response: " ,response);
    return response;
},
(error) => {
    if(error.response && error.response.status === 401){
        console.error("Unauthorized");
    }
}
);


export default apiUtil;
