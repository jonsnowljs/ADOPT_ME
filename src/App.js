import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const pets = [
  { name: "Jiman", animal: "Dog", breed: "Mix" },
  { name: "Pepper", animal: "Dog", breed: "Havanese" },
  { name: "Luna", animal: "Dog", breed: "Wheaten" },
];

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {pets.map((pet) => {
        return (
          <Pet name={pet.name} animal={pet.animal} breed={pet.breed}></Pet>
        );
      })}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
