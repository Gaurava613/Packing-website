import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,      // animation speed
      offset: 80,         // how far to scroll before it starts
      easing: "ease-out-quart",
      once: true,         // animate only the first time you scroll
    });
  }, []);
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
