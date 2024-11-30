import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import "./style.css" 

import Navbar from "./components/Navbar.js"
import Input from "./components/input.js"
import Products from "./components/products.js"
import Aboutus from "./components/aboutus.js"
import Footer from "./components/footer.js"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <div>
      <Navbar></Navbar>
      <Input></Input>
      <Products></Products>
      <Aboutus></Aboutus>
      <Footer></Footer>
    </div>
)