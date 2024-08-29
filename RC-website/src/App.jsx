import TopHeader from "./components/TopHeader"
import Desk from "./components/Desk";

import Hero from "./components/Hero"

import NewsEvents from "./components/NewsEvents";
import Courses from "./components/Courses";
import Total from "./components/Total";



const images = [
  'bg3.jpg',
  'bg2.jpg',
  'bg1.jpg',
];

function App() {

  return (
    <>

      <header>
        <TopHeader></TopHeader>
        <Hero  images={images}></Hero>

      </header>
      <main>
        <Desk></Desk>
        <NewsEvents></NewsEvents>
        <Courses></Courses>
        <Total></Total>

      </main>
    </>
  )
}

export default App;
