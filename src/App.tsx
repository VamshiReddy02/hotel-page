import Amenities from "./sections/Amenities/Amenities"
import Footer from "./sections/Footer/Footer"
import Gallery from "./sections/Gallery/Gallery"
import Hero from "./sections/Hero/Hero"
import Intro from "./sections/Intro/Intro"
import Navbar from "./sections/Navbar/Navbar"



function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Gallery />
      <Amenities />
      <Footer />
    </>
  )
}

export default App
