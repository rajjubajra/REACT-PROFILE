import SocialIcons from '../components/SocialIcons';
import {Link} from 'react-router-dom';
import img_landing_1 from '../media/landing-1.jpg';



function Home() {

  const images = [
    {
      "id": 1,
      url: img_landing_1,
      alt: "Landing page"
    }
  ]


  return (
    <>
    <div className="w-full min-h-screen grid md:grid-cols-2 ">

{/** grid - 1  */}
      <div className="md:order-1 order-2 w-full flex justify-center items-center">
        <div>
          <h1 className="text-5xl font-thin tracking-widest first-letter:text-9xl">Artist</h1>

          {/** ENTER LINK */}
          <p className="md:my-5 -my-3 font-light tracking-widest text-red-600 uppercase cursor-pointer ">
            <Link to="/gallery">Please Enter</Link>
          </p>

          {/** SOCIAL ICONS */}         
          <div className="md:m-0 mt-5">
            <SocialIcons />
          </div>
        </div>
</div>

  {/** grid - 2 */}      
      <div className="md:order-2 order-1 w-full flex justify-center items-center">
        <div style={{backgroundImage:"url('" + window.location.origin + images[0].url + "')"}} 
        className={`md:w-1/2 md:h-2/3 w-2/3 h-32 grayscale bg-no-repeat border-8 border-black bg-cover bg-right`}></div>
      </div>
    </div>
    </>
  );
}

export default Home