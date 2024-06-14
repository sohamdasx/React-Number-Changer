import React, { useState } from "react";

function ButtonComponent() {
  const [number, setNumber] = useState(0);

  const incrNumber = () => {
    setNumber(number + 1);
  };

  const resetNumber = () => {
    setNumber(0);
  };

  const decrNumber = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <div className="numberHolder">{number}</div>
      <div className="buttonsContainer">
        <button className="buttons" onClick={incrNumber}>
          Increase
        </button>
        <button className="buttons" onClick={resetNumber}>
          Reset
        </button>
        <button className="buttons" onClick={decrNumber}>
          Decrease
        </button>
      </div>
    </>
  );
}

export default ButtonComponent;
