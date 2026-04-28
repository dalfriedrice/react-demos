import { useEffect, useState } from "react";
export const useDebounce = (value, delay) => {
  const [debounceVal, setDebounceVal] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceVal(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debounceVal;
};
