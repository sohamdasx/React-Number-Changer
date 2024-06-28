import { useCount } from "../useCount";

function ButtonComponent() {
  const { number, increase, reset, decrease } = useCount();
  return (
    <>
      <div className="numberHolder">{number}</div>
      <div className="buttonsContainer">
        <button className="buttons" onClick={increase}>
          Increase
        </button>
        <button className="buttons" onClick={reset}>
          Reset
        </button>
        <button className="buttons" onClick={decrease}>
          Decrease
        </button>
      </div>
    </>
  );
}

export default ButtonComponent;
