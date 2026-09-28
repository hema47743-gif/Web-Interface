import { useState } from "react";
import "./Calculator.css";

function Calculator() {
 
  const [input, setInput] = useState("");

  
  const handleClick = (value) => {
    setInput(input + value);
  };

  
  const handleEquals = () => {
    try {
      setInput(eval(input).toString()); 
    } catch (error) {
      setInput("Error");
    }
  };

  
  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  
  const handleReset = () => {
    setInput("");
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
  ];

  return (
    <div className="calculator">
     
      <input type="text" value={input} readOnly className="screen" />

     
      <div className="top-buttons">
        <button onClick={handleDelete} className="clear-btn">
          Delete
        </button>
        <button onClick={handleReset} className="clear-btn">
          Reset
        </button>
      </div>

     
      <div className="buttons-grid">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === "=" ? handleEquals() : handleClick(btn))}
            className="btn"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;