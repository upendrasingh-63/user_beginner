import { useState } from "react";
//we are going to update object
function UseObjects() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mushtang",
  });

  const handelYear=(e)=>{
    setCar(c=>({...car,year:e.target.value}))
  }
  const handelMake=(e)=>{
    setCar(c=>({...car,make:e.target.value}))
  }
  const handelModel=(e)=>{
    setCar(c=>({...car,model:e.target.value}))
  }

  return (
    <>
      <p>
        Your favourite car: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handelYear} />
      <br />
      <input type="text" value={car.make} onChange={handelMake} />
      <br />
      <input type="text" value={car.model} onChange={handelModel} />
      <br />
    </>
  );
}

export default UseObjects;
