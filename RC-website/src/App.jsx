import TopHeader from "./components/TopHeader"
import ContentBox from "./components/ContentBox";
import Desk from "./components/Desk";
import NewsEvents from "./components/NewsEvents";

function App() {

  return (
    <>
      <header>
        <TopHeader></TopHeader>
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
