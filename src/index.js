import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Experience from './Components/experience/Experience';
import About from './Components/about/About';
import Contact from './Components/contact/Contact'

// import Header from './Components/header/Header';
// import Footer from './Components/footer/Footer';
// import Nav from './Components/nav/Nav';
// import Portfolio from './Components/portfolio/Portfolio';
// import Testimonial from './Components/testimonial/Testimonial';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/about" element={<About/>} />
      <Route path="/experience" element={<Experience/>} />
      <Route path="/contact" element={<Contact/>} />
    </Route>
  </Routes>
</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
