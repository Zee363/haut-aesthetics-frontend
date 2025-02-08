import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'; 
import Home from './pages/Home';
import Header from "./components/Header";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Beauty from './pages/Beauty';

function App() {
  return (
   <div className='App'>
    <Router>
      <Header/>
    <Navbar/>
      <Routes>
        <Route path="/" element={< Home/>}></Route>
        <Route path="/beauty" element={<Beauty/>}></Route>
    </Routes>
    <Footer/>
  </Router>  
   </div>
  );
}

export default App;
