import React from 'react';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import Preloader from './sections/Preloader';
import Hero from './sections/Hero';
import About from './sections/About';
import Work from './sections/Work';
import Experimental from './sections/Experimental';
import Footer from './sections/Footer';

function App() {
  return (
    <SmoothScroll>
      <Preloader />
      <CustomCursor />

      <main>
        <Hero />
        <About />
        <Work />
        <Experimental />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

export default App;
