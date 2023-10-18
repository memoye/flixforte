
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import Root from "../root"
import { HomePage } from "../pages"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
        ],
    },
]);

export default () => <RouterProvider router={ routes } />