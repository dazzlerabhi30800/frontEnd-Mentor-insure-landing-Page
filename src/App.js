import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import IntroSection from './Components/IntroSection';
import Feature from './Components/Features';
import Work from './Components/Work';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <IntroSection />
        <Feature />
        <Work />
      </main>
      <Footer />
    </div>
  );
}

export default App;
