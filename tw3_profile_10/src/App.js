import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';


function App() {
  return (
    <BrowserRouter>
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;