import ComponentD from "./ComponentD"
import {useContext} from 'react'
import { userContext } from './ComponentA'


function ComponentC() {
    const value=useContext(userContext);
    return(
        <>
        <div className="box">
            <p>ComponentC</p>
            <h2>Hello again {value}</h2>
            <ComponentD/>
        </div>
        </>
    )
}

export default ComponentC