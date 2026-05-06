import React, { createContext } from "react";

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => (
  <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
);

export default ThemeContext;
