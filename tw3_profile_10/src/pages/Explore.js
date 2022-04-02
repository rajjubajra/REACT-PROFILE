import {useEffect, useState} from 'react';
import ExploreBoxOne from '../components/ExploreBoxOne';
import ExploreBoxTwo from '../components/ExploreBoxTwo';
import img_landing_1 from '../media/landing-1.jpg';
import img_landing_2 from '../media/landing-2.jpg';
import img_landing_3 from '../media/landing-3.jpg';
import img_landing_4 from '../media/landing-4.jpg';
import {gsap} from 'gsap';



const data = [
  {
    "id": 1,
    "url": img_landing_1,
    "alt": "landing-1",
    "text": "Ipsum dolor sit amet, consectetur adip"
  },
  {
    "id": 2,
    "url": img_landing_2,
    "alt": "landing-2",
    "text": "Dolor sit lorem ipsum  consectetur adip"
  },
  {
    "id": 3,
    "url": img_landing_3,
    "alt": "landing-3",
    "text": "Consectetur lor sit lorem ipsum adip "
  },
  {
    "id": 4,
    "url": img_landing_4,
    "alt": "landing-3",
    "text": "Consectetur lor sit lorem ipsum adip "
  }
]


function Explore() {
//const images = useSelector(state => state.fetchdata.value);

  const [images, setImages] = useState([]);
  useEffect(()=>{
      setImages(data);
  },[])
  

  useEffect(() => {
    gsap.from('.fadeout' , {duration:2, opacity: '0', ease: 'power2', stagger: 1.0})
  })
  


  function isEven(numbers) {
    if (numbers % 2 == 0) {
        return true;
    }
    return false;
  }
  console.log(images);

  return (
    <div className="w-full flex justify-center my-10">
      <div className="max-w-screen-xl mt-24 mr-5">
        <ul className="grid md:gap-10 gap-5 md:grid-cols-2">
          {
            images.length > 0 &&
            images.map((item, index )=> {
              return isEven(index)                 
              ? <li className="fadeout">
                <ExploreBoxOne image={item.url} alt={item.alt}  text={item.text} /></li>
              : <li className="fadeout">
                <ExploreBoxTwo image={item.url} alt={item.alt} text={item.text} /></li>
            } ) 
          }
        </ul>  
      </div>
    </div>
  )
}

export default Explore
