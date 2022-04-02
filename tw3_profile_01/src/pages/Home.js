import React,{ useEffect} from 'react'
import {Link} from 'react-router-dom';
import pottery from '../images/pottery.jpg';
import ArrowLeft from '../components/ArrowLeft';
import ArrowRight from '../components/ArrowRight';
import gsap from 'gsap';





function Home() {



  useEffect(()=>{ 

    gsap.from('.heroImage',{duration: 1.5, opacity: '0', ease: 'power2.in'})

    gsap.from('.pagetitle',{ duration: 1.0, y: '50%', opacity:'0', delay: 1 })

  },[]);




  
  return (
    <div className={ `static`} >
      
  

      <div>
        <div className="img-container">
          <img src={pottery} alt="pottery" 
          className="heroImage" />
        </div>
      </div> 


      <div className={`arrow-wrapper`} >

        <div className="left-right-nav-arrow left-4">
          
          <Link to='/contact' className="flex">
          <ArrowLeft /> Get in touch
          </Link>
        </div>

        <div className="left-right-nav-arrow right-4">
          <Link to="/About" className="flex">
          About <ArrowRight />
          </Link>
        </div>
        <div className="pagetitle">
          <h1>Welcome...</h1>
        </div>
      </div> 

      <div className="text-wrapper">
        <h1>Welcome</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quas? Aperiam sit, illum laudantium earum minima voluptatum, alias voluptates consequatur perferendis dolorem impedit? Fuga necessitatibus, numquam recusandae quibusdam odit, aspernatur veniam cum dignissimos eum fugiat eaque qui rerum placeat eos exercitationem ex voluptas libero autem rem voluptatem harum odio? Ducimus mollitia voluptatibus rem, soluta explicabo optio voluptatum aliquam? Iusto soluta labore tempore ab delectus quos eum animi vero maiores dicta illo hic possimus cum, ducimus omnis, sed at obcaecati laborum nobis quas rem et distinctio aperiam sunt. Id qui natus vel pariatur unde recusandae ipsam eos nihil, laborum magnam, quibusdam incidunt molestias autem doloremque soluta totam alias optio corrupti dolore voluptatum quam expedita veritatis similique. Ducimus, ipsa est dolorum culpa vel perspiciatis nam maiores porro accusantium animi accusamus illo expedita architecto cupiditate eveniet, eum tenetur at! Ex ad, non voluptate saepe aliquid placeat blanditiis rem quos temporibus quaerat autem vel labore pariatur, mollitia nobis sint facilis perferendis consectetur est magnam. Porro, velit odit illum itaque earum eaque necessitatibus ut quibusdam! Eaque in nihil necessitatibus, rerum laboriosam nulla dignissimos repudiandae beatae facilis expedita omnis, velit eligendi quae enim repellat. Deserunt exercitationem dignissimos voluptas id tenetur beatae accusamus aliquid dicta. Ipsam molestias veritatis quis, voluptates placeat, rerum nemo et harum culpa aliquid cum aut fugiat voluptate praesentium aliquam, necessitatibus delectus unde? Neque, amet dolorem possimus facilis quam officia cumque obcaecati fugit enim minus sapiente aut est, officiis commodi cum. Optio labore cupiditate aliquam, nobis nisi pariatur minus autem officiis possimus hic eum, consectetur reiciendis libero quia omnis eaque quo nihil earum quam, dolore soluta rerum dicta perferendis quasi. Aliquam suscipit libero distinctio iste quasi inventore facere debitis nisi, itaque consequuntur quis consequatur voluptas. Quaerat quibusdam voluptate doloribus sed illo odio perspiciatis eveniet soluta, sunt exercitationem reiciendis, voluptatum laborum. Voluptatibus quia obcaecati placeat?
      </div>

    </div>
  )
}

export default Home