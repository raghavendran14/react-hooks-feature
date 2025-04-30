import { useState } from "react";
import { ThemeContext } from "./../Context/ThemeContext";
import ChildContext from "../Component/ContextChild";

//high level context provider
const ContextDemo = () => {
    const [theme, setTheme] = useState("light")
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <h1>Current Theme: {theme}</h1>
            <ChildContext />
        </ThemeContext.Provider>

    )
}

export default ContextDemo;