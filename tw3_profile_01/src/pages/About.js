import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Korea from '../images/korea.jpg';
import ArrowLeft from '../components/ArrowLeft';
import ArrowRight from '../components/ArrowRight';
import gsap from 'gsap';

function About() {

  useEffect(()=>{ 
    gsap.from('.heroImage',{duration: 1.5, opacity: '0', ease: 'power2.in'})

    gsap.from('.pagetitle',{ duration: 1.0, y: '50%', opacity:'0', delay: 1 })
    
  },[]);

  return (
    <div className="static">
    <img src={Korea} alt="pottery" className="heroImage" />
        <div className="arrow-wrapper">
            <div className="left-right-nav-arrow left-4">
              <Link to='/' className="flex">
              <ArrowLeft /> Home
              </Link>
            </div>
            <div className="left-right-nav-arrow right-4">
              <Link to="/works" className="flex">
              Works <ArrowRight /> 
              </Link>
            </div>
            <div className="pagetitle">
              <h1>About...</h1>
            </div>
        </div>


        <div className="text-wrapper">
          <h1>About</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quos vitae odio consequuntur, repellendus vel aspernatur, iusto ea similique quisquam esse eius pariatur dicta placeat voluptas ab reprehenderit. Asperiores porro dicta eveniet distinctio quaerat perferendis veniam possimus dolorem iusto odit totam quisquam error, natus, sapiente doloribus architecto eos placeat reiciendis accusantium officia vitae iste excepturi! Culpa neque eius necessitatibus libero porro harum nobis quasi nam, atque dolore tempora asperiores nemo saepe quas ipsam quaerat at beatae vitae commodi doloremque unde voluptatem qui ullam a? Ex iste asperiores numquam ut impedit animi expedita architecto officiis recusandae consequatur inventore nisi a ad cupiditate nobis repellat soluta, ipsum dignissimos. Voluptatem et maiores omnis vero nostrum odit veritatis sint consectetur velit veniam laboriosam vel eos porro officiis magnam quia dolorum perferendis, eum pariatur quidem inventore rem iusto. Sed iusto accusantium minus perferendis, odit porro, beatae ex in suscipit sit ea at, quam neque vel. Debitis veritatis ipsam, fugit obcaecati excepturi odio delectus dignissimos error earum quaerat ab corporis saepe exercitationem ad at, rerum esse, eligendi molestias aliquid illum culpa quisquam. Ex optio pariatur reiciendis sit ut voluptatibus odio sapiente cum illo quisquam deleniti blanditiis est harum nam sint tempora quis natus quo, earum iusto possimus, officiis accusamus non. Velit quod voluptates atque amet fugit voluptatibus doloremque provident libero adipisci officia ut ab cumque cupiditate repellendus magni, enim beatae iusto earum et! Saepe atque harum porro quos reiciendis. Sequi id mollitia blanditiis accusamus nemo soluta veniam fugit? Sit esse maxime ut? Atque minus, vitae nemo quod, in eius ratione nostrum sit voluptate doloribus omnis delectus veritatis. Pariatur dignissimos tempora fugiat esse facilis nisi, officia accusantium incidunt non laboriosam mollitia assumenda excepturi hic earum quidem aliquam aut voluptate, odio necessitatibus unde. Beatae odit recusandae quod ea autem magnam odio voluptatem itaque necessitatibus, ipsam quam eos est blanditiis reiciendis eum dignissimos quasi dolorem delectus modi, aliquid qui sunt maiores! Placeat aliquid ab dolore ipsum reiciendis fuga vel amet asperiores delectus quas facere dolor, dolorem omnis natus labore. Ullam alias iure molestiae omnis, error laborum adipisci, ut, laboriosam deleniti dolorum eveniet hic? Consequuntur iure quas porro distinctio officiis nihil nulla voluptas dolorem nisi, illum aliquid sunt dolor soluta quibusdam perspiciatis repudiandae at quis? Dolorum itaque amet, in numquam impedit sapiente provident quos, perferendis pariatur necessitatibus corrupti reiciendis earum quasi veritatis, autem nam quisquam laboriosam ea soluta iste minus quam. Expedita aspernatur necessitatibus fuga, quisquam, natus ullam voluptatum amet ipsa facere debitis architecto harum aliquid, odit autem quia sapiente nisi explicabo possimus? Numquam et corporis omnis tempora quae distinctio nemo veniam voluptatem delectus deleniti? Quibusdam, hic possimus voluptatem dolor quis sunt ipsa fugiat. Unde nihil inventore eaque quaerat, praesentium aliquam amet voluptates perspiciatis facilis rerum. Accusamus illum praesentium iure deserunt quae saepe rem consequatur ipsum numquam voluptatum a laborum asperiores dolores vero architecto similique, omnis nemo qui consequuntur itaque illo natus! Quibusdam illo tempore ad facilis repellat blanditiis perspiciatis nisi facere suscipit adipisci numquam sequi delectus aliquid voluptatum modi sed at quod tenetur, rerum recusandae beatae earum accusamus. Minima.
        </div>


  
    </div>
  )
}

export default About
