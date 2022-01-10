import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Jiman", animal: "Dog", breed: "Mix" }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Wheaten" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
