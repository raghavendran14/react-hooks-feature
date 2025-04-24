import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Home from "../Screens/Home";
import ReactLifeCycle from "../Screens/ReactLifeCycle";
const GlobalRouter = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Home />} />
                <Route path="ReactLifeCycle" element={<ReactLifeCycle />} />
            </>
            // </Route>
        ))
    return (
        <RouterProvider router={router} />
    )
}

export default GlobalRouter;