import { MutableRefObject, useEffect, useRef } from 'react';

type IntersectionCallback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => void;

export const useObserver = (
  ref: MutableRefObject<Element | null>,
  canLoad: boolean,
  isLoading: boolean,
  callback: () => void
): void => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    const cb: IntersectionCallback = (entries, observer) => {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };

    observer.current = new IntersectionObserver(cb);
    if (ref.current) observer.current.observe(ref.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [isLoading, ref, canLoad, callback]);
};
