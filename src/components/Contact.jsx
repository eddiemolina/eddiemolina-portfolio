import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="story-section h-lvh">
      <div className="lg:sticky lg:top-30 max-w-6xl mx-auto px-6 py-32">
        <ScrollReveal>
          <p className="text-green-400 text-sm font-medium mb-3">
            04 / CONTACT
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Let's Connect!
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl leading-7">
            I'm interested in connecting with cybersecurity professionals,
            learning from others in the industry, and exploring internship
            opportunities.
          </p>

          <div className="flex flex-wrap gap-6 mt-10">
            <a
              href="mailto:premier_havens1o@icloud.com"
              className="inline-flex items-center gap-2 rounded-lg
             bg-green-500 px-6 py-3
             font-semibold text-slate-950
             transition-all duration-300
             hover:bg-green-400 hover:shadow-lg
             hover:shadow-green-500/20"
            >
              <FaEnvelope></FaEnvelope>
              Get In Touch <ArrowUpRight size={18} />
            </a>
            
            <a
              href="https://github.com/eddiemolina"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-green-400"
            >
              <FaGithub></FaGithub>
              GitHub <ArrowUpRight size={16} />
             
            </a>

            <a
              href="https://www.linkedin.com/in/molina-eddie"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-green-400"
            >
              <FaLinkedin></FaLinkedin>
              LinkedIn <ArrowUpRight size={16} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Contact
