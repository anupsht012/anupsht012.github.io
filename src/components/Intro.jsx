import './intro.scss'
import { init } from 'ityped' 
import { useLayoutEffect , useRef } from 'react'
import person from '../assets/man.png';
import dowmarrow from '../assets/down.png';

export default function Intro() {

const textRef=useRef(null);

const intro = [
  'Developer ',
  'Designer ',
  'Dreamer ',
]

useLayoutEffect(()=>{
  
  if(textRef){
    init(textRef.current, { 
      showCursor: true, 
      backDelay:1500,
      backSpeed:60,
      strings: intro
    })
  }
},[textRef])  

  return (
    <div className={'intro'} id='intro' >
      <div className="left">
        <div className="imgContainer">
          <img src={person} alt="" />
        </div>
        
      </div>
      <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Anup Shrestha</h1>
            <h3>Freelance <span ref={textRef}></span></h3>
          </div>
          <a href="#portfolio">
            <img src={dowmarrow} alt="" />
          </a>
        </div>
    </div>
  )
}
