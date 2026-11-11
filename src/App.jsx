import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white">
      <div>
        <Header />
        <main>
          <Hero />
          <Showcase />
          <About />
          <Contact />
          <Footer />
        </main>
      </div>

      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
    </div>
  );
}

export default App;