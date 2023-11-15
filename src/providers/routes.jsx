
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import Root from "../root"
import { HomePage, MoviesPage, SeriesPage, SignInPage } from "../pages"
import { action as SignInFormAction } from "../pages/sign-in";

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
        path: 'signin',
        element: <SignInPage />,
        action: SignInFormAction
    }
]);

export default () => <RouterProvider router={ routes } />