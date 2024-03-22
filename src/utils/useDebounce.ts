import { useEffect, useState } from 'react';

interface UseDebounceProps {
  value: any;
  delay: number;
}

export function UseDebounce({ value, delay }: UseDebounceProps) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
