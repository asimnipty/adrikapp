import React, {useState} from 'react';
import img1 from './images/img1.jpeg';
import troll from './images/troll-face.png';


export default function Main(){
    
    const [count, setCount] = useState(0);
    const increment = () =>{
        setCount(count + 1)
    };
    const decrement = () =>{
        setCount(count - 1)
    };
   
    
    return(
        <div className='main-body'>
            <div className='main-float-child'>               
                <img src={img1} alt='ad1' className='main-top-img'/>
                <h3>Click ME</h3>
                <h2>counter</h2>
                <div className='counter-div'>
                
                    <button className='button-click' onClick={decrement}>-</button>
                    <span>{count}</span>
                    <button className='button-click' onClick={increment}>+</button>   
                </div>
            
            </div>
            <div className='main-float-child'>               
                <header className="header">
                    <img src={troll} alt=" " className="header--image"/>
                    <h2 className="header--title">MEME Generator</h2>
                </header>
                <form>
                <form className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </form>
                 </form>
            
            </div>
        </div>  
    );
}