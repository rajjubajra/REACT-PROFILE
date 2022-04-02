import Layout from './components/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;