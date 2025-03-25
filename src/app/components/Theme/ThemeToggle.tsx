"use client";
import { useThemeStore } from '../../store/themeStore';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useThemeStore();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border shadow-sm hover:shadow-md transition bg-gray-200 dark:bg-gray-700"
            aria-label="Переключить тему"
        >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
};
