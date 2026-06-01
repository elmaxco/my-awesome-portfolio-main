import { useEffect, useRef, useState } from "react";

export const useNearViewport = <T extends Element>() => {
  const elementRef = useRef<T>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsNearViewport(true);
        observer.disconnect();
      }
    }, { rootMargin: "300px" });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { elementRef, isNearViewport };
};
