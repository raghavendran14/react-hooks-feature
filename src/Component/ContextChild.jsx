import { useContext } from "react";
import { ThemeContext } from "./../Context/ThemeContext";
//Context Consumer
const ChildContext = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div>
            <h1>Child Context</h1>
            <p>Current Theme: {theme}</p>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Toggle Theme
            </button>
        </div>
    )
}

export default ChildContext;