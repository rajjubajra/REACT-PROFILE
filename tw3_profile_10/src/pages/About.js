import {useEffect} from 'react';
import {SocialIcon} from 'react-social-icons';
import {gsap} from 'gsap';


const text = " <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae cumque delectus magni quasi ex repellendus. Ea reprehenderit corporis ex nulla fugit modi aliquid consectetur maxime eius, voluptatum hic, nihil illum!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquam hic nemo dignissimos eveniet tenetur explicabo similique nihil molestias et? Pariatur fugit, aperiam incidunt illum laborum deleniti ad iste dolorum.</p>"

const dance = "Dancing promotes confidence, self esteem, personal expression and flexibility of the body and mind."

const learning = "Learning to dance does not mean that your child ends up as a professional dancer";

function About() {
  
  useEffect(()=>{
    gsap.from('.fadeout', {duration:2, opacity: '0', ease: 'power2.in', stagger: 1.0});
  })

  return (
    <div className="w-full bg-gray-50">
      <div  className="w-full m:min-h-screen mt-24 md:grid md:grid-cols-2">

  {/** BOX 1 */}
        <div className="fadeout bg-gray-100">
          <div className="xl:p-32 py-20 px-10 md:h-96">
            <div className="text-3xl font-thin tracking-widest first-letter:text-6xl " dangerouslySetInnerHTML={{__html: dance}} />
            <div>
              <div className="mt-2 font-thin" dangerouslySetInnerHTML={{__html: learning}}></div>
            </div>
          </div>
        </div>
      
  {/** BOX 2 */}
        <div className="fadeout p-20">
          <h2 className="text-3xl mb-5 font-thin">About me</h2>
          <div className="font-thin tracking-wide grid gap-5" dangerouslySetInnerHTML={{__html: text}} />
        </div>

  {/** BOX 3 */}
        <div className="fadeout md:p-32 py-32 px-20 md:bg-white bg-gray-100">
          <h2 className="text-2xl font-thin tracking-wide py-5">Follow me:</h2>
          <div className="grid grid-flow-col-dense gap-2">
            <SocialIcon  bgColor="black"  url="https://www.facebook.com/" />
            <SocialIcon  bgColor="black"  url="https://www.youtube.com/" />
            <SocialIcon bgColor="black"   url="https://instagram.com/" />
          </div>
        </div>

  {/** BOX 4 */}
        <div className="fadeout md:bg-gray-100 bg-white md:h-96 xl:p-32 py-32 px-20">
          <h2 className="text-6xl font-thin pb-20">Hello.</h2>
          <p className="text-xs font-thin">Just keeping this simple</p>
          <p className="font-thin tracking-widest md:text-xl">Email: dancelesson@example.com</p>

        </div>

      </div>
      
    </div>
  )
}

export default About