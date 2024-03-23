import "./calculator-button.css";

const CalculatorButtons = ({ number, functionHandler, id }) => {
  return (
    <button
      className="calculator_button"
      onClick={() => functionHandler(number)}
      id={id}
    >
      {number}
    </button>
  );
};

export default CalculatorButtons;
