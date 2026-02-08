
import './SampleApp.css';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ProjectsList from './ProjectsList.jsx';

 function SampleApp(){
const person = {name : "John", age : 30, isMember:true};
const{name,age,isMember} = person; // Destructing of props
const hobbies = ['Reading','Cooking'];
const handleHobbyClick = (hobby) => {
  alert(hobby + " is clicked")
} 

const profile = {
  name:"Joe",
  profession:"Full stack professional",
 age:33,
 isMember:isMember,
hobbies:hobbies,
 onhobbyClick:handleHobbyClick
}

  return (
 <div className='App'>
   <Header name={name} 
          profession="DevOps professional" 
          age={age} 
          isMember={isMember} 
          hobbies={hobbies}
          onhobbyClick={handleHobbyClick}/>
 <Header {...profile}/>
  <About/>
  <ProjectsList/>
  <Contact/>
  <Footer/>
 </div>
  )
}

export default SampleApp;