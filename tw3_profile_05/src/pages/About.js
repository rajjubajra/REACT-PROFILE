import {useRef} from 'react'
import stair1 from '../media/stair-1.jpg';
import staircase from '../media/staircase.jpg';
import wall from '../media/wall.jpg';
import roomgca from '../media/room-gca.jpg';
import plant42 from '../media/plant-42.jpg';
import LatestJournal from '../components/LatestJournal';
import FeatureOnLink from '../components/FeatureOnLink';
import ForbesLogo from '../media/forbes-logo.webp';
import mediumLogo from '../media/medium-logo.webp';
import dominoLogo from '../media/domino-logo.webp';
import apartLogo from '../media/apartment-therapy-logo.webp';
import paperFlower from '../media/paper-flower.jpg';
import DailyUpdate from '../components/DailyUpdate';

function About() {

  const ref = useRef();
  // const scroll = (scrollOffset) => {
  //   ref.current.scrollLeft += scrollOffset;
  // };


  return (
    <div>

{/** CONTAINER - 1 */}
      <div className="grid md:grid-cols-3">
        <div className="w-full flex justify-center items-center h-auto
        border-gray-400/50 border border-t-0 border-b-0 border-l-0 md:border-left">
          <img className="md:w-1/2 w-3/4 mb:mb-0 mb-5 border-4 border-white drop-shadow-xl" src={stair1} alt="paper flower" />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:w-2/3 w-3/4 font-thin filst-letter:uppercase first-letter:font-bold mb-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptas, nobis iure, atque dolore asperiores accusamus reprehenderit ea, minus eaque neque sit eligendi porro assumenda voluptatibus placeat quaerat ab commodi rem. Atque odit facere magni quas provident, ullam ex nulla animi maiores cupiditate quidem iste culpa at quis amet alias officia? Perferendis quae corporis possimus perspiciatis</p>
          </div>
        </div>
        <div>
          <img className="w-full h-auto" src={staircase} alt="paper flower" />
        </div>
      </div>

{/** CONTAINER - 2 */}

      <h2 className="md:mx-20 ml-5 mt-20 text-3xl font-thin">Latest on the Journal/.</h2>
      <div className="md:mx-20 mb-20 md:px-20 px-10 bg-gray-50 py-10">
        <div className="grid md:grid-cols-3 gap-20">
          <LatestJournal image={roomgca} title={"Atque odit"} comments={2} likes={10} />
          <LatestJournal image={wall} title={"Voluptatibus placeat"} comments={3} likes={20} />
          <LatestJournal image={plant42} title={"Cupiditate quidem"} comments={0} likes={6} />
        </div>
      </div>

{/** CONTAINER - 3 */}

      <div className="my-20">
        <h2 className="md:mx-20 ml-5 mt-20 mb-4 text-3xl font-thin">Featured on/.</h2>
        <ul className="md:mx-20 md:flex grid grid-cols-2 gap-5 m-5">
          <li className="mr-5">
            <FeatureOnLink link={"https://www.forbes.com"} logo={ForbesLogo} />
          </li>
          <li className="mr-5">
            <FeatureOnLink link={"https://medium.com"} logo={mediumLogo} />
          </li>
          <li className="mr-5">  
            <FeatureOnLink link={"https://domino.com"} logo={dominoLogo} />
          </li>
          <li className="mr-5">
            <FeatureOnLink link={"https://apartmenttherapy.com"} logo={apartLogo} />
          </li>
        </ul>
      </div>


{/** CONTAINER - 4 */}
      <div>
      <h2 className="md:mx-20 ml-5  mt-20 mb-4 text-3xl font-thin"> Daily Updates/.</h2>
        <div ref={ref} className="w-auto flex overflow-auto whitespace-nowrap">
          <DailyUpdate image={paperFlower} alt="paper flower" /> 
          <DailyUpdate image={paperFlower} alt="paper flower" /> 
          <DailyUpdate image={paperFlower} alt="paper flower" /> 
          <DailyUpdate image={paperFlower} alt="paper flower" /> 
          <DailyUpdate image={paperFlower} alt="paper flower" /> 
          <DailyUpdate image={paperFlower} alt="paper flower" /> 
          <DailyUpdate image={paperFlower} alt="paper flower" /> 
          <DailyUpdate image={paperFlower} alt="paper flower" /> 
          <DailyUpdate image={paperFlower} alt="paper flower" /> 
          <DailyUpdate image={paperFlower} alt="paper flower" /> 
          <DailyUpdate image={paperFlower} alt="paper flower" /> 
          <DailyUpdate image={paperFlower} alt="paper flower" /> 
        </div>
      </div>      

    </div>
  )
}

export default About
