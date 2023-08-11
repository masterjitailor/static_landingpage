import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Fashion from "./components/Fashion";
import Working from "./components/Working";
import Contact from "./components/Contact";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/fashion" element={<Fashion/>} />
      <Route path="/working" element={<Working/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </BrowserRouter>
    
  </React.StrictMode>
);
