import ContactForm from './ContactForm';

function Contact(){

  return(
    <div className="px-4">
    <div className="my-5">
        <div className="relative md:flex w-full flex-col">
          <div className="w-full">
            <div className="h-40 md:w-96">
              <h2 className="text-5xl text-right tracking-widest font-light">Get in touch</h2>
              
            </div>
          </div>
        </div>
    </div>
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
    </div>
    
  )
}

export default Contact;