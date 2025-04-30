import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Home from "../Screens/Home";
import ReactLifeCycle from "../Screens/ReactLifeCycle";
import ReduxDemo from "../Screens/ReduxDemo";
import ContextDemo from "../Screens/ContextDemo";
const GlobalRouter = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Home />} />
                <Route path="ReactLifeCycle" element={<ReactLifeCycle />} />
                <Route path="ReduxDemo" element={<ReduxDemo />} />
                <Route path="ContextDemo" element={<ContextDemo />} />
                <Route path="*" element={<h2>404 - Page Not Found</h2>} />
            </>
            // </Route>
        ))
    return (
        <RouterProvider router={router} />
    )
}

export default GlobalRouter;