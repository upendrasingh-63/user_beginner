import React, { useState } from "react";

function AddCar() {
  const [car, setCar] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCar((c) => [...c, newCar]);
    // Reset input fields after adding a car
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };

  const handleRemoveCar = (index) => {
    setCar(car.filter((_, i) => i !== index));
  };

  const handleYear = (e) => {
    setCarYear(e.target.value);
  };
  const handleMake = (e) => {
    setCarMake(e.target.value);
  };
  const handleModel = (e) => {
    setCarModel(e.target.value);
  };

  const styles = {
    container: {
      maxWidth: "500px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      textAlign: "center",
      color: "#333",
    },
    inputContainer: {
      marginBottom: "15px",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "5px 0",
      boxSizing: "border-box",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#007BFF",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
    carList: {
      listStyleType: "none",
      padding: 0,
    },
    carItem: {
      padding: "10px",
      margin: "10px 0",
      backgroundColor: "#f4f4f4",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
    },
    removeButton: {
      backgroundColor: "#dc3545",
      color: "white",
      border: "none",
      padding: "5px 10px",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Car List</h1>

      <div style={styles.inputContainer}>
        <input
          type="number"
          value={carYear}
          onChange={handleYear}
          placeholder="Year"
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={carMake}
          onChange={handleMake}
          placeholder="Make"
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={carModel}
          onChange={handleModel}
          placeholder="Model"
          style={styles.input}
        />
      </div>
      <button onClick={handleAddCar} style={styles.button}>
        Add Car
      </button>

      <ul style={styles.carList}>
        {car.map((car, index) => (
          <li
            key={index}
            style={styles.carItem}
            onClick={() => handleRemoveCar(index)}
          >
            <span>{`${car.year} ${car.make} ${car.model}`}</span>
            <button style={styles.removeButton}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddCar;
