import { useEffect } from 'react';

export function useKeyUp(handler: (event: KeyboardEvent) => void): void {
  useEffect(() => {
    document.addEventListener('keyup', handler);

    return () => {
      document.removeEventListener('keyup', handler);
    };
  }, [handler]);
}
