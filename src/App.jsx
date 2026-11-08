
import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? savedTheme === 'dark' : true
  })

  const toggleTheme = () => {
    setDarkMode((previous) => {
      const newTheme = !previous
      localStorage.setItem('theme', newTheme ? 'dark' : 'light')
      return newTheme
    })
  }

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
