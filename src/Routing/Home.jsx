import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    const handleLogin = () => {
        //navigate(-1);
        navigate("/dashboard");
    };
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h2 className='text-3xl font-bold text-blue-500'>Home</h2>
        <p className='text-gray-700 mt-4 text-lg'>Welcome to Home Page</p>
        <button className='text-white mt-4 text-lg bg-gray-500 p-4' onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Home;