import {useEffect, useState} from 'react';

import AboutConatiner from './AboutConatiner';


const local_skills_tools = [
  {
    "id": 1, 
    "title": "An Artist",
    "text": "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, consequatur deleniti facilis rem, natus illo amet voluptatem, magnam laborum quis nemo pariatur perferendis distinctio ut harum nulla totam nisi dicta</p><p>Sit amet consectetur adipisicing elit. Eos, consequatur deleniti facilis rem, natus illo amet voluptatem, magnam laborum quis nemo pariatur perferendis distinctio ut harum nulla totam nisi dicta.</p>"
  },
  {
    "id": 2, 
    "title": "My Colour",
    "text": "<p>Rem ipsum, dolor sit amet consectetur adipisicing elit. Eos, consequatur deleniti facilis rem, natus illo amet voluptatem, magnam laborum quis nemo pariatur perferendis distinctio ut harum nulla totam nisi dicta.</p>"
  }
  
]


const local_howdoIwork = [
  {
    "id": 1,
    "title": "How do I work",
    "steps": [
      {
        "step": 1,
        "text": "Step One"
      },
      {
        "step": 2,
        "text": "Step Two"
      },
      {
        "step": 3,
        "text": "Step Three"
      },
    ]
  }
]


function AboutLocal() {
 
  /** Fetch data re-organise in to an new array */
  const [skillsTools, setSkillsTools] = useState([]);
  const [howDoIwork, setHowDoIwork]= useState([]);
  
  useEffect(()=>{
    setSkillsTools(local_skills_tools) 
    setHowDoIwork(local_howdoIwork)
  },[])


  return (
    <AboutConatiner skillsTools={skillsTools} howDoIwork={howDoIwork} />
  )
}

export default AboutLocal