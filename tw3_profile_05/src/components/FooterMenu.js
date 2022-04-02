import React from 'react'

function FooterMenu() {
  return (
    <div className="md:mx-20 mt-40 md:grid ml-20 md:ml-0 md:grid-cols-8 font-sm font-thin">
      <div className="my-10 md:my-0">
        <h3 className="underline">About</h3>
        <ul>
          <li>Journal</li>
          <li>Services</li>
        </ul>
      </div>
      <div className="my-10 md:my-0">
        <h3 className="underline">Info</h3>
        <ul>
          <li>Design</li>
          <li>Photography</li>
          <li>Press</li>
        </ul>
      </div>
      <div className="my-10 md:my-0">
        <h3 className="underline">Get in touch</h3>
        <ul>
          <li>Contact</li>
          <li>Instagram</li>
          <li>Pinterest</li>
        </ul>
      </div>
      <div className="col-span-4">
        <div className="w-full md:flex justify-center items-center">
          <ul>
            <li>info@example.com</li>
            <li>123 R800TW Road, KTM 3300</li>
            <li>Genintouch Office, KTM 7800</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default FooterMenu
