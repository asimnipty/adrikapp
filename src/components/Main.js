import React, {useState} from 'react';
import img1 from './images/img1.jpeg';


export default function Main(){
    
    const [count, setCount] = useState(0);
    const increment = () =>{
        setCount(count + 1)
    };
    const decrement = () =>{
        setCount(count - 1)
    };
   
    
    return(
        
        <div className='main-top1'>               
            <img src={img1} alt='ad1' className='main-top-img'/>
            <h3>Click ME</h3>
            <h1> WELCOME</h1>
            <h2>counter</h2>
            <div className='counter-div'>
                
                <button className='button-click' onClick={decrement}>-</button>
                <span>{count}</span>
                <button className='button-click' onClick={increment}>+</button>   
            </div>
            
        </div>
    );
}