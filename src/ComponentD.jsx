import {useContext} from 'react'
import { userContext } from './ComponentA'


function ComponentD() {
    const value=useContext(userContext);
    return(
        <>
        <div className="box">
            <p>ComponentD</p>
            <h2>Bye {value}</h2>
        </div>
        </>
    )
}

export default ComponentD