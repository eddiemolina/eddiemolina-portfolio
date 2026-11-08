
import { useEffect, useState } from 'react'

function Terminal() {
  const greeting = "console.log('Hello, I'm Eddie.')"
  const terminal = "eddie@portfolio ~>"
  const [typedText, setTypedText] = useState('')
  const [showRole, setShowRole] = useState(false)
  const [showFocus, setShowFocus] = useState(false)
  const [showExploring, setShowExploring] = useState(false)

  useEffect(() => {
    let index = 0

    const typingInterval = setInterval(() => {
      index++
      setTypedText(greeting.slice(0, index))

      if (index >= greeting.length) {
        clearInterval(typingInterval)
      }
    }, 65)

    const roleTimer = setTimeout(() => setShowRole(true), 1500)
    const focusTimer = setTimeout(() => setShowFocus(true), 1900)
    const exploringTimer = setTimeout(() => setShowExploring(true), 2400)

    return () => {
      clearInterval(typingInterval)
      clearTimeout(roleTimer)
      clearTimeout(focusTimer)
      clearTimeout(exploringTimer)
    }
  }, [])

  const reveal = (visible) =>
    `transition-all duration-700 ease-out ${
      visible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-2'
    }`

  return (
    <div className="w-full max-w-lg rounded-xl border border-gray-800 bg-[#080D16] 
      overflow-hidden shadow-2xl w-full rounded-2xl shadow-xl 
      animate-[hover_5s_ease-in-out_infinite] transform-gpu 
      will-change-transform transition-shadow duration-500 
      hover:shadow-[0_0_25px_rgba(34,197,94,0.2)]">

      {/* Window header */}
      <div className="flex items-center justify-between px-5 py-4 bg-gray-900/80 border-b border-gray-800">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        <span className="text-xs text-gray-500 font-mono">
          profile — terminal
        </span>

        <div className="w-10" />
      </div>

      {/* Terminal content */}
      <div className="p-7 font-mono min-h-[350px]">

        <p className="text-green-400 text-sm mb-6">
          {terminal}
        </p>

        <h2 className="text-2xl font-bold text-white font-sans min-h-9">
          {typedText}
          <span className="text-green-400 animate-pulse">▌</span>
        </h2>

        <div className={`mt-3 ${reveal(showRole)}`}>
          <p className="text-gray-400 text-sm font-sans">
            Cybersecurity Student · University of South Florida · May 2028
          </p>
        </div>

        <div className="border-t border-gray-800 my-7" />

        <div className="space-y-6">

          <div className={reveal(showFocus)}>
            <p className="text-green-400 text-xs tracking-wider mb-2">
              {terminal} currentFOCUS()
            </p>

            <p className="text-gray-300 text-sm font-sans italic">
              Cybersecurity · Infrastructure · Networking
            </p>
          </div>

          <div className={reveal(showExploring)}>
            <p className="text-green-400 text-xs tracking-wider mb-2">
              {terminal} exploring()
            </p>

            <p className="text-gray-300 text-sm font-sans italic">
              Linux · Python · Security Labs
            </p>
          </div>

        </div>

        <div className="border-t border-gray-800 my-7" />

        <p className="text-gray-500 text-xs">
          Thanks for visiting!{' '}
          <span className="text-green-400 animate-pulse">▌</span>
        </p>

      </div>
    </div>
  )
}

export default Terminal
