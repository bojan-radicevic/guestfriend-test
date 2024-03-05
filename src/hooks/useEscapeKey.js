import { useEffect } from 'react';

// Hook for closing modals on Esc
export const useEscapeKey = callback => {
  useEffect(() => {
    const closeOnEscapePressed = event => {
      if (event.code === 'Escape') {
        callback();
      }
    };
    window.addEventListener('keydown', closeOnEscapePressed);
    return () => window.removeEventListener('keydown', closeOnEscapePressed);
  }, [callback]);
};
