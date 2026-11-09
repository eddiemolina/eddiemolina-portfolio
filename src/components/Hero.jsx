
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Terminal from './Terminal'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Introduction */}
          <div>

            <div className="flex items-center gap-2 text-green-400 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Cybersecurity Student | USF 
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
              Eddie Molina
              <br />
              <span className="text-5xl text-green-400">
                <div className="flex flex-wrap items-center gap-3">
                  {[
                    {
                      name: "GitHub",
                      href: "https://github.com/eddiemolina",
                    },
                    {
                      name: "LinkedIn",
                      href: "https://linkedin.com/in/molina-eddie",
                    },
                    {
                      name: "Email",
                      href: "mailto:premier_havens1o@icloud.com",
                    },
                  ].map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target={link.name === "Email" ? undefined : "_blank"}
                      rel={link.name === "Email" ? undefined : "noopener noreferrer"}
                      className="inline-flex items-center justify-center rounded-lg
                        border border-gray-300 bg-white px-5 py-3
                        text-sm font-semibold text-gray-900
                        transition-all duration-200
                        hover:border-emerald-500 hover:text-emerald-600
                        hover:shadow-[0_0_12px_rgba(16,185,129,0.12)]
                        dark:border-white/20 dark:bg-transparent dark:text-gray-200
                        dark:hover:border-emerald-400 dark:hover:text-emerald-400
                        tracking-tight text-white leading-tight"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-gray-400 leading-relaxed">
              I'm a cybersecurity student at the University of South Florida with an 
              interest in network security, Linux, and infrastructure. Through hands-on labs 
              and personal projects, I explore how systems work, how they're secured, and how 
              to apply those concepts in practice.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-gray-950 font-semibold rounded-lg hover:bg-green-400 transition"
              >
                View Projects
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 text-white rounded-lg hover:border-green-400 transition"
              >
                About Me
              </a>

            </div>

          </div>

          {/* Terminal profile card */}
          <div className="flex justify-center lg:justify-end">
            <Terminal />
          </div>

        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 mt-20 text-sm text-gray-500 hover:text-green-400 transition"
        >
          Explore portfolio
          <ArrowDown size={16} />
        </a>

      </div>
    </section>
  )
}

export default Hero
