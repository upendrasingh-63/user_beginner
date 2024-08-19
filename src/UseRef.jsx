import {useState,useEffect,useRef} from 'react'

function UseRef() {

    const inputRef1=useRef(null);
    const inputRef2=useRef(null);
    const inputRef3=useRef(null);
    // console.log(inputRef)

    useEffect(()=>{
        console.log("Component render");
    })

    const handleClick1=()=>{
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor="red" 
        inputRef2.current.style.backgroundColor="" 
        inputRef3.current.style.backgroundColor="" 
    }
    const handleClick2=()=>{
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor="" 
        inputRef2.current.style.backgroundColor="red" 
        inputRef3.current.style.backgroundColor=""  
      }
    const handleClick3=()=>{
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor="" 
        inputRef2.current.style.backgroundColor="" 
        inputRef3.current.style.backgroundColor="red"  
          }

    return(
        <>
            <button onClick={handleClick1}>Click me</button>
            <input type="text" ref={inputRef1}/><br/>
            <button onClick={handleClick2}>Click me</button>
            <input type="text" ref={inputRef2}/><br/>
            <button onClick={handleClick3}>Click me</button>
            <input type="text" ref={inputRef3}/>
        </>
    )
}

export default UseRef;