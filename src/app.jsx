import { createBrowserRouter } from "react-router-dom"

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Home from "./pages/homes.jsx"
import SearchMovies from "./pages/SearchMovies.jsx"
import ErrorPage from "./pages/errorPage.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/search",
        element: <SearchMovies />,
    },
])

export default router
