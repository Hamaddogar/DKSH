import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";
import routes from "./routes";

const App = () => {
 const defaultTheme = localStorage.getItem("dark-theme");
 const [dark, setDark] = useState(defaultTheme ? JSON.parse(defaultTheme) : false);
 const value = { dark, setDark };
 const content = useRoutes(routes);
 return <ThemeContext.Provider value={value}>{content}</ThemeContext.Provider>;
};

export default App;
