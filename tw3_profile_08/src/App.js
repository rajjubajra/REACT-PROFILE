import Layout from './components/Layout';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import Press from './pages/Press';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/press" element={<Press />} />  
            <Route path="/contact" element={<Contact />} />      
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;