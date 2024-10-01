import TopHeader from "./components/TopHeader"
import Desk from "./components/Desk";
import Hero from "./components/Hero"
import NewsEvents from "./components/NewsEvents";
import Courses from "./components/Courses";
import Total from "./components/Total";
import Footer from "./components/Footer";
import Feature from "./components/Feature.jsx";





function App() {

  return (
    <>

      <header>
        <TopHeader></TopHeader>
        <Hero></Hero>
        <Feature></Feature>


      </header>
      <main className="h-auto gap-[100px]">
        <Desk></Desk>
        <NewsEvents></NewsEvents>
        <Courses></Courses>
        <Total></Total>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App;