import Title from '../components/Title';
import Introduction from '../components/Introduction';
import BigNav from '../components/BigNav';



function Home() {

  const date = new Date();
  console.log(date.getDay());


  return (
    <div className="w-full h-screen relative grid grid-cols-12">
      <div className="lg:col-span-4 col-span-12">
        <Introduction />
      </div>
      <div className="lg:col-span-6 md:col-span-8 col-span-6">
        <BigNav />
      </div>
      <div className="lg:col-span-2">
        <Title title="Menu" />
      </div>
    </div>

  )
}

export default Home
