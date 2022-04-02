import React from 'react';
import MasonaryLayout from '../components/MasonaryLayout';
import Title from '../components/Title';


function Gallery() {


  return (
    <div className="xl:mx-10 my-20">
      <Title title="Gallery" />
      <div className="xl:max-w-screen-xl m-auto">
        
          <MasonaryLayout />
        
      </div>
      
    </div>
  )
}

export default Gallery
