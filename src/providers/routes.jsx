import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import Root from "../root"
import { Account, HomePage, MoviesPage, SeriesPage, SignInPage } from "../pages"
import { action as SignInFormAction } from "../pages/sign-in";
import { loader as HomePageLoader } from "../pages/home-page";
import { loader as AccountLoader } from "../pages/Account";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />,
                loader: HomePageLoader,
                id: 'root'
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
                // loader: AccountLoader
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