import Layout from './components/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Photography from './pages/Photography';
import Design from './pages/Design';
import Journal from './pages/Journal';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/design" element={<Design />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;