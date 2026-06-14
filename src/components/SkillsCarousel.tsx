import { motion } from "framer-motion";
import { useNearViewport } from "@/hooks/use-near-viewport";

type CarouselItem = {
  name: string;
  icon: string;
};

const makeMonogramIcon = (label: string, background: string, foreground = "#f8fafc") => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" role="img" aria-label="${label}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${background}" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="96" height="96" rx="24" fill="url(#bg)" />
      <text x="48" y="56" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="700" fill="${foreground}">${label}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const aiTools: CarouselItem[] = [
  { name: "OpenAI", icon: makeMonogramIcon("OA", "#10b981") },
  { name: "Claude", icon: makeMonogramIcon("CL", "#f97316") },
  { name: "Cursor", icon: makeMonogramIcon("CU", "#6366f1") },
  { name: "GitHub Copilot", icon: makeMonogramIcon("CP", "#14b8a6") },
  { name: "Perplexity", icon: makeMonogramIcon("PX", "#06b6d4") },
  { name: "Gemini", icon: makeMonogramIcon("GM", "#8b5cf6") },
  { name: "v0", icon: makeMonogramIcon("V0", "#ec4899") },
  { name: "ChatGPT", icon: makeMonogramIcon("CG", "#22c55e") },
  { name: "Copilot", icon: makeMonogramIcon("CP", "#0ea5e9") },
  { name: "Bolt", icon: makeMonogramIcon("BL", "#f59e0b") },
  { name: "Notion AI", icon: makeMonogramIcon("AI", "#52525b") },
  { name: "LangChain", icon: makeMonogramIcon("LC", "#84cc16") },
];

const experienceStats = [
  { value: "2", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "12", label: "AI Tools" },
];

const SkillsCarousel = () => {
  const { elementRef: sectionRef, isNearViewport } = useNearViewport<HTMLElement>();

  return (
    <section ref={sectionRef} id="skills" className="py-24 overflow-hidden relative">
      <div className="container px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-primary font-mono text-sm mb-2">02. Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">AI Tools I Work With</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of AI tools and assistants I use to speed up design, coding, and research
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
            {[...aiTools, ...aiTools].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 mx-2"
                style={{ width: '144px' }}
              >
                <div className="glass rounded-2xl p-6 w-32 h-32 flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-colors group">
                  <img
                    src={isNearViewport ? skill.icon : undefined}
                    alt={skill.name}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className={`group-hover:scale-110 transition-transform ${
                      skill.name === "OpenAI" || skill.name === "Claude" || skill.name === "Cursor" || skill.name === "GitHub Copilot"
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
            {[...aiTools, ...aiTools].reverse().map((skill, index) => (
              <div
                key={`${skill.name}-reverse-${index}`}
                className="flex-shrink-0 mx-2"
                style={{ width: '144px' }}
              >
                <div className="glass rounded-2xl p-6 w-32 h-32 flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-colors group">
                  <img
                    src={isNearViewport ? skill.icon : undefined}
                    alt={skill.name}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className={`group-hover:scale-110 transition-transform ${
                      skill.name === "OpenAI" || skill.name === "Claude" || skill.name === "Cursor" || skill.name === "GitHub Copilot"
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
