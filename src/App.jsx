import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Experince from './Components/Experince'
import Project from './Components/project' 
import Contact from './Components/Contact'



function App() {
  return (
    <>
    
    <Navbar/>
    <section id='home'>
    <Home/>
    </section>
     
     <section id="about">
        <About />
      </section>
      <section id="experince">
        <Experince />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    
     

    </>
  )
}

export default App