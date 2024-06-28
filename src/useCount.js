import { useState } from "react";

export const useCount = (initialVal = 0) => {
  const [number, setNumber] = useState(initialVal);

  const increase = () => {
    setNumber((prev) => prev + 1);
  };

  const reset = () => {
    setNumber(initialVal);
  };

  const decrease = () => {
    setNumber((prev) => prev - 1);
  };

  return { number, increase, reset, decrease };
};
