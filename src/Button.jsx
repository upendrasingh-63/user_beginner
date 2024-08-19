function Button(props) {

    // let count=0;
    // const handelOnClick=(name)=>{
    //     if (count<3) {
    //         count++;
    //         console.log(`${name} clicked me ${count} times`)
    //     }else{
    //         console.log(`${name} stop clicking me`)
    //     }
    // }

    // const handelOnClick2=(name)=>{
    //     console.log(`${name} stop clicking me`)
    //     //should use ()=>handelOnClick2("ishu ") to not use run function by own
    // }

    const handelEvent=(e)=>{
        e.target.textContent="OOUCH! ";
    }

    return(
        <button onDoubleClick={(e)=>handelEvent(e)}>Click me ☠️</button>
    )

}

export default Button