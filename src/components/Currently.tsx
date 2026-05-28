import { motion } from "framer-motion";
import { Briefcase, Code2, MapPin, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    label: "Looking for",
    value: "Junior .NET / Full-stack roles",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Stockholm or remote",
  },
  {
    icon: Code2,
    label: "Focus",
    value: "React, TypeScript, C#, .NET and CMS platforms",
  },
];

const Currently = () => {
  return (
    <section id="currently" className="py-12 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 md:p-8 max-w-6xl mx-auto"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr] lg:items-center">
            <div>
              <p className="text-primary font-mono text-sm mb-2">Currently</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Open to the next developer opportunity
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I am looking for a junior .NET or full-stack role where I can keep
                growing through real product work, clean code, and a team that values
                curiosity, ownership, and steady improvement.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-xl bg-secondary/40 p-4 border border-border/60"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                    <item.icon size={20} />
                  </div>
                  <p className="text-xs font-mono uppercase text-muted-foreground mb-2">
                    {item.label}
                  </p>
                  <p className="font-medium leading-snug">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Sparkles size={18} className="text-primary" />
              <span>Best fit: teams building web apps, CMS solutions, SaaS tools, or internal systems.</span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary/10 px-5 py-3 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Currently;
