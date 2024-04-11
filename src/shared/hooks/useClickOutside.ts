import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

type ClickEventType = 'mousedown' | 'touchstart';
const CLICK_EVENTS: ClickEventType[] = ['mousedown', 'touchstart'];

export function useClickOutside(
  callback: (event?: MouseEvent | TouchEvent) => void,
): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    function handler(event: MouseEvent | TouchEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    }

    CLICK_EVENTS.forEach((event) => {
      document.addEventListener(event, handler, true);
    });

    return () => {
      CLICK_EVENTS.forEach((event) => {
        document.removeEventListener(event, handler, true);
      });
    };
  }, [callback]);

  return ref;
}
