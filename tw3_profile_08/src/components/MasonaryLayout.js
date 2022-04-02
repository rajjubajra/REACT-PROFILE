import React from 'react';
import Masonry from 'react-masonry-component';
import blog1 from '../media/blog-1.jpg';
import blog2 from '../media/blog-2.jpg';
import blog3 from '../media/blog-3.jpg';
import blog4 from '../media/blog-4.jpg';
import blog5 from '../media/blog-5.jpg';
import blog6 from '../media/blog-6.jpg';
import team from '../media/team.jpg';
import chef from '../media/chef.jpg';
import landing1 from '../media/landing-1.jpg'
import landing2 from '../media/landing-2.jpg'
import landing3 from '../media/landing-3.jpg'
import landing4 from '../media/landing-4.jpg'



const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

function MasonaryLayout(){

    //const [images, setImages] = useState('');
    
    // const childElements = imgData.map(function(element){
    //         return (
    //             <li className="image-element-class">
    //                 <img src={element.img} alt="blog 1" />
    //             </li>
    //         );
    //     });

    // useEffect(()=>{
    //     setImages(childElements);        
    // },[])   

    
        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                <img className="w-96 m-2" src={blog1} alt="blog1" />
                <img className="w-96 m-2" src={blog2} alt="blog2" />
                <img className="w-96 m-2" src={blog3} alt="blog3" />
                <img className="w-96 m-2" src={blog4} alt="blog4" />
                <img className="w-96 m-2" src={blog5} alt="blog5" />
                <img className="w-96 m-2" src={blog6} alt="blog6" />
                <img className="w-96 m-2" src={team} alt="team" />
                <img className="w-96 m-2" src={chef} alt="blog7" />
                <img className="w-96 m-2" src={landing1} alt="landing1" />
                <img className="w-96 m-2" src={landing2} alt="landing2" />
                <img className="w-96 m-2" src={landing3} alt="landing3" />
                <img className="w-96 m-2" src={landing4} alt="landing4" />
                
            </Masonry>
        );
    
}

export default MasonaryLayout;