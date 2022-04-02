import React from 'react'
import ContactForm from '../components/ContactForm';
import Title from '../components/Title';

function Contact() {
  return (
    <div className="xl:mx-10 my-20">
    <div className="col-span-2">
        <Title title="Contact" />
      </div>
    <div className="md:max-w-screen-lg m-auto grid md:grid-cols-2">
      <div className="w-full md:h-screen flex pt-20">
        <ul className="text-center font-light tracking-wide w-full h-32">
          <li>info@example.com</li>
          <li>+977 9841 269262</li>
        </ul>
      </div>
      <div className="W-full h-screen flex pt-4 ">
        <ContactForm />
      </div>
    </div>
    </div>

  )
}

export default Contact
