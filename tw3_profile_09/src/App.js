import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import About from './pages/About';
import Layout from './components/Layout';

function App() {


  return (
  <BrowserRouter>
    <Layout>
    <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </Layout>
  </BrowserRouter>
  );
}

export default App;