import { useEffect, useRef, useState } from "react";

export function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Show when in view, hide when out of view (works both scroll directions)
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.15, ...options });

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [options]);

  return [ref, isVisible];
}