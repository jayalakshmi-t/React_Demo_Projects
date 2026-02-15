import { useEffect, useState } from "react";
import "./ApiDemo.css";
import axios from "axios";

axios.interceptors.request.use(request => {
    console.log("Starting request: " ,request);
    return request;
}
);


axios.interceptors.response.use(response => {
    console.log("Response: " ,response);
    return response;
}
);

function ApiPostDemo(){

    const[data,setData] = useState();

const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
        title:"foo",
        body:"bar",
        userId:1
    };
    axios.post('https://jsonplaceholder.typicode.com/posts',newPost)
    .then(response => {
        console.log('New post added');
        setData([response.data]);
        console.log(response.data);
    })
}

return(
    <div>
        <h1> API POST DEMO </h1>
        <form onSubmit={handleSubmit}>
            <button type="submit">Add Post</button>
        </form>
    </div>
)
}

export default ApiPostDemo;

