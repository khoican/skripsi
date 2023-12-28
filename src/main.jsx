import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/index";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Home />,
// 	}
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
		<BrowserRouter>
            {/* <Home/> */}
            <Dashboard/>
		</BrowserRouter>
    </React.StrictMode>
);
