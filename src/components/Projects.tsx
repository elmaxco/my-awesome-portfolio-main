import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, Star, GitFork } from "lucide-react";

const projects = [
  {
    title: "Ventixe - Event Planning Platform",
    description:
      "Event planning web application built with ASP.NET Core as a collaborative team project. Features full CRUD operations for event management, secure authentication and authorization, comprehensive form validation, and a modern responsive interface for seamless event coordination.",
    technologies: ["ASP.NET Core", "C#", "JavaScript", "SQL Server", "Authentication", "Team Project"],
    github: "https://github.com/group-6-aspnet2/webapp-ventixe",
    image: "/images/ventixe.png",
    featured: true,
  },
  {
    title: "Dr. News CMS",
    description:
      "Modern multilingual news website built with Umbraco CMS. Features real-time updates, category filtering, weather integration, and WCAG AA accessibility compliance.",
    technologies: ["Umbraco", "C#", ".NET 8", "Razor", "SQL Server", "TypeScript"],
    github: "https://github.com/ninohaegglund/drnews-cms",
    image: "/drnews.png",
    featured: true,
  },
  {
    title: "AlphaPortal - Admin Portal",
    description:
      "Comprehensive project management and client administration portal built with ASP.NET Core Razor Pages. Features project tracking, client management, team monitoring, and two-factor authentication.",
    technologies: ["ASP.NET Core", "C#", "Razor Pages", "SQL Server", "Bootstrap"],
    github: "https://github.com/elmaxco/AlphaAdminPortal",
    image: "https://cdn.sanity.io/images/rmpdth2p/production/c1d1d87d43debb3cc23fe2327f63c1b1b7f2fc45-44x41.svg",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, file sharing, and team communication features.",
    technologies: ["TypeScript", "React", "PostgreSQL", "WebSocket"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "API Gateway Service",
    description:
      "Microservices API gateway handling authentication, rate limiting, and request routing for distributed systems.",
    technologies: ["C#", ".NET Core", "Redis", "Docker"],
    github: "https://github.com",
    featured: true,
  },
];

const techStack = [
  { category: "Frontend", items: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"] },
  { category: "Backend", items: ["Node.js", "C#/.NET", "PHP/Laravel", "Python", "Express"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"] },
  { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Kubernetes", "Nginx"] },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">03. Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What I've Built</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div
                className={`relative group ${index % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div className="bg-gradient-card rounded-2xl p-1 glow-primary">
                  <div className="bg-secondary rounded-xl aspect-video flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className={`${project.title.includes('Ventixe') ? 'w-3/4 h-3/4 object-contain' : 'w-full h-full object-cover'}`}
                      />
                    ) : (
                      <div className="text-6xl opacity-20">
                        <Folder size={80} />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "md:order-1 md:text-right" : ""}>
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                <div className="glass rounded-xl p-6 mb-4">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div
                  className={`flex flex-wrap gap-2 mb-4 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-mono bg-secondary rounded-full text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div
                  className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={22} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Full Technology Stack</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The complete toolkit I use to build modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {techStack.map((stack, index) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Star className="text-primary" size={20} />
                </div>
                <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {stack.category}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 text-xs font-mono bg-secondary/50 rounded-md text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Github className="text-primary" size={32} />
              <h3 className="text-xl font-bold">Open Source Contributions</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              I actively contribute to open source projects and share my work with the community.
              Check out my GitHub for more projects and contributions.
            </p>
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Star size={18} className="text-primary" />
                <span className="font-mono">120+ Stars</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <GitFork size={18} className="text-primary" />
                <span className="font-mono">45+ Forks</span>
              </div>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium"
            >
              <Github size={20} />
              View GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
