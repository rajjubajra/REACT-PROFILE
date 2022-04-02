import React from 'react'
import PressBlock from '../components/PressBlock';
import press1 from '../media/press-1.jpg';
import press2 from '../media/press-2.jpg';
import press3 from '../media/press-3.jpg';
import Title from '../components/Title';

function Press() {
  return (
    <div className="xl:mx-10 my-20">
      <div className="pb-10">
        <Title title="Press" />
      </div>
      <PressBlock image={press1} />
      <PressBlock image={press2} />
      <PressBlock image={press3} />
      
    </div>
  )
}

export default Press
