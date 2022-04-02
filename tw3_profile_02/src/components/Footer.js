

function Footer(){

  const date = new Date();

  return(
    <div className="w-full md:flex justify-center text-center font-thin md:text-sm text-xs py-2 ">
      <p>&copy; All rights reserved {date.getFullYear()}</p> 
      <p className="md:px-2 hidden md:block">|</p> 
      <p>designed and developed by Yellow-Website.com</p>
    </div>
  )
}

export default Footer;