import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

import Home from './pages/Home';

import About from "./pages/About";

import Property from "./pages/Property";
import Propertylist from "./pages/Propertylist";
import Propertytype from "./pages/Propertytype";
import Propertyagent from "./pages/Propertyagent";

import Page from "./pages/page";
import Testimonial from "./pages/Testimonial";
import Error404 from "./pages/Error404";

import Contact from "./pages/Contact";

import Addproperty from "./pages/Addproperty";

export default function App() {
    return (
        <BrowserRouter basename="/makaan">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />

                    <Route path="about" element={<About />} />

                    <Route path="property" element={<Property />} />
                    <Route path="property-list" element={<Propertylist />} />
                    <Route path="property-type" element={<Propertytype />} />
                    <Route path="property-agent" element={<Propertyagent />} />

                    <Route path="page" element={<Page />} />
                    <Route path="testimonial" element={<Testimonial />} />
                    <Route path="error404" element={<Error404 />} />

                    <Route path="contact" element={<Contact />} />

                    <Route path="add-property" element={<Addproperty />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

const r1 = ReactDOM.createRoot(document.getElementById("root"));
r1.render(<App />);