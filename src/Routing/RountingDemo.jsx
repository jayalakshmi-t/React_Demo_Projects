import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Team from './Team.jsx';
import NotFound from './NotFound.jsx';
import CurrentLocation from './CurrentLocation.jsx'
import Dashboard from './Dashboard.jsx';

function RoutingDemo(){

    return(
        <Router>
            <div className='max-h-screen bg-gray-100'>
                <nav className='bg-blue-600 p-4'>
                    <ul className='flex justify-center space-x-6'>
                        <li>
                            <Link className='text-white hover:text-yellow-300 font-medium transition duration-300' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='text-white hover:text-yellow-300 font-medium transition duration-300' to="/about">About</Link>
                        </li>
                        <li>
                            <Link className='text-white hover:text-yellow-300 font-medium transition duration-300' to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <CurrentLocation/>
            </div>
            <div className='container mx-auto py-8'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />}>
                <Route path='team' element={<Team />}/>
                </Route>
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
            </div>
        </Router>
    )

}

export default RoutingDemo;