import React, { useState } from "react";
import ReactDom from 'react-dom/client';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
    return(
       <>
       <Header />
       <Main />
       <Footer />
       </>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <App />
)
