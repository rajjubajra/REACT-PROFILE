import React from 'react';
import JournalBlock from '../components/JournalBlock';
import PaperFlower from '../media/paper-flower.jpg';
import {Link} from 'react-router-dom';
import IconSearch from '../components/IconSearch';

function Journal() {

  const title = "Lorem ipsum dolor sit amet consectetur";
  const text = '<p>Uorem ipsum dolor sit amet consectetur adipisicing elit. Labore eum non explicabo veritatis, est aspernatur, officia corporis dignissimos magnam quo accusamus expedita, unde libero reiciendis. Repellendus beatae totam aliquam. Deleniti...</p>';

  return (
    <>
    <div className="md:flex">
      <ul className="flex md:ml-10 mb-5 mt-10 font-light tracking-widest">
        <li className="px-5"><Link to="#">All</Link></li>
        <li className="px-5"><Link to="#">Life Style</Link></li>
        <li className="px-5"><Link to="#">Fashion</Link></li>
        <li className="px-5"><Link to="#">Food</Link></li>
      </ul>
      <ul className="relative md:top-7 bottom-2 md:bottom-0">
        <li>
          <input className="ml-10 outline-none border-b w-72 placeholder:font-light placeholder:text-gray-400 p-2" type="text" name="search" placeholder="Search" />
          <button><IconSearch /></button>
          </li>
      </ul>
    </div>
    <div className="grid md:grid-cols-2 gap-10">
      <JournalBlock text={text} title="" image={PaperFlower} link={`#`} comments={2} />
      <JournalBlock text={text} title={title} image={PaperFlower} link={`#`} comments={2} />
      <JournalBlock text={text} title={title}  image={PaperFlower} link={`#`} comments={2} />
      <JournalBlock text={text} title={title}  image={PaperFlower} link={`#`} comments={2} />
      <JournalBlock text={text} title={title}  image={PaperFlower} link={`#`} comments={2} />
      <JournalBlock text={text} title={title}  image={PaperFlower} link={`#`} comments={2} />
      <JournalBlock text={text} title={title}  image={PaperFlower} link={`#`} comments={2} />
      <JournalBlock text={text} title={title}  image={PaperFlower} link={`#`} comments={2} />
      <JournalBlock text={text} title={title}  image={PaperFlower} link={`#`} comments={2} />
    </div>
    </>
  )
}

export default Journal
