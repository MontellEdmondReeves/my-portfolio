import { AlertCircle, CheckCircle, Send } from "lucide-react"
import Button from "../components/Button"
import { useState } from "react"
import emailJs from "@emailjs/browser"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({type: null, message:""});
  const handleSubmit = async (e) => {
    setIsLoading(true);
    setSubmitStatus({type: null, message:""});
    e.preventDefault();
    try{
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if(!serviceId || !templateId || !publicKey){
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailJs.send(serviceId, templateId, {name: formData.name, email: formData.email, message: formData.message}, publicKey);
      setSubmitStatus({type:"success", message:"Message sent successfully! I'll get back to you soon."});
      setFormData({name: "", email:"", message:""})
    } catch(err){
      console.error("EmailJS error: ", err);
      setSubmitStatus({type: "error", message: err.text || "Failed to send message. Please try again later"})
    } finally{
      setIsLoading(false)
    }
  }
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Let's build <span className="font-serif italic font-normal text-white">something great.</span></h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary.30 animate-fade-in animation-delay-300">
            <form action="" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={(e)=>{setFormData({...formData, name: e.target.value})}} className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" required placeholder="Your name"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input type="text" name="email" id="email" value={formData.email} onChange={(e)=>{setFormData({...formData, email: e.target.value})}} className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" required placeholder="your@email.com"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea rows={5} type="text" name="message" id="message" value={formData.message} onChange={(e)=>{setFormData({...formData, message: e.target.value})}} className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" required placeholder="Your Message"/>
              </div>
              <Button className="w-full" type="submit" disabled={isLoading}>{isLoading ? (<>Sending...</>) : (<>Send Message <Send className="w-5 h-5"/></>)}</Button>
              {submitStatus.type && (<div className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success" ? "bg-green-500/10 border border-green-500/20 text-green-500" : "bg-red-500/10 border border-red-500/20 text-red-500"}`}>
                {submitStatus.type === "success" ? (<CheckCircle className="w-5 h-5 shrink-0" />) : (<AlertCircle className="w-5 h-5 shrink-0" />)}
                <p className="text-sm">{submitStatus.message}</p>
              </div>)}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact