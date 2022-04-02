import React from 'react'
import image from '../media/paper-flower.jpg';
import WorkBlock from '../component/WorkBlock';

function Works() {

  const title = "Dolor sit amet consectetur";
  const text = "adipisicing elit. Voluptas similique temporibus accusamus quia placeat dolore cupiditate possimus, totam fugiat voluptatem est qui sapiente. Doloremque quas libero molestias, quisquam quis eos";
  const alt="test";
  const comments = "Fugiat voluptatem est qui sapiente";
  const likes = 8;


  return (
    <>
    <h1 className="ml-5 text-3xl font-thin tracking-widest mb-5">My Works</h1>
    <div className="grid gap-10">
      <WorkBlock title={title} text={text} comments={comments} 
      link={"#"} likes={likes} image={image} alt={alt} />
      <WorkBlock title={title} text={text} comments={comments} 
      link={"#"} likes={likes} image={image} alt={alt} />
      <WorkBlock title={title} text={text} comments={comments} 
      link={"#"} likes={likes} image={image} alt={alt} />
      <WorkBlock title={title} text={text} comments={comments} 
      link={"#"} likes={likes} image={image} alt={alt} />
      <WorkBlock title={title} text={text} comments={comments} 
      link={"#"} likes={likes} image={image} alt={alt} />
      <WorkBlock title={title} text={text} comments={comments} 
      link={"#"} likes={likes} image={image} alt={alt} />
      <WorkBlock title={title} text={text} comments={comments} 
      link={"#"} likes={likes} image={image} alt={alt} />
      <WorkBlock title={title} text={text} comments={comments} 
      link={"#"} likes={likes} image={image} alt={alt} />
    </div>
    </>
  )
}

export default Works