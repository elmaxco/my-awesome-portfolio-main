import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const heroParticles = Array.from({ length: 20 }, (_, index) => ({
  left: `${(index * 37 + 11) % 100}%`,
  top: `${(index * 53 + 17) % 100}%`,
  duration: 3 + ((index * 7) % 40) / 10,
  delay: ((index * 13) % 20) / 10,
}));

const Hero = () => {
  const isMobile = useIsMobile();
  const [text, setText] = useState("");
  const fullText = "Max Jacobsson";
  const [nameTypingComplete, setNameTypingComplete] = useState(false);
  
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  
  const roles = [
    ".NET Developer",
    "Web Developer",
    "Full-Stack Developer",
    "CMS Specialist"
  ];

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setNameTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && roleText === currentRole) {
      // Wait before starting to delete
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && roleText === "") {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      // Type or delete character
      const typingSpeed = isDeleting ? 50 : 100;
      timeout = setTimeout(() => {
        setRoleText((prev) => {
          if (isDeleting) {
            return currentRole.slice(0, prev.length - 1);
          } else {
            return currentRole.slice(0, prev.length + 1);
          }
        });
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [roleText, isDeleting, roleIndex]);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollIndicator(window.scrollY === 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {isMobile ? (
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(circle at 30% 24%, hsl(174 72% 56% / 0.18), transparent 34%), radial-gradient(circle at 78% 72%, hsl(270 70% 60% / 0.14), transparent 38%)",
            }}
          />
        ) : (
          <>
            {/* Animated gradient orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]"
              animate={{
                x: [0, -80, 0],
                y: [0, -60, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]"
              animate={{
                x: [0, 60, 0],
                y: [0, -40, 0],
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floating particles */}
            {heroParticles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/40 rounded-full"
                style={{
                  left: particle.left,
                  top: particle.top,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Animated code brackets */}
            <motion.div
              className="absolute top-[20%] left-[10%] text-primary/20 text-8xl font-mono font-bold"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {"<"}
            </motion.div>
            <motion.div
              className="absolute bottom-[25%] right-[10%] text-accent/20 text-8xl font-mono font-bold"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              {"/>"}
            </motion.div>
            <motion.div
              className="absolute top-[40%] right-[15%] text-primary/15 text-6xl font-mono"
              animate={{
                opacity: [0.1, 0.2, 0.1],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {"{ }"}
            </motion.div>
            <motion.div
              className="absolute bottom-[35%] left-[12%] text-accent/15 text-5xl font-mono"
              animate={{
                opacity: [0.1, 0.25, 0.1],
                x: [0, 15, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {"=>"}
            </motion.div>
          </>
        )}
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-mono text-sm md:text-base mb-4 tracking-wider"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 min-h-[1.2em]"
          >
            <span className="text-gradient">
              {text}
              {!nameTypingComplete && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1 h-[0.9em] bg-primary ml-1 align-middle"
                />
              )}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-light min-h-[2em] flex items-center justify-center"
          >
            <span>{roleText}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1"
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="group relative h-14 w-52 overflow-hidden rounded-full border border-primary/60 bg-gradient-primary px-7 text-sm font-semibold tracking-wide text-primary-foreground shadow-[0_0_0_1px_hsl(var(--primary)/0.12),0_14px_40px_hsl(var(--primary)/0.24)] transition-all duration-300 hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.35),0_18px_50px_hsl(var(--primary)/0.4)] focus-visible:ring-primary"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative z-10">View My Work</span>
              <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-background/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-45">
                <ArrowUpRight />
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group relative h-14 w-52 overflow-hidden rounded-full border-primary/30 bg-background/40 px-7 text-sm font-semibold tracking-wide text-foreground shadow-[inset_0_0_0_1px_hsl(var(--primary)/0.03)] backdrop-blur-sm transition-all duration-300 hover:border-primary/70 hover:bg-primary/10 hover:text-foreground hover:shadow-[0_14px_35px_hsl(var(--primary)/0.14)] focus-visible:ring-primary"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <Mail />
              </span>
              <span className="relative z-10">Get In Touch</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-8 left-0 right-0 flex justify-center z-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="relative cursor-pointer"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              {/* Glow effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/30 blur-xl"
              />

              {/* Inner circle with arrow */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, 8, 0] }}
                transition={{
                  y: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="relative w-12 h-12 rounded-full glass border-2 border-primary/50 flex items-center justify-center group hover:border-primary transition-all shadow-[0_0_20px_rgba(45,212,191,0.3)]"
              >
                <ArrowDown className="text-primary" size={20} />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
