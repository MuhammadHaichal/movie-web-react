import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/homes.jsx";
import SearchMovies from "./pages/SearchMovies.jsx";
import ErrorPage from "./pages/errorPage.jsx";

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
]);

export default router;
