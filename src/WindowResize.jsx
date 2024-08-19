import {useState,useEffect} from 'react'

function WindowResize() {
    
    const[widht,setWidth]=useState(window.innerWidth);
    const[height,setHeight]=useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("add event listener")

        return(()=>{
            window.removeEventListener("resize",handleResize);
            console.log("removed")
        })
    },[])

    useEffect(()=>{
        document.title=`Size: ${widht}x${height}`
    },[widht,height])

    const handleResize=()=>{
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
        <p>Window width: {widht}</p>
        <p>Window height: {height}</p>
        </>
    )
}

export default WindowResize;