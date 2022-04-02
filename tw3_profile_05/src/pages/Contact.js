import ContactForm from './ContactForm';

function Contact(){

  return(
    <>
    <h1 className="text-4xl font-light tracking-widest py-10 text-center">Contact Me</h1>
    <div className="md:grid md:grid-cols-3 md:mr-10">
      <div className="col-span-2">
        <ContactForm />
      </div>
      <div className="flex justify-center items-center font-thin tracking-widest bg-gray-200 py-40 my-5 md:py-0 md:my-0">
        <div>
          <div>askme@example.com</div>
          <div>+977 98 41 269 262</div>
        </div>
        
      </div>
    </div>
    </>
    
  )
}

export default Contact;