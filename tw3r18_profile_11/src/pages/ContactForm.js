import ContactFormLocal from './ContactFormLocal';


function ContactForm() {



  return (
    window.location.origin === 'http://localhost:3000'
    ? <ContactFormLocal />
    : <ContactFormLocal />
  )
}

export default ContactForm