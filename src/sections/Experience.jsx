
const experiences = [
  {
    period: "2024 - Present",
    role: "Student",
    school: "Adventist University of Central Africa (AUCA)",
    description: "Studying software engineering. I look forward to gaining more experience.",
    current: true
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Experience that <span className="font-serif italic font-normal text-white">I have.</span></h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">A timeline of my professional growth... still a beginner at this point in time.</p>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, index)=> (
            <div key={index}> 
              <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                <span className="text-sm text-primary font-medium">{exp.period}</span>
                <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                <p className="text-muted-foreground">{exp.school}</p>
                <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
              </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience