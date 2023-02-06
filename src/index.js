import React from "react";
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Collection from "./pages/collection/Collection";
import ProductDetail from "./pages/detail-pages/ProductDetail";
import ContactUs from "./pages/contact/ContactUs";
import AboutUs from "./pages/about/AboutUs";
import ClassTutorials from "./pages/class/ClassTutorials";

const roots = document.getElementById('root');
const root = createRoot(roots);

root.render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/collection" element={<Collection />}></Route>
            <Route path="/collection/detail" element={<ProductDetail />}>
                <Route path=":productId" element={<ProductDetail />}/>
            </Route>
            <Route path="/contact-us" element={<ContactUs />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
            <Route path="/class" element={<ClassTutorials />}></Route>
        </Routes>
    </Router>
);