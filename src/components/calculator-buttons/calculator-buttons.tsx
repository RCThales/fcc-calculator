import "./calculator-button.css";

const clickSound = new Audio("/click.mp3");
const victorySound = new Audio("/victory.wav");
const CalculatorButtons = ({
  buttonClicked,
  functionHandler,
  id,
}: CalculatorButtonsProps) => {
  const playVictorySound = () => {
    victorySound.volume = 0.5;
    victorySound.currentTime = 0;
    victorySound.play();
  };

  const playClickSound = () => {
    clickSound.currentTime = 0;
    clickSound.play();
  };

  const handleClick = () => {
    if (buttonClicked === "=") {
      playVictorySound();
    } else {
      playClickSound();
    }

    functionHandler(buttonClicked);
  };

  return (
    <button className="calculator_button" onClick={handleClick} id={id}>
      {buttonClicked}
    </button>
  );
};

export default CalculatorButtons;
