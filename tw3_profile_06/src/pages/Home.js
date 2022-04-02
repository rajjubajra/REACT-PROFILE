import React from 'react';

import HomeBlock from '../component/HomeBlock';
import bed from '../media/bed.jpg';
import chair2 from '../media/chairs-2.jpg';
import chairs from '../media/chairs.jpg';
import furniture1 from '../media/furniture-1.jpg';
import livingroom from '../media/living-room.jpg';
import chair3 from '../media/chair-3.jpg';
import chair4 from '../media/chair-4.jpg';
import chair5 from '../media/chair-5.jpg';



function Home() {

  const title = "Sit amet consectetur";
  const text = "Rpsum dolor sit amet consectetur";
  const alt = "test";
  return (
    <div className="grid lg:grid-cols-3 xl:grid-cols-4 place-content-center gap-5">
      <HomeBlock image={bed} alt={alt} title={title} text={text} />
      <HomeBlock image={chair2} alt={alt} title={title} text={text} />
      <HomeBlock image={chairs} alt={alt} title={title} text={text} />
      <HomeBlock image={furniture1} alt={alt} title={title} text={text} />
      <HomeBlock image={livingroom} alt={alt} title={title} text={text} />
      <HomeBlock image={chair3} alt={alt} title={title} text={text} />
      <HomeBlock image={chair4} alt={alt} title={title} text={text} />
      <HomeBlock image={chair5} alt={alt} title={title} text={text} />
    </div>
  );

}

export default Home
