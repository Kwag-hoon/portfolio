import { useEffect, useRef, useState } from "react";

export default function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const {
    threshold = 0.6,
    rootMargin = "0px 0px -20px 0px",
    once = true,
  } = options;

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(target);
        } else {
          if (!once) setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}