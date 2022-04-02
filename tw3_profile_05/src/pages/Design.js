import React from 'react';
import DesignBlock from '../components/DesignBlock';
import PaperFlower from '../media/paper-flower.jpg';
import lantern from '../media/lantern.jpg';
import statues from '../media/statues.jpg';
import Stair from '../media/stair.jpg';
import Door from '../media/door.jpg';
import tea from '../media/tea.jpg';
import teapot from '../media/teapot.jpg'



function Design() {

  const title = "Lorem ipsum dolor sit amet consectetur";
  const text = "<p>Uorem ipsum dolor sit amet consectetur adipisicing elit. Labore eum non explicabo veritatis, est aspernatur, officia corporis dignissimos magnam quo accusamus expedita, unde libero reiciendis. Repellendus beatae totam aliquam. Deleniti...</p>";

  return (
    <div className="grid gap-10">
      <div>
        <DesignBlock text={text} title={title}  image={statues}  comments={3} link={`#`} />
      </div>
      <div>
        <DesignBlock text={text} title={title}   image={Stair}  comments={3} link={`#`} />
      </div>
      <div>
        <DesignBlock  text={text} title={title}  image={Door}  comments={3} link={`#`} />
      </div>
      <div>
        <DesignBlock  text={text} title={title}  image={lantern}  comments={3} link={`#`} />
      </div>
      <div>
        <DesignBlock  text={text} title={title}   image={tea}  comments={3} link={`#`} />
      </div>
      <div>
        <DesignBlock  text={text} title={title}  image={teapot}  comments={3} link={`#`} />
      </div>
    </div>
  )
}

export default Design
