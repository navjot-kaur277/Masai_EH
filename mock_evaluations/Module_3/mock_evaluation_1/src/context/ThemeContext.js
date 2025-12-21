import React,{
    Children,
    createContext,userState 
} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = 
(
    (Children)
) => {
    const [theme , setTheme] =
    userState('light');
    const toggleTheme = () => 
        setTheme(prev => prev === 'light' ?
            'dark' : 'light' );


return (
    <ThemeContext.Provider
    value={{theme, toggleTheme}}> 
       <div classNmae = {`app-container ${theme}`} >
        {Children}
       </div>
    </ThemeContext.Provider>
  );

};

