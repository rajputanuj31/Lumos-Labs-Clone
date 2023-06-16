import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Metaverse from "./components/Metaverse/Metaverse";
import Navbar from "./components/Navbar/Navbar";
import Oppotunity from "./components/Opportunities/Opportunity";
import Businesses from "./components/W3Businesses/Businesses";
import Communities from "./components/W3Communities/Communities";
import Ecosyestem from "./components/W3ecosystem/Ecosystem";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Metaverse/>
      <Ecosyestem/>
      <Businesses/>
      <Communities/>
      <Oppotunity/>
      <Footer/>
    </div>
  );
}

export default App;
