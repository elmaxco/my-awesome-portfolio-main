import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, Star } from "lucide-react";
import { profileLinks } from "@/lib/profileLinks";
import { useNearViewport } from "@/hooks/use-near-viewport";

type Project = {
  title: string;
  description: string;
  shortDescription?: string;
  technologies: string[];
  github: string;
  githubLabel?: string;
  backendGithub?: string;
  backendGithubLabel?: string;
  image?: string;
  featured: boolean;
  live?: string;
};

const projects: Project[] = [
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
    title: "AlphaPortal - Project Management",
    description:
      "Full-stack MVC project management system built with ASP.NET Core. Features real-time collaboration with SignalR, rich text editing with Quill WYSIWYG editor, secure file storage using Azure Blob Storage, and Identity-based authentication. Deployed to Azure with integrated database and cloud storage services.",
    technologies: ["ASP.NET Core", "C#", "SignalR", "Azure Blob Storage", "Entity Framework Core", "Identity", "SQL Server"],
    github: "https://github.com/elmaxco/AlphaAdminPortal",
    image: "https://cdn.sanity.io/images/rmpdth2p/production/c1d1d87d43debb3cc23fe2327f63c1b1b7f2fc45-44x41.svg",
    featured: true,
  },
  {
    title: "SignPortal - E-signing Platform",
    description:
      "Modern e-signing platform for Swedish teams where users can create, send, and sign agreements with BankID. Includes a public quote flow without login and an admin interface for managing agreements, recipients, and deliveries. Built with Firebase/Firestore, private Storage attachments with time-limited download links, and deployed on Vercel with scheduled reminder cron jobs. Communication is handled through Resend email and Twilio SMS with explicit consent, plus server-side anti-spam and structured signing audit trails.",
    shortDescription:
      "E-signeringsplattform med BankID, publikt offertflode, adminpanel och starkt fokus pa sakerhet, samtycke och audit trail.",
    technologies: ["React", "Firebase", "Firestore", "Firebase Storage", "Vercel", "Resend", "Twilio", "BankID"],
    github: "https://github.com/elmaxco",
    live: "https://sign-portal-swart.vercel.app/",
    image: "/Signportalv2.png",
    featured: true,
  },
  {
    title: "Spelvalvet - E-commerce Platform",
    description:
      "Full-stack e-commerce platform for Spelvalvet, a Swedish shop for Pokemon cards, games, consoles, and refurbished finds. Built with a React/TypeScript storefront and ASP.NET Core microservices for catalog, identity, orders, payments, inventory, and notifications, including Stripe payments, JWT authentication, SQL Server, and Resend email flows.",
    shortDescription:
      "Full-stack e-commerce shop for trading cards, games, and consoles with React, ASP.NET Core microservices, Stripe payments, and email notifications.",
    technologies: ["React", "TypeScript", "Vite", "ASP.NET Core", "C#", "SQL Server", "Stripe", "Resend"],
    github: "https://github.com/ninohaegglund/ECommerce-platform-client",
    githubLabel: "Frontend",
    backendGithub: "https://github.com/ninohaegglund/ECommerce-platform",
    backendGithubLabel: "Backend",
    live: "https://spelvalvet.shop/",
    image: "/ecommerce.png",
    featured: true,
  },
];

const aiToolkit = [
  { category: "AI Assistants", items: ["OpenAI", "Claude", "Gemini", "Perplexity"] },
  { category: "Coding AI", items: ["Cursor", "GitHub Copilot", "OpenAI Codex", "Claude Code"] },
  { category: "Build & Prototype", items: ["v0", "Bolt", "ChatGPT", "Notion AI"] },
  { category: "AI Workflows", items: ["OpenAI API", "LangChain", "Prompt Engineering", "Automation"] },
];

const Projects = () => {
  const { elementRef: sectionRef, isNearViewport } = useNearViewport<HTMLElement>();

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative">
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
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl aspect-video flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <img 
                        src={isNearViewport ? project.image : undefined}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                        className="w-full h-full object-cover"
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
                  {project.shortDescription ? (
                    <>
                      <p className="text-muted-foreground md:hidden">{project.shortDescription}</p>
                      <p className="text-muted-foreground hidden md:block">{project.description}</p>
                    </>
                  ) : (
                    <p className="text-muted-foreground">{project.description}</p>
                  )}
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
                  className={`flex flex-wrap items-center gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} ${project.githubLabel ?? "GitHub"}`}
                    title={project.githubLabel ?? "GitHub"}
                    className={`transition-colors ${
                      project.backendGithub
                        ? "inline-flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <Github size={project.backendGithub ? 18 : 22} />
                    {project.backendGithub && <span>{project.githubLabel ?? "GitHub"}</span>}
                  </a>
                  {project.backendGithub && (
                    <a
                      href={project.backendGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} ${project.backendGithubLabel ?? "Backend GitHub"}`}
                      title={project.backendGithubLabel ?? "Backend GitHub"}
                      className="inline-flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                      <span>{project.backendGithubLabel ?? "Backend"}</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title}`}
                      title="Visit site"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Visit site
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-xl p-6 md:p-8 mb-24 max-w-3xl mx-auto border border-primary/20"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Github size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">More projects on GitHub</h3>
                <p className="text-muted-foreground">
                  The featured work above is just a selection. Explore the rest of my
                  repositories, experiments, and learning projects on GitHub.
                </p>
              </div>
            </div>
            <a
              href={profileLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary/10 px-5 py-3 font-medium text-primary hover:bg-primary/20 transition-colors"
            >
              <Github size={18} />
              View GitHub
            </a>
          </div>
        </motion.div>

        {/* AI Toolkit Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">AI Tools I Work With</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            AI assistants and development tools I use to research, build, debug, and ship better software
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {aiToolkit.map((stack, index) => (
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

      </div>
    </section>
  );
};

export default Projects;
