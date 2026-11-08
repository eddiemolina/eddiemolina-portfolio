import ScrollReveal from './ScrollReveal'
import tools from '../assets/tools.png'

const skillGroups = [
  {
    category: 'Operating Systems',
    skills: ['Linux', 'Windows', 'macOS'],
  },
  {
    category: 'Networking',
    skills: ['TCP/IP', 'DNS', 'DHCP', 'VLANs', 'VPN'],
  },
  {
    category: 'Security',
    skills: ['Security Fundamentals', 'System Hardening', 'HTB Academy'],
  },
  {
    category: 'Programming & Tools',
    skills: ['Python', 'Git', 'GitHub', 'Proxmox', 'VMware'],
  },
]

function Skills() {
  return (
    <section id="skills" className="story-section">
      <div className="grid lg:grid-cols-2 lg:gap-24 max-w-6xl mx-auto px-6 py-28">
        <div >
          <div className='lg:sticky lg:top-30'>
              <ScrollReveal>
                <p className="text-green-400 text-sm font-medium mb-3">
                  03 / TECHNICAL SKILLS
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  The tools I'm learning with.
                </h2>
                <p className="text-gray-400 mt-5 max-w-2xl leading-7">
                  Technologies and concepts I'm studying and applying through
                  coursework and personal projects.
                </p>
              </ScrollReveal>

                {/* Photo */}
                <ScrollReveal className='justify-items-center lg:justify-items-start '>
                  <div className="pt-10 max-w-sm
                  ">
                    <img
                      src={tools}
                      alt="Photo of Tools"
                      className="w-full aspect-[6/5] object-cover rounded-xl border border-gray-800
                      rounded-2xl border-4 border-slate-800 ring-2 ring-green-500 shadow-xl"
                    />
                  </div>
                </ScrollReveal>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-5 mt-12">
          {skillGroups.map((group, index) => (
            <ScrollReveal key={group.category} delay={index * 90}>
              <div className="h-full p-6 bg-gray-900 border border-gray-800 rounded-xl">
                <h3 className="text-white font-semibold mb-5">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded-lg
                      transition-shadow duration-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
