import React from "react";
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Collection from "./pages/collection/Collection";

const roots = document.getElementById('root');
const root = createRoot(roots);

root.render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/collection" element={<Collection />}></Route>
        </Routes>
    </Router>
);