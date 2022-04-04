import {useEffect, useState} from 'react';
import AboutConatiner from './AboutConatiner';
import {useSelector, useDispatch} from 'react-redux';
import { actionAboutPage } from '../redux/aboutpageSlice';


function AboutRemote() {

   /** FETCH DATA */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionAboutPage())
  },[dispatch])

  /** fetch data redux toolkit */
  const {
    aboutpage, 
    aboutpage_fetched, 
    aboutpage_loading
  } = useSelector(state => state.about_page);
  console.log(aboutpage, aboutpage_fetched, aboutpage_loading);


  /** Fetch data re-organise in to an new array */
  const [skillsTools, setSkillsTools] = useState([]);
  const [howDoIwork, setHowDoIwork]= useState([]);
  const [steps, setSteps] = useState([]);
  //console.log(skillsTools, howDoIwork, steps);

    
  /** FETCHED DATA RE-ARRANGE IN TO THE New Aarray  */
  /** How do I work Steps Array */
  useEffect(() => {
    const arrStp = [];
    console.log(arrStp)
    aboutpage_fetched && 
    aboutpage.included.length > 0 &&
    aboutpage.included.map(item=>{
      return item.type === 'paragraph--listing_itmes_with_title' &&
      arrStp.push({ 
        "step": item.attributes.field_list_title,
        "text": item.attributes.field_list_body.value
      })
    })
    setSteps(arrStp);
  },[aboutpage.included, aboutpage_fetched])
  /** Skills and Tools Array */
  useEffect(()=>{
    const arrSkl = [];
    aboutpage_fetched && 
    aboutpage.included.length > 0 &&
    aboutpage.included.map(item => {
      return item.type === 'paragraph--skill_and_tools' &&
      arrSkl.push({ 
        "id": item.id,
        "title": item.attributes.field_title,
        "text": item.attributes.field_yw_skills.value
      })
    })
    /** if localhost set fakedata else set actual data */
    setSkillsTools(arrSkl);
  },[aboutpage.included, aboutpage_fetched])
  /** How do I work Array */
  useEffect(()=>{
    const arrHow = [];
    aboutpage_fetched && 
    aboutpage.data.length > 0 &&
    aboutpage.data.map(item=>{
      return arrHow.push({ 
        "id": item.id,
        "title": item.attributes.field_how_do_i_work_title,
        "steps": steps
      })
    })
    setHowDoIwork(arrHow);
  },[aboutpage.data, aboutpage_fetched, steps])


  return (
    aboutpage_loading ? "loading...." :
    <AboutConatiner skillsTools={skillsTools} howDoIwork={howDoIwork} />
  )
}

export default AboutRemote