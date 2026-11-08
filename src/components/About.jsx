
import { GraduationCap, ShieldCheck, Server } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import portrait from '../assets/portrait.jpeg'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'B.S. Cybersecurity — University of South Florida 2028',
  },
  {
    icon: ShieldCheck,
    title: 'Security',
    description:
      'Exploring security operations, network security, and threat detection.',
  },
  {
    icon: Server,
    title: 'Infrastructure',
    description:
      'Learning through Linux, virtualization, networking, and homelab projects.',
  },
]

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-28"
    >

      <div className="grid lg:grid-cols-2 lg:gap-24 max-w-6xl mx-auto px-6">
        <div>
          <div className="lg:sticky lg:top-30">
            {/* Section heading */}
            <ScrollReveal>

                <div>
                    <p className="text-green-400 text-sm font-medium mb-3">
                      01 / ABOUT ME
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      A little about me.
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl leading-7">
                      The person behind the projects, and the path that brought me
                      to cybersecurity.
                    </p>

                    {/* Portrait and introduction */}
                    <ScrollReveal className='justify-items-center lg:justify-items-start '>
                      <div className="pt-10 max-w-sm
                      ">
                        <img
                          src={portrait}
                          alt="Portrait of Eddie"
                          className="w-full aspect-[6/5] object-cover rounded-xl  
                          rounded-2xl ring-2 ring-green-500 shadow-xl"
                        />
                      </div>
                    </ScrollReveal>

                </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid gap-12  items-start mt-12">

          <ScrollReveal delay={120}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                Hey, I'm Eddie.
              </h3>

              {/* About Me Writing */}

              <p className="text-gray-400 leading-8">
                I'm a cybersecurity student at the University of South Florida, but my path into
                technology wasn't exactly a straight line.
              </p>

              <p className="text-gray-400 leading-8">
                I started my college journey at Springfield Technical Community College, where I
                earned an associate degree in General Studies in 2018. After graduating, I
                stepped away from school for a few years. I wasn't entirely sure what direction
                I wanted to take, so I focused on working in customer-facing roles and gaining
                experience outside the classroom.
              </p>

              <p className="text-gray-400 leading-8">
                My interest in technology started unexpectedly. One day, I stumbled across a
                YouTube video about web development. I don't remember the video itself, but I
                remember what came next: looking up an online course and teaching myself how
                to build websites. I enrolled in a full-stack web development course through
                ZTM Academy, and I was hooked.
              </p>

              <p className="text-gray-400 leading-8">
                I enjoyed the problem-solving involved in development, the technical challenges,
                and the process of turning an idea into something functional. But I also wanted
                my work to have a broader purpose. Having spent years working directly with
                people, I wanted to find a way to combine my interest in technology with
                helping others.
              </p>

              <p className="text-gray-400 leading-8">
                That's what led me to cybersecurity.
              </p>

              <p className="text-gray-400 leading-8">
                The idea of understanding how technology works, identifying vulnerabilities,
                solving complex problems, and helping protect people and organizations felt
                like a natural fit.
              </p>

              <p className="text-gray-400 leading-8">
                Unlike some people who have known since childhood that they wanted to work in
                cybersecurity, I found my way here through a series of unexpected turns.
                Looking back, I'm glad I did.
              </p>

              <p className="text-gray-400 leading-8">
                Today, I'm pursuing my degree at USF while continuing to develop my technical
                skills through coursework, Hack The Box Academy, and hands-on projects in my
                personal homelab.
              </p>

              <p className="text-gray-400 leading-8">
                I'm still learning, experimenting, and figuring things out along the way.
                This portfolio is a place to document that journey and share what I build
                along the way.
              </p>
            </div>
            {/* Personal highlights */}
            <div className="grid md:grid-cols-1 gap-6 mt-16">
              {highlights.map((item, index) => {
                const Icon = item.icon

                return (
                  <ScrollReveal key={item.title} delay={index * 100}>
                    <div className="h-full p-6 bg-gray-900 border border-gray-800 
                      rounded-xl transition-shadow duration-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)]">
                      <Icon className="text-green-400 mb-5" size={28} />

                      <h3 className="text-white font-semibold text-lg">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 text-sm mt-3 leading-6">
                        {item.description}
                      </p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </ScrollReveal>
            

        </div>

      </div>
    </section>
  )
}

export default About
