import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import ExploreBoxOne from '../components/ExploreBoxOne';
import ExploreBoxTwo from '../components/ExploreBoxTwo';
import {gsap} from 'gsap';


function Explore() {

  const images = useSelector(state => state.fetchdata.value);

  

  useEffect(() => {
    gsap.from('.fadeout' , {duration:2, opacity: '0', ease: 'power2', stagger: 1.0})
  })
  




  console.log(images);

  return (
    <div className="w-full flex justify-center my-10">
      <div className="max-w-screen-xl mt-24">
        <ul className="grid md:gap-10 gap-5 md:grid-cols-2">
          <li className="fadeout">
            <ExploreBoxOne 
            image={images.length >0 && images[0].url} 
            alt={images.length> 0 && images[0].alt} />
          </li>
          <li className="fadeout">
            <ExploreBoxTwo
              image={images.length >0 && images[1].url} 
              alt={images.length> 0 && images[1].alt} />
          </li>
          <li className="fadeout">
          <ExploreBoxTwo 
            image={images.length >0 && images[2].url} 
            alt={images.length> 0 && images[2].alt} />
          </li>
          <li className="fadeout">
            <ExploreBoxOne 
              image={images.length >0 && images[0].url} 
              alt={images.length> 0 && images[0].alt} />
          </li>
          <li className="fadeout">
          <ExploreBoxOne 
            image={images.length >0 && images[1].url} 
            alt={images.length> 0 && images[1].alt} />
          </li>
          <li className="fadeout">
          <ExploreBoxTwo 
            image={images.length >0 && images[0].url} 
            alt={images.length> 0 && images[0].alt} />
          </li>
          <li></li>
        </ul>  
      </div>
    </div>
  )
}

export default Explore
