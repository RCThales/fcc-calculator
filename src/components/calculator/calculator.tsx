import { useState } from "react";
import CalculatorButtons from "../calculator-buttons/calculator-buttons";
import "./calculator.css";
import { isSymbol, evaluateExpression } from "../calculations.ts";

const Calculator = () => {
  const [display, setDisplay] = useState<string>("0");
  const [isResultDisplayed, setIsResultDisplayed] = useState<boolean>(false);

  const resetCalculator = () => {
    setDisplay("0");
    setIsResultDisplayed(false);
  };

  const handleDecimal = () => {
    const parts = display.split(/[\+\-\*\/x]/);
    const lastNumber = parts.pop();

    if (!lastNumber || !lastNumber.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const evaluateAndSetDisplay = () => {
    if (!isResultDisplayed) {
      const result = evaluateExpression(display);
      setDisplay(typeof result === "number" ? result.toString() : result);
      setIsResultDisplayed(true);
    }
  };

  const continueWithSymbolOrStartNew = (buttonValue: string) => {
    if (isSymbol(buttonValue)) {
      setDisplay(display + buttonValue);
    } else {
      setDisplay(buttonValue);
    }
    setIsResultDisplayed(false);
  };

  const appendToDisplay = (buttonValue: string) => {
    setDisplay(display !== "0" ? display + buttonValue : buttonValue);
  };

  const handleClick = (buttonValue: string) => {
    switch (buttonValue) {
      case "C":
        resetCalculator();
        break;
      case ".":
        handleDecimal();
        break;
      case "=":
        evaluateAndSetDisplay();
        break;
      default:
        isResultDisplayed
          ? continueWithSymbolOrStartNew(buttonValue)
          : appendToDisplay(buttonValue);
    }
  };

  return (
    <div className="calculator">
      <div id="display">{display || "0"}</div>
      <div className="button-panel-menu">
        <CalculatorButtons
          id={"clear"}
          functionHandler={handleClick}
          number={"C"}
        />
      </div>
      <div className="button-panel-calculate">
        <div className="button-panel">
          {/* You will add buttons here */}
          <CalculatorButtons
            id={"nine"}
            functionHandler={handleClick}
            number={"9"}
          />
          <CalculatorButtons
            id={"eight"}
            functionHandler={handleClick}
            number={"8"}
          />
          <CalculatorButtons
            id={"seven"}
            functionHandler={handleClick}
            number={"7"}
          />
          <CalculatorButtons
            id={"six"}
            functionHandler={handleClick}
            number={"6"}
          />
          <CalculatorButtons
            id={"five"}
            functionHandler={handleClick}
            number={"5"}
          />
          <CalculatorButtons
            id={"four"}
            functionHandler={handleClick}
            number={"4"}
          />
          <CalculatorButtons
            id={"three"}
            functionHandler={handleClick}
            number={"3"}
          />
          <CalculatorButtons
            id={"two"}
            functionHandler={handleClick}
            number={"2"}
          />
          <CalculatorButtons
            id={"one"}
            functionHandler={handleClick}
            number={"1"}
          />
          <CalculatorButtons
            id={"zero"}
            functionHandler={handleClick}
            number={0}
          />
          <CalculatorButtons
            id={"decimal"}
            functionHandler={handleClick}
            number={"."}
          />
          <CalculatorButtons
            id={"equals"}
            functionHandler={handleClick}
            number={"="}
          />
          {/* Add other buttons similarly */}
        </div>
        <div className="button-panel-symbols">
          <CalculatorButtons
            id={"divide"}
            functionHandler={handleClick}
            number={"/"}
          />
          <CalculatorButtons
            id={"multiply"}
            functionHandler={handleClick}
            number={"x"}
          />
          <CalculatorButtons
            id={"subtract"}
            functionHandler={handleClick}
            number={"-"}
          />
          <CalculatorButtons
            id={"add"}
            functionHandler={handleClick}
            number={"+"}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
