
import React, { useState } from "react";

function Set() {
  const [name, setName] = useState("Rahul");
  const [college, setCollege] = useState("ABES");

  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>College: {college}</h2>

      <button onClick={() => setName("Saloni")}>
        Update Name
      </button>

      <button onClick={() => setCollege("ABES Engineering College Ghaziabad")}>
        Update College
      </button>
    </div>
  );
}

export default Set;

