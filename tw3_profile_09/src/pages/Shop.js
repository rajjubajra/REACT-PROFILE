import ShopCard from '../components/ShopCard';
import Title from '../components/Title';
import img_gallery_1 from '../media/gallery-1.jpg';
import img_gallery_2 from '../media/gallery-2.jpg';
import img_gallery_3 from '../media/gallery-3.jpg';
import img_gallery_4 from '../media/gallery-4.jpg';
import img_gallery_5 from '../media/gallery-5.jpg';
import img_gallery_6 from '../media/gallery-6.jpg';
import img_gallery_7 from '../media/gallery-7.jpg';
import img_gallery_8 from '../media/gallery-8.jpg';
import img_gallery_9 from '../media/gallery-9.jpg';


const text = [
  {"id": 1,
   "title": "Store",
   "text": "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit molestiae error ea neque odio a quasi voluptas laudantium asperiores obcaecati deleniti nostrum quo nulla voluptates, vitae hic rerum velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur reiciendis quod ex dolor, tempora voluptas? Corrupti rem dolorem odio quae quasi quam vitae, iusto, illo accusantium, iure harum pariatur.</p><p>Amet consectetur, adipisicing elit. Fugit molestiae error ea neque odio a quasi voluptas laudantium asperiores obcaecati deleniti nostrum quo nulla voluptates, vitae hic rerum velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur reiciendis quod ex dolor, tempora voluptas? Corrupti rem dolorem odio quae quasi quam vitae, iusto, illo accusantium, iure.</p>"
  }
]

const images = [
  {
    id: 1,
    image: img_gallery_1,
    alt: "gallery",
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

function Shop() {

  return (
    
      <div className="mb-24 mt-20">
      <Title title={text[0].title} />
      <div className="font-thin my-10">
        <div 
        className="grid gap-5 px-20" 
        dangerouslySetInnerHTML={{__html: text[0].text}} />        
      </div>
      
      <div>
          <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {
            images.map((item,index)=>{
              return(
                <ShopCard 
                key={index} 
                img={item.image} 
                alt={item.alt} 
                id={item.id} 
                />
              )
            })
          }
          </div>
      </div>
      
      </div>
  
  )
}

export default Shop;
