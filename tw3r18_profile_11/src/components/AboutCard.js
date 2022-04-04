import React from 'react'

function AboutCard({skillsTools}) {

  return (
      skillsTools.length > 0 &&
      skillsTools.map((item,index)=>{
      return <div key={index} className="my-3">
        <h3 className="about uppercase pb-2 tracking-widest font-light">
          {item.title}</h3>
          <div className="text font-thin">
            <div dangerouslySetInnerHTML={{__html: item.text}} />
          </div>
        </div>
    })
    
    
  )
}

export default AboutCard
