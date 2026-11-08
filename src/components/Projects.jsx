import { ArrowUpRight } from 'lucide-react'
import projects from '../data/projects'
import ScrollReveal from './ScrollReveal'
import lab from '../assets/lab.png'


function Projects() {
  return (
    <section id="projects" className="story-section">
      <div className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24">
          <div className="lg:sticky lg:top-30 lg:self-start">
            <ScrollReveal>
              <p className="text-green-400 text-sm font-medium mb-3">
                02 / PROJECTS
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Learning by building.
              </h2>
              <p className="text-gray-400 mt-5 leading-7">
                Practical exercises, technical experiments, and projects
                documenting my development as a cybersecurity professional.
              </p>
            </ScrollReveal>

            {/* Portrait and introduction */}
            <ScrollReveal className='justify-items-center lg:justify-items-start '>
              <div className="pt-10 max-w-sm
              ">
                <img
                  src={lab}
                  alt="Photo of Learning"
                  className="grid w-max aspect-[5/4] object-cover rounded-xl border border-gray-800
                  rounded-2xl border-4 border-slate-800 ring-2 ring-green-500 shadow-xl"
                />
              </div>
            </ScrollReveal>

          </div>

          <div className="space-y-5">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 80}>
                <article className="p-6 md:p-7 bg-gray-900 border border-gray-800 rounded-xl 
                transition-colors">
                  <div className="flex justify-between items-center gap-4 mb-6">
                    <span className="text-xs text-green-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {project.status}
                    </span>
                  </div>
                  <p>
                    {project.icon}
                  </p>

                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-7 mt-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300
                        transition-shadow duration-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-gray-800 mt-6 pt-5">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-slate-500 
                        relative inline-block rounded-full px-4 py-2 transition-all 
                        duration-300 hover:bg-green-500 hover:text-white hover:scale-110"
                      >
                        View Repository
                        <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      <span className="text-sm text-gray-500">
                        Documentation coming soon
                      </span>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
