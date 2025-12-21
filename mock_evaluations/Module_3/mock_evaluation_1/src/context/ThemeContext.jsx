import React,{
    createContext,useState 
} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = 
(
    {Children}
) => {
    const [isDark , setIsDark] = 
    useState(false);
    const toggleTheme = () => setIsDark (!isDark);


return (
    <ThemeContext.Provider
    value={{ isDark , toggleTheme}}> 
       <div classNmae = {isDark ? "theme-dark" : "theme-light"} >
        {Children}
       </div>
    </ThemeContext.Provider>
  );

};

