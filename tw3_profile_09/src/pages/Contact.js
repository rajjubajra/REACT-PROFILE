import ContactForm from '../components/ContactForm';
import ContactText from '../components/ContactText';
import SubscriptionForm from '../components/SubscriptionForm';
import Title from '../components/Title';
import img_contact from '../media/contact.jpg';

function Contact() {

  const images = [
    {
      "id":1,
      image: img_contact,
      alt: "wall"
    }
  ]

  const textone = "<p>Please feel free to contact by filling in the contact form on this page, or emailing example@e.com</p><p>I appreciate hearing from people who enjoy my work.</p><p>If you are interested in a particular art, please contact me for more information. Limited edition fine art prints are available in the online store. My work is not offered for commercial licensing.</p><p>Please Follow me on Facebook and Instagram to keep up-to-date with my art, regular work-in-progress photos. My helpful tips that anyone who is interested in this art may find interesting.</p>";

  const textTwo = "<p>New subscribers to my mailing list receive 15% off their next store order, along with early notice of new releases, exclusive offers, and upcoming exhibitions. Your email address is kept private and confidential, and you may unsubscribe at any time.</p>";


  return (
    
    <div className="mb-24 mt-20">
      <Title title="Contact" />
      <div className="grid md:grid-cols-2 gap-2 p-10">
        <div className="md:col-span-2 pb-5 mb-5 pr-5">
          <img 
          className="w-full object-cover grayscale h-80" 
          src={images[0].image} 
          alt={images[0].alt} />
        </div>
        <div>  
          <ContactText text={textone} />
        </div>
        <div>
          <ContactForm />
        </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3 my-10 bg-gray-100 p-10">
          <div>
            <ContactText text={textTwo} />
          </div>
          <div>
            <SubscriptionForm />
          </div>
        </div>
    
    </div>
    
  )
}

export default Contact
