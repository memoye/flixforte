import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import Root from "../root"
import { Account, HomePage, MoviesPage, SeriesPage, SignInPage } from "../pages"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'movies',
                element: <MoviesPage />,
            },
            {
                path: 'series',
                element: <SeriesPage />
            },
            {
                path: 'account',
                element: <Account />,
            },
        ],
    },
    {
        path: 'signin',
        element: <SignInPage />,
    }
]);

export default () => <RouterProvider router={ routes } />