import TopHeader from "./components/TopHeader"

import ContentBox from "./components/ContentBox";
import Desk from "./components/Desk";
import Hero from "./components/Hero"




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
      </main>

      

    </>
  )
}

export default App;
