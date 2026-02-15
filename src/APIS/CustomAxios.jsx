import { useEffect, useState } from "react";
import "./ApiDemo.css";
import axios from "axios";
import apiUtil from "./apiUtil";


function CustomAxios(){

    const[data,setData] = useState();

const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
        title:"foo",
        body:"bar",
        userId:1
    };
    apiUtil.post('/posts',newPost)
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

export default CustomAxios;

