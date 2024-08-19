
import {useState} from 'react'

function ReactHook() {
    const[name,setName]=useState("Guest");
    const[age,setAge]=useState(0);
    const[isEmployed,setIsEmployed]=useState(false);

    const updateName=()=>{
        setName("Upendra")
    }
    const increamentAge=()=>{
        setAge(
            age+1
        )
    }
    const toggleEmployeStatus=()=>{
        setIsEmployed(!isEmployed)
    }



    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>set Name</button>

            <p>Age: {age}</p>
            <button onClick={increamentAge}>Increate age</button>

            <p>Is Emloyed: {isEmployed?"Yes":"No"}</p>
            <button onClick={toggleEmployeStatus}>Toggle status</button>
        </div>
    )
}

export default ReactHook;