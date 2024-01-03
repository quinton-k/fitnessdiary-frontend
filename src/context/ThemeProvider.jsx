import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext({});

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState('dark');
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
    
        // save theme to local storage
        localStorage.setItem('theme', theme);
      }, [theme, colorTheme]);
    
    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;