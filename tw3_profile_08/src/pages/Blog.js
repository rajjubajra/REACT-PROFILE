import React from 'react';
import Title from '../components/Title';
import Woman from '../media/woman.jpg';
import Blog1 from '../media/blog-1.jpg';
import Blog2 from '../media/blog-2.jpg';
import Blog3 from '../media/blog-3.jpg';
import Blog4 from '../media/blog-4.jpg';
import Blog5 from '../media/blog-5.jpg';
import Blog6 from '../media/blog-6.jpg';
import BlogBlock from '../components/BlogBlock';



function Blog() {

  

  return (
    <div className="mx-10 my-20 font-thin">
      <Title title="Blog Posts" />
      <div className="grid md:grid-cols-2">
        <ul className="flex font-light text-xs">
          <li className="mx-3 px-2 py-2 cursor-pointer">All Posts</li>
          <li className="mx-3 px-2 py-2 cursor-pointer">Food</li>
          <li className="mx-3 px-2 py-2 cursor-pointer">Health</li>
          <li className="mx-3 px-2 py-2 cursor-pointer">Healthy Tips</li>
        </ul>
        <ul className="w-full md:mr-10 flex md:justify-end ml-5 pr-5">
          <li>
            <input className="outline-none font-light border-b md:w-96 placeholder:text-sm pt-2 px-2 mb-2 placeholder:font-light placeholder:tracking-widest placeholder:uppercase" type="text" placeholder="Search" />
            </li>
        </ul>
      </div>
      
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 mb-20">
      <BlogBlock  image={Woman} blogImg={Blog1} />
      <BlogBlock  image={Woman} blogImg={Blog2} />
      <BlogBlock  image={Woman} blogImg={Blog3} />
      <BlogBlock  image={Woman} blogImg={Blog4} />
      <BlogBlock  image={Woman} blogImg={Blog5} />
      <BlogBlock  image={Woman} blogImg={Blog6} />
    </div>
    </div>
  )
}

export default Blog
