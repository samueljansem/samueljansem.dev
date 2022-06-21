import { createContext, useState, useEffect, ReactNode } from 'react';
import { theme as lightTheme, darkTheme } from '../stitches.config';
import { Theme, ThemeContextValue, ThemeProviderProps } from './types';

export const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>('light');

    function applyTheme(newTheme: Theme) {
        const html = document.documentElement;

        if (newTheme === 'light') {
            html.classList.remove(darkTheme.className);
            html.classList.add(lightTheme.className);
        } else if (newTheme === 'dark') {
            html.classList.remove(lightTheme.className);
            html.classList.add(darkTheme.className);
        }

        localStorage.setItem('preferred-theme', newTheme);
        setTheme(newTheme);
    }

    function getPreferredTheme() {
        const preferredTheme = localStorage.getItem('preferred-theme');

        return preferredTheme as Theme;
    }

    return (
        <ThemeContext.Provider value={{ theme, applyTheme, getPreferredTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
