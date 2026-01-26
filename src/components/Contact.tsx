import { motion } from "framer-motion";
import { MapPin, Send, Mail, CloudRain } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import ModelViewer from "./ModelViewer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [mapOpen, setMapOpen] = useState(false);
  const [weather, setWeather] = useState<{
    temp: number;
    description: string;
    icon: string;
  } | null>(null);

  useEffect(() => {
    // Fetch weather data for Stockholm
    fetch('https://wttr.in/Stockholm?format=j1')
      .then(res => res.json())
      .then(data => {
        const current = data.current_condition[0];
        setWeather({
          temp: Math.round(parseInt(current.temp_C)),
          description: current.weatherDesc[0].value,
          icon: current.weatherCode
        });
      })
      .catch(() => {
        // Fallback weather if API fails
        setWeather({ temp: 5, description: "Cloudy", icon: "116" });
      });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };
    
    // Validate fields
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
    }
    
    // If there are errors, set them and return
    if (newErrors.name || newErrors.email || newErrors.message) {
      setErrors(newErrors);
      return;
    }
    
    // Clear errors and submit
    setErrors({ name: "", email: "", message: "" });
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">04. Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'm always open to 
            discussing new opportunities and ideas.
          </p>
        </motion.div>

        {/* Contact Info Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 mb-12 max-w-5xl mx-auto px-6"
        >
          <button
            onClick={() => setMapOpen(true)}
            className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-primary/5 transition-colors cursor-pointer w-full"
          >
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <MapPin size={24} />
            </div>
            <div className="text-left flex-1">
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium">Stockholm, Sweden</p>
            </div>
            {weather && (
              <div className="flex items-center gap-2 text-sm">
                <CloudRain size={18} className="text-primary" />
                <span className="font-medium">{weather.temp}°C</span>
              </div>
            )}
          </button>
          
          <a 
            href="mailto:max.jacobsson1999@hotmail.com"
            className="flex items-center gap-4 glass rounded-xl p-4 w-full hover:bg-primary/5 transition-colors"
          >
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <Mail size={24} />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">max.jacobsson1999@hotmail.com</p>
            </div>
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* 3D Model */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="glass rounded-2xl p-8 w-full h-full flex flex-col">
              <div className="relative flex-1 rounded-xl overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900">
                {/* Animated stars background */}
                <div className="absolute inset-0">
                  {[...Array(50)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.7 + 0.3,
                      }}
                      animate={{
                        opacity: [Math.random() * 0.5 + 0.3, 1, Math.random() * 0.5 + 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
                <ModelViewer
                  src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                  alt="3D Model Showcase"
                  autoRotate={true}
                  cameraControls={true}
                  shadowIntensity="1"
                  disableZoom={false}
                  touchAction="pan-y"
                  className="rounded-xl relative z-10"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  className={`bg-secondary/50 border-border focus-visible:ring-0 focus-visible:ring-offset-0 ${
                    errors.name ? "border-red-500 focus:border-red-500" : "focus:border-primary"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  className={`bg-secondary/50 border-border focus-visible:ring-0 focus-visible:ring-offset-0 ${
                    errors.email ? "border-red-500 focus:border-red-500" : "focus:border-primary"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: "" });
                  }}
                  className={`bg-secondary/50 border-border focus-visible:ring-0 focus-visible:ring-offset-0 resize-none ${
                    errors.message ? "border-red-500 focus:border-red-500" : "focus:border-primary"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Modal */}
      <Dialog open={mapOpen} onOpenChange={setMapOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Stockholm, Sweden</DialogTitle>
            <DialogDescription>
              My current location
            </DialogDescription>
          </DialogHeader>
          <div className="rounded-xl overflow-hidden h-[500px] border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129622.17159954537!2d17.9216940794673!3d59.32623618964673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2s!4v1705860000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stockholm, Sweden"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;
