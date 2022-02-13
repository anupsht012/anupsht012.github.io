import './portfolio.scss';
import PortfolioList from '../components/portfolioList/PortfolioList'
import { useState } from 'react';

export default function Portfolio() {
const [selected,setSelected] = useState("featured")
  const list = [
    {
      id:"featured",
      title:"Featured",
    },
    {
      id:"web",
      title:"Web App",
    },
    {
      id:"mobile",
      title:"Mobile App",
    },
    {
      id:"design ",
      title:"Design",
    },
    {
      id:"content",
      title:"Content",
    },
  ];
  return (

    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
      {list.map(item=>(
        <PortfolioList title={item.title} 
        active ={selected===item.id}
        setSelected={setSelected}
        id={item.id}/>
      ))}

      </ul>
      <div className="container">
        <div className="item">
          <img src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/272048168_553545472563259_1204954308599401808_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=sBCU41cPLl4AX_7mg9Q&tn=P6aLgRGwBva_SHSW&_nc_ht=scontent.fktm7-1.fna&oh=00_AT-l1cOjZrRufr3NoVNH1iB41mxkJWbrkdar30Kca0fp_g&oe=620D72F0" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/272048168_553545472563259_1204954308599401808_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=sBCU41cPLl4AX_7mg9Q&tn=P6aLgRGwBva_SHSW&_nc_ht=scontent.fktm7-1.fna&oh=00_AT-l1cOjZrRufr3NoVNH1iB41mxkJWbrkdar30Kca0fp_g&oe=620D72F0" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/272048168_553545472563259_1204954308599401808_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=sBCU41cPLl4AX_7mg9Q&tn=P6aLgRGwBva_SHSW&_nc_ht=scontent.fktm7-1.fna&oh=00_AT-l1cOjZrRufr3NoVNH1iB41mxkJWbrkdar30Kca0fp_g&oe=620D72F0" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/272048168_553545472563259_1204954308599401808_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=sBCU41cPLl4AX_7mg9Q&tn=P6aLgRGwBva_SHSW&_nc_ht=scontent.fktm7-1.fna&oh=00_AT-l1cOjZrRufr3NoVNH1iB41mxkJWbrkdar30Kca0fp_g&oe=620D72F0" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/272048168_553545472563259_1204954308599401808_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=sBCU41cPLl4AX_7mg9Q&tn=P6aLgRGwBva_SHSW&_nc_ht=scontent.fktm7-1.fna&oh=00_AT-l1cOjZrRufr3NoVNH1iB41mxkJWbrkdar30Kca0fp_g&oe=620D72F0" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/272048168_553545472563259_1204954308599401808_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=sBCU41cPLl4AX_7mg9Q&tn=P6aLgRGwBva_SHSW&_nc_ht=scontent.fktm7-1.fna&oh=00_AT-l1cOjZrRufr3NoVNH1iB41mxkJWbrkdar30Kca0fp_g&oe=620D72F0" alt="" />
          <h3>Banking App</h3>
        </div>
        
      </div>
    </div>
  )
}
