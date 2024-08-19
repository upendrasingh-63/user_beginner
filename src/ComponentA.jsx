import ComponentB from "./ComponentB"
import {useState,createContext} from 'react'

export const userContext=createContext();


function ComponentA() {

    const[user,setUser]=useState("Upendra");

    return(
        <>
        <div className="box">
            <p>ComponentA</p>
            <h2>Hello {user}</h2>
            <userContext.Provider value={user}>
            <ComponentB />
            </userContext.Provider>
        </div>
        </>
    )
}

export default ComponentA