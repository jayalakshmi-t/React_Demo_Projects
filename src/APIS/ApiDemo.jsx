import { useEffect, useState } from "react";
import "./ApiDemo.css";
import axios from "axios";


function APIDemo(){

    const[data,setData] = useState({});
    const[posts,setPosts] = useState([]);
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
        }
        )
    },[])

     /*  1. Using fetch

     useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setPosts(json);
        setLoading(false);
        throw new Error("Something went wrong")
      })
      .catch(error => {
        console.log("Failed to load data " + error);
        setError(error);
        setLoading(false);
      }
       )
     

    },[]) */

    /* 2. Using Axios - It has to ne installed using npm */
       useEffect(() => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response);
        setPosts(response.data);
        setLoading(false);
        //throw new Error("Something went wrong")
      })
      .catch(error => {
        console.log("Failed to load data " + error);
        setError(error);
        setLoading(false);
      }
       )
     

    },[])

    /* 3. Using Axios - To get multiple get requests */
        useEffect(() => {
        axios.all([ axios.get('https://jsonplaceholder.typicode.com/posts'),
                axios.get('https://jsonplaceholder.typicode.com/users')
        ])
      .then(axios.spread((posts,users) => {
        console.log(posts);
        console.log(users);
      }))
      .catch(error => {
        console.log("Failed to load data " + error);
        setError(error);
      }
       )
     

    },[])


    if(loading){
        return (<p>loading ...</p>)
    }else if(error){
        return (<p>{error.message}</p>)
    }

    return(
        <div>
            <div>
                <ul>{data.userId}</ul>
                <ul>{data.id}</ul>
                <ul>{data.title}</ul>
                <ul>{data.completed ? "true" : "false"}</ul>
            </div>
            <ul>
                {
                    posts.map((post) => {
                        return (
                        <li key={post.id} className="post-container">
                            <p><strong>{post.title}</strong></p>
                            <p>{post.body}</p>
                        </li>
                        )
                    })
                }
            </ul>
        </div>

    )

}

export default APIDemo;