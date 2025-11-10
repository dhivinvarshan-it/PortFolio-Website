  import React, { useEffect, useState } from 'react'

  import { Hero } from './components/Hero'


  import './App.css';
  import emailjs from "@emailjs/browser";

  import Contact from './components/Contact';
  import Skill from './components/Skill';

  import Project from './components/Project';
import Navbars from './components/Navbars';



  







  const App = () => {

    const [isLoaded,setIsLoaded]=useState(false);
  useEffect(()=>{
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY_ID)
  },[])

    return (

      <div className={`app ${isLoaded ? "loaded" : ""}`}>
       
       <Navbars/>

      
        <Hero/>
        <Project/>
        <Skill/>
      
      
        <Contact/>
        
        
    
      <><p className='regards'> &copy; 2025 Dhivin PortFolio All Rights are reserved.</p>
      </>
      
      </div>

      
    )
  }

  export default App


