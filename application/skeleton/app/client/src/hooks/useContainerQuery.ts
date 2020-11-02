import { useEffect, useRef, useState, RefObject } from 'react';

/* minWidth is a pixel value, there seems no performant way to deal with converting rems to px in js */
function useContainerQuery<ElementType>(minWidth: number, defaultState = false): [RefObject<ElementType>, boolean] {
  const ref = useRef(null);
  const [isMatch, setIsMatch] = useState(defaultState);

  useEffect(() => {
    const element = ref.current;

    const resizeObserver = new ResizeObserver(entries => {
      window.requestAnimationFrame(() => {
        if (!Array.isArray(entries)) {
          return;
        }

        if (!entries.length) {
          return;
        }

        const entry = entries[0];
        const { width } = entry.contentRect;
        setIsMatch(width > minWidth);
      });
    });

    if (element) {
      resizeObserver.observe(element);

      return () => {
        if (element) {
          resizeObserver.unobserve((element as unknown) as HTMLElement);
        }
      };
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, [minWidth]);

  return [ref, isMatch];
}

export default useContainerQuery;
