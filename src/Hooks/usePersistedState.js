import { useState, useEffect } from 'react';

// دالة آمنة للتفكيك من localStorage
const safeJSONParse = (key, fallback) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    return fallback;
  }
};

const usePersistedState = (key, defaultValue) => {
  const [state, setState] = useState(() => safeJSONParse(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default usePersistedState;
