import React, { useState, useCallback } from 'react';

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = useCallback(() => {
        setDarkTheme((prevTheme) => !prevTheme);
    }, []);

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
}
