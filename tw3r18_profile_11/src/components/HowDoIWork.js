import React from 'react'

function HowDoIWork({data}) {
  
  console.log(data);

  return (
    <div>
      {
      data.length > 0 &&
      data.map((item, index)=>{
        return <div key={index}>
        <h3 className="about uppercase pb-2 tracking-widest font-light">{item.title}</h3>
        <ul className="flex md:flex-row flex-col">
        {
          item.steps.map((step, i)=>{
            return <li key={i} className="about w-full border-b mb-2 md:m-5">
              <div className="w-full flex md:flex-row justify-center">
                <span className="md:w-20 w-10 md:h-20 h-10 
                md:bg-gray-900 bg-gray-300
                text-white 
                rounded-full 
                font-bold flex justify-center items-center 
                md:font-light md:text-5xl">{step.step}
                </span>
              </div>  
              <div className="md:text-center md:font-light font-thin py-3">{step.text}</div>        
            </li>
          })
        }
        </ul>
        </div>
      })
      }
    </div>
  )
}

export default HowDoIWork


/**
 * <li className="w-full border-b">
        <div className="w-full flex justify-center">
          <span className="w-20 h-20 bg-gray-900 text-white rounded-full flex justify-center items-center text-5xl">step</span>
        </div>  
        <div className="text-center py-3">text</div>        
    </li>
 */