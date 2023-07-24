import { About } from './components/About';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';
import { Hallmark } from './components/Hallmark';
import { Contact } from './components/Contact';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

function App() {
   return (
      <>
         <Navbar />
         <Hero />
         <About />
         <Services />
         <Hallmark />
         <Contact />
         <Gallery />
         <Footer />
      </>
   );
}

export default App;
