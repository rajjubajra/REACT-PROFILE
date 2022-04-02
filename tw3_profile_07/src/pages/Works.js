import React from 'react';
import WorkBlock from '../components/WorkBlock';
import PaperFlower from '../media/paper-flower.jpg';
import house4 from '../media/house-4.jpg';
import house2 from '../media/house-2.jpg';
import house3 from '../media/house-3.jpg';
import Door from '../media/door.jpg';
import Architecture17 from '../media/architecture-17.jpg';
import Architecture83 from '../media/architecture-83.jpg'



function Works() {

  const title = "Lorem ipsum dolor sit amet consectetur";
  const text = "<p>Uorem ipsum dolor sit amet consectetur adipisicing elit. Labore eum non explicabo veritatis, est aspernatur, officia corporis dignissimos magnam quo accusamus expedita, unde libero reiciendis. Repellendus beatae totam aliquam. Deleniti...</p>";

  return (
    <div className="px-4">
    <div className="my-5">
        <div className="relative md:flex w-full flex-col">
          <div className="w-full">
            <div className="h-40 md:w-96">
              <h2 className="text-5xl text-right tracking-widest font-light">Work</h2>
              <h3 className="text-right tracking-widest uppercase mt-1">Latest Work</h3>
            </div>
          </div>
        </div>
      </div>

    <div className="grid gap-10">
      <div>
        <WorkBlock text={text} title={title}  image={house4}  comments={3} link={`#`} />
      </div>
      <div>
        <WorkBlock text={text} title={title}   image={house2}  comments={3} link={`#`} />
      </div>
      <div>
        <WorkBlock  text={text} title={title}  image={Door}  comments={3} link={`#`} />
      </div>
      <div>
        <WorkBlock  text={text} title={title}  image={house3}  comments={3} link={`#`} />
      </div>
      <div>
        <WorkBlock  text={text} title={title}   image={Architecture17}  comments={3} link={`#`} />
      </div>
      <div>
        <WorkBlock  text={text} title={title}  image={Architecture83}  comments={3} link={`#`} />
      </div>
    </div>
    </div>
  )
}

export default Works
