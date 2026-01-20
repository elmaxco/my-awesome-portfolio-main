import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's work together</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently available for freelance work and full-time opportunities. 
                If you have a project that needs coding magic, don't hesitate to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:hello@example.com"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Your City, Country</p>
                </div>
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
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary/50 border-border focus:border-primary"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-secondary/50 border-border focus:border-primary"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary/50 border-border focus:border-primary resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity glow-primary"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
