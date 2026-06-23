import { Suspense, lazy, useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PageBackground from "@/components/PageBackground";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const About = lazy(() => import("@/components/About"));
const Currently = lazy(() => import("@/components/Currently"));
const SkillsCarousel = lazy(() => import("@/components/SkillsCarousel"));
const Projects = lazy(() => import("@/components/Projects"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const DEFERRED_SECTION_TIMEOUT = 1200;

const useDeferredSections = () => {
  const [shouldRenderSections, setShouldRenderSections] = useState(false);

  useEffect(() => {
    const browserWindow = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (browserWindow.requestIdleCallback) {
      const handle = browserWindow.requestIdleCallback(
        () => setShouldRenderSections(true),
        { timeout: DEFERRED_SECTION_TIMEOUT }
      );

      return () => browserWindow.cancelIdleCallback?.(handle);
    }

    const timeout = window.setTimeout(() => setShouldRenderSections(true), 250);
    return () => window.clearTimeout(timeout);
  }, []);

  return shouldRenderSections;
};

const DeferredSectionsFallback = () => (
  <div aria-hidden className="min-h-[120vh]" />
);

const Index = () => {
  const shouldRenderSections = useDeferredSections();

  useEffect(() => {
    if (!shouldRenderSections || !window.location.hash) {
      return;
    }

    const hashTarget = window.location.hash.slice(1);
    window.requestAnimationFrame(() => {
      document.getElementById(hashTarget)?.scrollIntoView();
    });
  }, [shouldRenderSections]);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <PageBackground />
      <ScrollToTopButton />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        {shouldRenderSections ? (
          <Suspense fallback={<DeferredSectionsFallback />}>
            <About />
            <Currently />
            <SkillsCarousel />
            <Projects />
            <Contact />
            <Footer />
          </Suspense>
        ) : (
          <DeferredSectionsFallback />
        )}
      </div>
    </div>
  );
};

export default Index;
