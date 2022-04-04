import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';


function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
    <h1>THIS PAGE IS UNDER MAITENANCE</h1>
    
    {/* <BrowserRouter>
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Layout>
    </BrowserRouter> */}
    </div>
  );
}

export default App;