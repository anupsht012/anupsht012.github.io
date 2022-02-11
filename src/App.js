import './App.scss';

import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Topbar from './components/Topbar';
import Works from './components/Works';
import {  useState} from "react";
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
const App = () => {

const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
        <Intro menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Contact/>
        <Portfolio />
      <Works/>
      <Testimonials/>
    
      </div>

    </div>
  );
}

export default App;
