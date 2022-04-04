import {useState, useEffect} from 'react';
import {baseurl} from '../redux/config';
import axios from 'axios';
import gsap from 'gsap';


function ContactForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submit, setSubmit] = useState(false);


  useEffect(()=>{
    gsap.from('.fadeOut', {delay: 0.5, opacity: 0, transform: "translateY(-5rem)", duration:1})
  },[submit])
  

  const handleSubmit = async (e) => {

    e.preventDefault(); 

    const data = {
      "webform_id": "ask_me_form",
      "name":name,
      "email": email,
      "subject": subject,
      "message": message
    }

    await axios({
      method: 'GET',
      url: `${baseurl.URL}/session/token`,
      headers: {
        'Accept': 'application/vnd.api+json',
      }
    })
    .then(response => {
      submitMsg(response.data)
      console.log("console - 1",response)
    })
    .catch(err => console.log("Token Err", err))
    
    function submitMsg(token){
      axios({
        method: 'post',
        url: `${baseurl.URL}/webform_rest/submit?_format=json`,
        headers:{
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/json',
          'X-CSRF-Token': token
        },
        data: data
      })
      .then((res)=> {
        console.log("console - 2",res)
        res.status === 200 && getSubmission(token, res.data.sid)
        res.status === 200 && setSubmit(true)
      })
      .catch(err => console.log("SUBMIT FAIL ERROR ",err))
    }

    function getSubmission(token, sid){
        console.log("console - 3", token);
        axios({
          method: 'GET',
          url: `${baseurl.URL}/webform_rest/ask_me_form/submission/${sid}?_format=json`,
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': token
          }
        })
        .then(res => {
          console.log("console - 4",res)
          getWebformSubmission(token, res.data.entity )
        })
        .catch(err => console.error(err))
    }

    function getWebformSubmission(token, uuid) {
      console.log("console - 5 ",token, uuid.uuid[0].value);
      axios({
        method: 'GET',
        url: `${baseurl.URL}/webform_rest/ask_me_form/submission/${uuid.uuid[0].value}`,
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': token
        }
      })
      .then(res => {
        console.log("console - 6",res)
        getAskMeForm(token)
      })
      .catch(err => console.error(err))
    }

    function getAskMeForm(token){
      axios({
        method: 'GET',
        url: `${baseurl.URL}/jsonapi/webform_submission/ask_me_form`,
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'X-CSRF-Token': token
        }
        })
        .then(res => console.log("console - 7 ",res))
        .catch(err => console.error(err)) 
    }


  }//handleSubmit closed



  return (
    <div className="md:w-1/2 px-8 md:px-0 m-auto">
    {
      submit
      ? <div className="fadeOut p-10 mt-20 font-light">
        Thank you. Your message has been submitted</div>
      : <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 gap-8">
          <div className="lg:col-span-2 col-span-4">
            <input 
            required
            className="w-full py-2 px-1 border-b border-gray-900 placeholder:text-gray-900 placeholder:font-thin outline-none" 
            type="text" 
            placeholder="Name" 
            onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="lg:col-span-2 col-span-4">
            <input 
            required
            className="w-full py-2 px-1 border-b border-gray-900 placeholder:text-gray-900 placeholder:font-thin outline-none" 
            type="text" 
            placeholder="Email" 
            onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="col-span-4">
            <input 
            className="py-2 px-1 border-b border-gray-900 w-full placeholder:text-gray-900 placeholder:font-thin outline-none" 
            type="text" 
            placeholder="Subject" 
            onChange={(e)=>setSubject(e.target.value)} />
          </div>
          <div className="col-span-4">
            <textarea 
            required
            className="w-full py-2 px-1 h-40 border-b border-gray-900 placeholder:text-gray-900 placeholder:font-thin outline-none"   placeholder="Message"
            onChange={(e)=>setMessage(e.target.value)}
            ></textarea>
          </div> 
          <div className="w-full col-span-4">
            <button className="w-full py-2 text-gray-200 font-light uppercase tracking-widest bg-gray-900">Submit</button>
          </div>
        </div>
      </form>
    }
    </div>
  )
}

export default ContactForm