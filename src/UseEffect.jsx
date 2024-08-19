import {useEffect,useState} from 'react'

function UseEffect() {

    const[count,setCount]=useState(0);
    const[color,setColor]=useState("green");

    useEffect(()=>{
        document.title=`Count ${count} ${color}`;
        return(()=>{
            //some clean up code
        })
    },[count,color])

    const handleClick=()=>{
        setCount(c=>c+1);
    }

    const handleColor=()=>{
        setColor(c=>c==="green"?"red":"green");
    }

    return(
        <>
        <p style={{color:color}}>Count: {count}</p><br/>
        <button onClick={handleClick}>Click me</button>
        <button onClick={handleColor}>Change color</button>
        </>
    )
}

export default UseEffect