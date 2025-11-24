import React from 'react'
import Navbar from './components/navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'

function App() {
 

  return (
    <div>
      <Navbar />
      
      <Hero/>
      <About/>
      <Projects/>
      <Achievements/>
      <Contact/>
    </div>
  )
}

export default App
