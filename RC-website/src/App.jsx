import TopHeader from "./components/TopHeader"
import ContentBox from "./components/ContentBox";
import Desk from "./components/Desk";

import Hero from "./components/Hero"

import NewsEvents from "./components/NewsEvents";


function App() {

  return (
    <>
      <header>
        <TopHeader></TopHeader>

        
        <Hero></Hero>
        <ContentBox></ContentBox>
        
      </header>
      <main>
        <Desk></Desk>
        <NewsEvents></NewsEvents>
      </main>
    </>
  )
}

export default App;
