import React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"

const root = document.getElementById('root');
render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    </Router>,
    root
);