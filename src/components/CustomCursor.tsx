import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handlePointerMove = (event: PointerEvent) => {
      cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
    };

    const handleHoverStart = () => cursor.classList.add('cursor--active');
    const handleHoverEnd = () => cursor.classList.remove('cursor--active');

    const interactiveSelector = 'a, button, [role="button"], input, textarea, select, .cursor-hover';
    const interactiveElements = document.querySelectorAll(interactiveSelector);

    interactiveElements.forEach((element) => {
      element.addEventListener('pointerenter', handleHoverStart);
      element.addEventListener('pointerleave', handleHoverEnd);
    });

    document.addEventListener('pointermove', handlePointerMove);

    return () => {
      interactiveElements.forEach((element) => {
        element.removeEventListener('pointerenter', handleHoverStart);
        element.removeEventListener('pointerleave', handleHoverEnd);
      });
      document.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
};
