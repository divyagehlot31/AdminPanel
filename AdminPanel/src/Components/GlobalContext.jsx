import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

// export const GlobalProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <GlobalContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

export const ThemeProvider = ({ children }) => {
  const [val, setVal] = useState(true);

  return (
    <GlobalContext.Provider value={{ val, setVal }}>
      {children}
    </GlobalContext.Provider>
  );
};

// export const useTheme = () => {
//   const context = useContext(GlobalContext);
//   if (context === undefined) {
//     throw new Error("Undefined");
//   }
//   return context;
// };
