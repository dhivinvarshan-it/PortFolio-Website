  import React, { useEffect, useState } from 'react'

  import { Hero } from './components/Hero'


  import './App.css';
  import emailjs from "@emailjs/browser";

  import Contact from './components/Contact';
  import Skill from './components/Skill';

  import Project from './components/Project';
// import Navbar from './components/navbar';

  







  const App = () => {

    const [isLoaded,setIsLoaded]=useState(false);
  useEffect(()=>{
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY_ID)
  },[])

    return (

      <div className={`app ${isLoaded ? "loaded" : ""}`}>
        {/* <Navbar/> */}

      
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


