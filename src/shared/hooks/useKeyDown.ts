import { useEffect } from 'react';

export function useKeyDown(handler: (event: KeyboardEvent) => void): void {
  useEffect(() => {
    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [handler]);
}
