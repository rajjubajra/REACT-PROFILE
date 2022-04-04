import {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout/Layout';
import About from './pages/About';
import Themes from './pages/Themes';
import Contact from './pages/Contact';
import {useDispatch, useSelector} from 'react-redux';


function App() {

  const dispatch = useDispatch();
  const count = useSelector(state => state.pageLoad.count);

  console.log(count);

  useEffect(()=>{
    //dispatch(actionLoadCount(count));
  },[dispatch,count])

  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/theme-gallery" element={<Themes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </Layout>
    </BrowserRouter>
    
  );
}

export default App;
