import React from 'react';
import Header from './Header'
import Footer from './Footer';
import Preview from './Preview';



function Layout({children}) {


  return (
    <div className="relative m-0 min-h-screen flex flex-col">

      <div>
        <Header />
      </div>
      
      <div className="absolute top-0 min-h-screen w-full">


        <div className="w-full flex flex-grow">
          {children}
        </div>

        <div className="w-full flex justify-center absolute bottom-0">
          <Footer />
        </div>   

      </div>
      <Preview />
    </div>
  )
}

export default Layout
