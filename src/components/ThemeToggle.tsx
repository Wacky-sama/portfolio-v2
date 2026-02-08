import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-700 transition-colors duration-300 flex items-center"
    >
      {/* Sliding knob */}
      <span
        className={`
          absolute top-1 left-1
          w-6 h-6 rounded-full
          bg-white dark:bg-gray-900
          shadow-md
          transform transition-transform duration-300
          ${isDark ? 'translate-x-6' : 'translate-x-0'}
        `}
      />

      {/* Sun icon */}
      <Sun
        size={14}
        className={`
          absolute left-2 z-10
          text-yellow-500
          transition-opacity duration-300
          ${isDark ? 'opacity-0' : 'opacity-100'}
        `}
      />

      {/* Moon icon */}
      <Moon
        size={14}
        className={`
          absolute right-2 z-10
          text-gray-200
          transition-opacity duration-300
          ${isDark ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </button>
  );
}
