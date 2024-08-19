import {useState} from 'react'
function TaskAdder() {
    const[food,setFood]=useState(["Apple","banana","mango"]);

    const handelAddFood=()=>{
        const newFood=document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";
        setFood(f=>[...f,newFood])
    }

    const handelRemoveFood=(index)=>{
        setFood(food.filter((_,i)=>i!==index))
    }

    return(
        <>
        <h1>List of food</h1>
        <ul>
            {food.map((food,index)=><li key={index} onClick={()=>handelRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder='Enter food name...' /><button onClick={handelAddFood}>Add food</button>
        </>
    )
}

export default TaskAdder;