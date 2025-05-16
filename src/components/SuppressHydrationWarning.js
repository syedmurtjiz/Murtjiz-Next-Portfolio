'use client';

import { useEffect } from 'react';

export default function SuppressHydrationWarning({ children }) {
  useEffect(() => {
    // This effect runs only on the client side
    const suppressConsoleError = () => {
      const originalError = console.error;
      console.error = (...args) => {
        // Ignore specific hydration warnings
        if (args[0] && args[0].includes('A tree hydrated but some attributes of the server rendered HTML')) {
          return;
        }
        originalError.apply(console, args);
      };
      return () => {
        console.error = originalError;
      };
    };

    const cleanup = suppressConsoleError();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return <>{children}</>;
}
