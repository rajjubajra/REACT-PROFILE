import {useState} from 'react';


function HomeBlock({title, text, image, alt}) {


  const [textVeiw, setTextVeiw] = useState(false);

  //console.log(textVeiw);

  return (
    <div className="relative" 
    onMouseEnter={() => setTextVeiw(true)} 
    onMouseLeave={() => setTextVeiw(false)}>
        <img className="w-full object-cover h-80" src={image} alt={alt} />
        <div className="absolute top-1/2 w-full flex justify-center">
          <div className={textVeiw ? 'bg-white/60 p-10' : 'hidden'}>
            <h2>{title}</h2>
            <div className="text-sm font-thin">
              <div dangerouslySetInnerHTML={{__html: text}} />
            </div>
          </div>
        </div>    
    </div>
  )
}

export default HomeBlock
