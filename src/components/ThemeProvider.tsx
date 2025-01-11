"use client"
import theme from "@/styles/theme";
import { createContext, ReactNode, useContext } from "react";

const ThemeContext = createContext(theme)
export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    return (  
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;