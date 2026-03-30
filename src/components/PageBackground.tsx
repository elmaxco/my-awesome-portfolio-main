import { useMemo } from "react";
import { motion } from "framer-motion";

type Particle = {
  left: string;
  top: string;
  duration: number;
  delay: number;
  sizeClass: string;
  opacityClass: string;
};

const PageBackground = () => {
  const particles = useMemo<Particle[]>(() => {
    const seed = 1337;
    let s = seed;
    const rand = () => {
      // Deterministic pseudo-random generator (LCG)
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };

    return Array.from({ length: 26 }, () => {
      const r1 = rand();
      const r2 = rand();
      const r3 = rand();
      const r4 = rand();

      const sizeClass = r1 > 0.7 ? "w-1.5 h-1.5" : "w-1 h-1";
      const opacityClass = r2 > 0.6 ? "bg-primary/40" : "bg-primary/25";
      const duration = 3.5 + r3 * 4.5;
      const delay = r4 * 2.5;

      return {
        left: `${Math.round(rand() * 100)}%`,
        top: `${Math.round(rand() * 100)}%`,
        duration,
        delay,
        sizeClass,
        opacityClass,
      };
    });
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-primary/18 rounded-full blur-[140px]"
        animate={{ x: [0, 120, 0], y: [0, 60, 0], scale: [1, 1.18, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[620px] h-[620px] bg-accent/18 rounded-full blur-[140px]"
        animate={{ x: [0, -90, 0], y: [0, -70, 0], scale: [1, 1.22, 1] }}
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-[520px] h-[520px] bg-primary/10 rounded-full blur-[120px]"
        animate={{ x: [0, 70, 0], y: [0, -55, 0], scale: [1.12, 1, 1.12] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${p.sizeClass} ${p.opacityClass}`}
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -28, 0], opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default PageBackground;

