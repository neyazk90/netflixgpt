import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { Provider } from 'react-redux';
import store from "./shared/store/configStore";
import { appRoutes } from "./Routes";


const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(<Provider store={store}><RouterProvider router={appRoutes} /></Provider>);