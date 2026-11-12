
import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

// const links = ['About', 'Projects', 'Skills', 'Contact', 'Documentation']

const links = [
  {
    name: 'About',
    href: '#about', 
  },
  {
    name: 'Projects',
    href: '#projects', 
  },
  {
    name: 'Skills',
    href: '#skills', 
  },
  {
    name: 'Contact',
    href: '#contact', 
  },
  {
    name: 'Documentation',
    href: 'https://eddiemolina.github.io/projects/', 
  },
]

function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-sm ">
      <div className="max-w-6xl mx-auto px-6 h-30 flex items-center justify-between">

        <a href="#home" className="text-2xl font-bold text-white">
          {'< EM />'}<span className="text-6xl text-green-400"> .</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={`${link.href.toLowerCase()}`}
              className="text-sm text-gray-400 hover:text-green-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">

          <button
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Light mode' : 'Dark mode'}
            className="p-2 rounded-lg text-gray-400 hover:text-green-400 hover:bg-gray-800 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-green-400"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
