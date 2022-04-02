import Header from './Header';
import Footer from './Footer';
import Preview from './Preview';


function Layout({children}) {


  return (
    <>
      <div className="z-50 w-full relative">
        <Header />
      </div>
    
          {children}

      
      <div className="w-full relative">
          <Footer />
      </div> 
      <Preview />
    </>
  )
}

export default Layout
