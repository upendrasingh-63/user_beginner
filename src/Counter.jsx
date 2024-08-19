import {useState} from 'react'
import './static/Counter.css'

function Counter() {
    const[count,setCount]=useState(0);

    const decrease=()=>{
        setCount(count-1)
        setCount(count-1)
        setCount(count-1)//this will not work
    }
    const increase=()=>{ 
        setCount(c=>c+1)
        setCount(c=>c+1)
        setCount(c=>c+1)
    }
    const reset=()=>{
        setCount(0)
    }
    return(
        <div className="counter">
            <p>{count}</p>
            <div className="controls">
                <button onClick={decrease}>Decrease</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increase}>Increase</button>
            </div>
        </div>
    )
}

export default Counter;