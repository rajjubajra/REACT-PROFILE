
function Footer(){

  const date = new Date();
  return(
    <div className="font-thin md:flex w-full justify-center md:font-sm font-xs py-5">
      <p>All Rights Reserved &copy; {date.getFullYear()}</p>
      <p className="md:block hidden"> | </p>
      <p>
        <a href="http://www.yellow-website.com">Design and Developed by yellow-website.com</a>
      </p> 
    </div>
  )
}

export default Footer;