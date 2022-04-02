import {useState} from 'react';
import ShopCardRate from '../components/ShopCardRate';

function ShopCard({img, alt, id}) {


  const [item, setItem] = useState('');
  


const handleCard = (id) => ( setItem(id));
//console.log(item, id);

  return (
    <div className="relative flex justify-center items-center">
        <img 
            className="w-80 h-80 object-cover" 
            src={img} 
            alt={alt}  
        />
        {
        
        <div 
        onMouseOver={()=>handleCard(id)}
        onMouseLeave={()=>handleCard('')}
        className={`w-80 h-80 absolute top-0 flex justify-center items-end pb-10 ${id === item && 'bg-white/50'}`}>

        { id === item && <ShopCardRate  rate={'200.00'} />}
        
        </div>
        }
      </div>
  )
}

export default ShopCard
