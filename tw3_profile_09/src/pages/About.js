import Title from '../components/Title';

function About() {

  const text = "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit beatae quis numquam, odio quaerat dolorem est aperiam. Minima veritatis quidem, in sint alias accusantium nobis unde, voluptatibus provident necessitatibus praesentium consequuntur tempore non.</p><p>Fuga deleniti aut ea, velit soluta perferendis. Exercitationem et, similique quod quasi, dolor nihil accusantium ex perspiciatis beatae nemo consequuntur ab eaque itaque nam repudiandae consectetur iste quia tenetur rem minima? Perferendis eius sint dignissimos rem eaque assumenda iste voluptatibus corrupti, sapiente magnam qui, neque maiores reprehenderit mollitia cum explicabo quidem aliquam voluptates, ex molestiae modi rerum impedit. Eos eligendi, optio accusantium unde iure maiores quis labore!</p>";

  return (
  <div className="mb-24 mt-20">
    <Title title="About" />
    <div className="md:p-20 p-5 font-thin">
      <div 
      className="first-letter:text-2xl grid gap-3"  
      dangerouslySetInnerHTML={{__html: text}} />
    </div>
  </div>
  )
}

export default About
