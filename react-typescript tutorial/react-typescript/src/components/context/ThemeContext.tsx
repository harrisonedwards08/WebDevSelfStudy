import {createContext} from 'react';
import {theme} from './theme';

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme);

/**
 * Provides the theme context for the application.
 * @param children - The child components to be wrapped by the theme context.
 * @returns The theme context provider component.
 */
export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
    return (
        <>       
            <h1>ThemeContext</h1>
            <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
        </>
    )
}