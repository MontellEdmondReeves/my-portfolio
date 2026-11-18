import { ArrowUpRight, GitBranch } from "lucide-react"

const projects = [
  {
    title: "Pomodoro timer",
    description: "A 25-minute timer that helps with focus",
    image: "/projects/Pomodoro.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MontellEdmondReeves/Pomodoro_timer.git"
  },
  {
    title: "To-do App",
    description: "An app that lets you write down tasks and cross them off",
    image: "/projects/TodoApp.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MontellEdmondReeves/todo-app.git"
  },
  {
    title: "Random Colour Generator",
    description: "A list of randomly generated colours",
    image: "/projects/ColourGen.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MontellEdmondReeves/Color-palette-generator.git"
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute botton-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-delay-100 text-secondary-foreground">
            Projects that <span className="font-serif italic font-normal text-white"> I created</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">A selection of my recent works.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
              <div key={index} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{ animationDelay: `${(index + 1) * 100}ms`}}>
              <div className="relative overflow-hidden aspect-auto"> <img src={project.image} alt={project.title} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"/> 
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 </div></div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap items-center gap-2">{project.tags.map((tag, tagIdx) => (<span className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300" key={tagIdx}>{tag}</span>))}                 <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"> <GitBranch className="w-5 h-5"/></a>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
  )
}

export default Projects