import "./calculator-button.css";

const CalculatorButtons = ({
  number,
  functionHandler,
  id,
}: CalculatorButtonsProps) => {
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
