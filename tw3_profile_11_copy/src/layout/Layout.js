import Header from './Header';



function Layout({children}) {

  return (
    <div className="relative min-h-screen">
      <div className="fixed">
        <div className="relative z-50 border-r">
          <Header />
        </div> 
      </div>
      <div className="pl-16 w-full flex flex-grow">
        {children}
      </div>


      
    </div>
  )
}

export default Layout
