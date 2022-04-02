
import Title from '../components/Title';
import GalleryCard from '../components/GalleryCard';
import img_gallery_1 from '../media/gallery-1.jpg';
import img_gallery_2 from '../media/gallery-2.jpg';
import img_gallery_3 from '../media/gallery-3.jpg';
import img_gallery_4 from '../media/gallery-4.jpg';
import img_gallery_5 from '../media/gallery-5.jpg';
import img_gallery_6 from '../media/gallery-6.jpg';
import img_gallery_7 from '../media/gallery-7.jpg';
import img_gallery_8 from '../media/gallery-8.jpg';
import img_gallery_9 from '../media/gallery-9.jpg';




const images = [
  {
    id: 1,
    image: img_gallery_1,
    alt: "gallery"
  },
  {
    id: 2,
    image: img_gallery_2,
    alt: "gallery"
  },
  {
    id: 3,
    image: img_gallery_3,
    alt: "gallery"
  },
  {
    id: 4,
    image: img_gallery_4,
    alt: "gallery"
  },
  {
    id: 5,
    image: img_gallery_5,
    alt: "gallery"
  },
  {
    id: 6,
    image: img_gallery_6,
    alt: "gallery"
  },
  {
    id: 7,
    image: img_gallery_7,
    alt: "gallery"
  },
  {
    id: 8,
    image: img_gallery_8,
    alt: "gallery"
  },
  {
    id: 9,
    image: img_gallery_9,
    alt: "gallery"
  },

]


function Gallery() {  

  //console.log(window.location.host);

  return (
    
    <div className="mb-24 mt-20">
      <Title title="Gallery" />
      <div>
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            images.map((item,index)=>{
              return <GalleryCard image={item.image} alt={item.alt} index={index} />
            })
          }
          </div>
      </div>
      
    </div>
    
  )
}

export default Gallery
