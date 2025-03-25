"use client";
import { useEffect } from 'react';
import { useThemeStore } from '../../store/themeStore';

export const ThemeInitializer = () => {
    const { setTheme } = useThemeStore();

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            setTheme(prefersDark ? 'dark' : 'light');
        }
    }, [setTheme]);

    return null;
};
