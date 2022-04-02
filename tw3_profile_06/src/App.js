import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './component/Layout';
import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />

      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
