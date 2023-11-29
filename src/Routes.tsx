import { createBrowserRouter} from "react-router-dom";
import App from './App'
import Auth from "./auth/Auth";
import NewPlace from "./places/pages/NewPlace";
import Places from "./places/pages/Places";
import NotFound from "./shared/components/NotFound";
import Users from "./user/pages/Users";

export const appRoutes = createBrowserRouter([
    {
        path: '',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element:<Users/>   
            },
            {
                path: ':uid/places',
                element:<Places/>   
            },
            {
                path: 'place/new',
                element:<NewPlace/>   
            },
            {
                path: 'place/:pid',
                element:<NewPlace/>   
            },
            {
                path: 'auth',
                element:<Auth/>   
            }
        ]
    },
    // {
    //     path: 'auth',
    //     element:<Auth/>   
    // }
]);
