
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import Root from "../root"
import { HomePage, MoviesPage, SeriesPage, SignInPage } from "../pages"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'movies',
                element: <MoviesPage />,
            },
            {
                path: 'series',
                element: <SeriesPage />
            },
        ],
    },
    {
        path: 'login',
        element: <SignInPage />
    }
]);

export default () => <RouterProvider router={ routes } />