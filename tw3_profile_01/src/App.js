import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';
import Layout from './components/Layout';


function App() {
  return (
    <div className="w-full h-auto relative">    
    <BrowserRouter>
    
    <Layout>

    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>   
    </div>    

    </Layout>
        
    </BrowserRouter>
  </div>

  );
}

export default App;
