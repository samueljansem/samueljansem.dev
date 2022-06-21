import { ReactNode } from 'react';

export type Theme = 'light' | 'dark';

export type ThemeContextValue = {
    theme: Theme;
    applyTheme: (newTheme: Theme) => void;
    getPreferredTheme: () => Theme;
};

export interface ThemeProviderProps {
    children: ReactNode;
}
