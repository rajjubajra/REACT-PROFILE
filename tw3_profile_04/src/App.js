import Layout from './components/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './Pages/About';
import Photography from './Pages/Photography';
import Press from './Pages/Press';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/press" element={<Press />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
