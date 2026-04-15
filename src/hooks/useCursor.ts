import { useEffect, useRef } from 'react';

export function useCursor(dotId: string) {
  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    const dot = document.getElementById(dotId);
    if (!dot) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      dot.style.left = posRef.current.x - 5 + 'px';
      dot.style.top = posRef.current.y - 5 + 'px';
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    const interactables = document.querySelectorAll('a, button, [data-hover]');
    const expand = () => dot.style.transform = 'scale(2.5)';
    const shrink = () => dot.style.transform = 'scale(1)';
    interactables.forEach(el => {
      el.addEventListener('mouseenter', expand);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', expand);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  }, [dotId]);
}
