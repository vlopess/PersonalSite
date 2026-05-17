import { useState, useEffect } from 'react';

export function useLoop(duration) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setKey(prev => prev + 1);
    }, duration);
    return () => clearInterval(id);
  }, [duration]);

  return { key };
}