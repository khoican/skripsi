import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./config/router/routes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import RootReducer from "./state/reducers";

const store = createStore(RootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
