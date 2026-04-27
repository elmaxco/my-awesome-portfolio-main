import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";

const SCROLL_THRESHOLD = 120;
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

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
      setNextSectionId(getNextSectionId());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToNextSection = () => {
    if (!nextSectionId) {
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
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full glass border-2 border-primary/50 text-primary flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors shadow-[0_0_20px_rgba(45,212,191,0.25)]"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {nextSectionId && (
          <motion.button
            aria-label="Scroll to next section"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={scrollToNextSection}
            className="w-12 h-12 rounded-full glass border-2 border-primary/50 text-primary flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors shadow-[0_0_20px_rgba(45,212,191,0.25)]"
          >
            <ArrowDown size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollToTopButton;

