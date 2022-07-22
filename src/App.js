import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import IntroSection from './Components/IntroSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <IntroSection />
      </main>
    </div>
  );
}

export default App;
