import React, { useState } from "react";

export default function Slider({ items }) {
  const [currentNumber, setCurrentNumber] = useState(0);
  function handleChange() {
    setCurrentNumber((currentNumber + 1) % items.length);
  }
  return (
    <>
      <button onClick={handleChange}>Click me</button>
    </>
  );
}
