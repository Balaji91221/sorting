import React from 'react';
import Navbar from './components/CustomNavbar.jsx';
import Footer from './components/footer.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/contact/Contact.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sorting from './components/Sorting/SortingVisualizer.jsx'
import './App.css';
function App() {
  return (
    <Router >
      <Navbar />
      <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/sorting" element={<Sorting />} />
      <Route path="/contact" element={<Contact />} />
     
   
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
