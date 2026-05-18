import { useEffect, useRef } from 'react';

/**
 * useIntersectionObserver
 *
 * Attaches an IntersectionObserver to the returned ref.
 * When the element scrolls into view it gets the "visible" class added,
 * triggering any CSS fade-in transition defined on that element.
 *
 * @param {Object}  options
 * @param {number}  options.threshold  – 0–1, how much of the element must be visible (default 0.15)
 * @param {string}  options.rootMargin – margin around the root (default '0px')
 * @param {boolean} options.once       – stop observing after first trigger (default true)
 * @returns {React.RefObject}
 */
export function useIntersectionObserver({
  threshold = 0.15,
  rootMargin = '0px',
  once = true,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove('visible');
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}

export default useIntersectionObserver;
