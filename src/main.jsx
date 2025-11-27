import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {ToastProvider} from "./shared/components/Toast/ToasProvider.jsx";

import "./assets/styles/reset.css";
import "./assets/styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ToastProvider>
            <App />
        </ToastProvider>
    </BrowserRouter>
);
