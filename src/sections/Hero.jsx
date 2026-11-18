import { ArrowRight, Download } from "lucide-react"
import Button from "../components/Button"

const skills = ["React", "Tailwind CSS", "Git"]
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="Hero image"  className="w-full h-full object-cover opacity-40"/>
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"/>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />Software Engineer
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
              Solving <span className="text-primary glow-text">problems</span> one software at a <span className="font-serif italic font-normal text-white">time.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
              Hello. I'm Montell Edmond Reeves &mdash; a software engineer and problem-solver. I build softwares to solve issues.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
            <Button size="lg">Contact Me <ArrowRight className="w-5 h-5"/></Button>
            <a href="/My_resume.pdf" download="My_resume.pdf"><button className="relative bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-1000 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border" >
                    <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none download-cv-border"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center gap-2"><Download className="w-5 h-5"/> Download resume</span>
            </button>
            </a>
          </div>
          <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
          <span className="text-sm text-muted-foreground">Follow me: </span>
          {[{text: "Github", href:"https://github.com/MontellEdmondReeves"}, {text:"LinkedIn", href:"www.linkedin.com/in/montell-edmond-reeves-9a7993352"}].map((social, index) => (<a key={index} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300" href={social.href}> {social.text}</a>))}
        </div>
        </div>
        <div className="relative animate-fade-in animation-delay-300">
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
            <div className="relative glass rounded-3xl p-2 glow-border">
              <img src="/my-pic.jpg" alt="Montell Edmond Reeves" className="w-full aspect-4/5 object-cover rounded-2xl"></img>
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (<div key={index} className="shrink-0 px-8 p4-4"> <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span></div>))}
            </div>
          </div>
        </div>
      </div>
       </section>
  )
}

export default Hero