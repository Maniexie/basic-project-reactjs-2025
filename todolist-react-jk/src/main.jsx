/**
 * The main entry point of the application.
 *
 * This file is responsible for rendering the App component
 * to the root element of the DOM.
 *
 * It also sets up the routes for the application using
 * the react-router-dom library.
 *
 * @module src/main.jsx
 * @author yourname
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Todo from "./pages/Todo.jsx";
import Home from "./pages/Home.jsx";

/**
 * The root element of the DOM.
 *
 * This is where the App component will be rendered.
 *
 * @constant
 * @type {HTMLElement}
 */
const root = document.getElementById("root");

/**
 * Render the App component to the root element of the DOM.
 *
 * This sets up the routes for the application using
 * the react-router-dom library.
 */
ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/todo" element={<Todo />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

