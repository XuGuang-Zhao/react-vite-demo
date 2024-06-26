import ReactDOM from 'react-dom/client'
import router from './router/index.jsx'
import { RouterProvider } from "react-router-dom";
import './main.scss'
import {Provider} from "react-redux";
import store from "@/store/index.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
