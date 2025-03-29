import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const mode = !prevMode;
      localStorage.setItem('theme', mode ? 'dark' : 'light');
      return mode;
    });
  };
  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
