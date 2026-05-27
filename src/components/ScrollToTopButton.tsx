import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";

const SCROLL_THRESHOLD = 120;
const VISIBILITY_DELAY = 150;
const BOTTOM_THRESHOLD = 12;
const SECTION_IDS = ["about", "skills", "projects", "contact"];

const getNextSectionId = () => {
  const currentScroll = window.scrollY + 1;

  for (const id of SECTION_IDS) {
    const element = document.getElementById(id);
    if (!element) {
      continue;
    }

    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    if (elementTop > currentScroll) {
      return id;
    }
  }

  return null;
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [nextSectionId, setNextSectionId] = useState<string | null>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const updateScrollState = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
      setNextSectionId(getNextSectionId());
      const scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      const scrollPosition = window.innerHeight + window.scrollY;
      setIsAtBottom(scrollPosition >= scrollHeight - BOTTOM_THRESHOLD);
    };

    const onScroll = () => {
      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = window.setTimeout(updateScrollState, VISIBILITY_DELAY);
    };

    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToNextSection = () => {
    if (!nextSectionId) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
      return;
    }

    document.getElementById(nextSectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-center gap-3">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            aria-label="Scroll to top"
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: 16,
              scale: 0.9,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative w-12 h-12 flex items-center justify-center"
          >
            <motion.span
              aria-hidden
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/30 blur-xl pointer-events-none"
            />
            <motion.span
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                y: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative w-12 h-12 rounded-full glass border-2 border-primary/50 flex items-center justify-center group hover:border-primary transition-all shadow-[0_0_20px_rgba(45,212,191,0.3)]"
            >
              <ArrowUp className="text-primary" size={20} />
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isVisible && !isAtBottom && (
          <motion.button
            aria-label="Scroll to next section"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.9,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.12 }}
            onClick={scrollToNextSection}
            className="relative w-12 h-12 flex items-center justify-center"
          >
            <motion.span
              aria-hidden
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/30 blur-xl pointer-events-none"
            />
            <motion.span
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
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollToTopButton;

