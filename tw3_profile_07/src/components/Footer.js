
function Footer(){

  const date = new Date();
  return(
    <div className="mt-40 font-thin md:flex w-full justify-center md:font-sm font-xs py-5">
      <p>All Rights Reserved &copy; {date.getFullYear()}</p>
      <p className="md:block hidden mx-2"> | </p>
      <p>
        <a href="http://www.yellow-website.com">
        Design and Developed by yellow-website.com
        </a>
      </p> 
    </div>
  )
}

export default Footer;