import {useState, useEffect} from 'react';
import {baseurl} from '../redux/config';
import axios from 'axios';
import gsap from 'gsap';
import {useSelector, useDispatch} from 'react-redux';
import {actionAskMeForm} from '../redux/askMeFormSlice';
import ContactFormContainer from './ContactFormContainer';

function ContactFormRemote() {

  const dispatch = useDispatch();

  /** form submit values */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submit, setSubmit] = useState(false);

  /** gsap animation */
  useEffect(()=>{
    gsap.from('.fadeOut', {delay: 0.5, opacity: 0, transform: "translateY(-5rem)", duration: 1})
  },[submit])
  
  /** form submit handler */
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
      console.log("console - 1", response)
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


  /** Confirmation Message display */
  const [confMsg, setConfMsg] = useState('');
  useEffect(()=>{
    dispatch(actionAskMeForm());
  },[dispatch])

  const {
    askmeform, 
    askmeform_fetched, 
    askmeform_loading} 
    = useSelector(state => state.askme_form);
  
  console.log(askmeform, askmeform_fetched, askmeform_loading);

  useEffect(() => {
    askmeform_fetched && 
    setConfMsg(askmeform.included[0].attributes.settings.confirmation_message);
  },[askmeform.included, askmeform_fetched])


  return (
    <ContactFormContainer 
    submit={submit} 
    confMsg={confMsg}
    handleSubmit={handleSubmit}
    setName={setName}
    setEmail={setEmail}
    setSubject={setSubject}
    setMessage={setMessage}
    />)
}

export default ContactFormRemote