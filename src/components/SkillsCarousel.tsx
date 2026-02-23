import { motion } from "framer-motion";

const skills = [
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Umbraco", icon: "/UbracoTrans.png" },
  { name: "Optimizely", icon: "/optimizely-seeklogo.png" },
];

const experienceStats = [
  { value: "2", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "20+", label: "Technologies" },
];

const SkillsCarousel = () => {
  return (
    <section id="skills" className="py-24 overflow-hidden relative">
      <div className="container px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-primary font-mono text-sm mb-2">02. Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technologies I Work With</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of technologies and tools I use to bring ideas to life
          </p>
        </motion.div>
      </div>

      {/* Infinite scrolling carousel - first row */}
      <div className="relative mb-8 max-w-6xl mx-auto">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex gap-0 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 mx-2"
                style={{ width: '144px' }}
              >
                <div className="glass rounded-2xl p-6 w-32 h-32 flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-colors group">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`group-hover:scale-110 transition-transform ${
                      skill.name === "Optimizely" || skill.name === "Umbraco" 
                        ? "w-16 h-16 object-contain" 
                        : "w-12 h-12"
                    }`}
                  />
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Second row - reverse direction */}
      <div className="relative max-w-6xl mx-auto">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex gap-0 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...skills, ...skills].reverse().map((skill, index) => (
              <div
                key={`${skill.name}-reverse-${index}`}
                className="flex-shrink-0 mx-2"
                style={{ width: '144px' }}
              >
                <div className="glass rounded-2xl p-6 w-32 h-32 flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-colors group">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`group-hover:scale-110 transition-transform ${
                      skill.name === "Optimizely" || skill.name === "Umbraco" 
                        ? "w-16 h-16 object-contain" 
                        : "w-12 h-12"
                    }`}
                  />
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Experience stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container px-6 mt-20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {experienceStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:border-primary/50 transition-colors group"
            >
              <span className="text-3xl md:text-4xl font-bold text-gradient block mb-2">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsCarousel;
