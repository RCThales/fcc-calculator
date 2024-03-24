const isSymbol = (value: string): boolean =>
  new Set(["x", "/", "-", "*", "=", "+", "."]).has(value);

const canSymbolBeUsed = (buttonValue: string, expression: string): boolean => {
  if (buttonValue === "-" && isLastCharMinus(expression)) {
    return false;
  }

  if (isLastCharMinus(expression) && isSecondLastCharSymbol(expression)) {
    return true;
  }

  if (buttonValue === "-" && isLastCharSymbol(expression)) {
    return true;
  }

  if (isSymbol(buttonValue) && isLastCharSymbol(expression)) {
    return false;
  }

  return true;
};

const isLastCharSymbol = (expression: string): boolean => {
  const lastChar = expression[expression.length - 1];
  return isSymbol(lastChar);
};

const isLastCharMinus = (expression: string): boolean => {
  return expression.endsWith("-");
};

const isSecondLastCharSymbol = (expression: string): boolean => {
  if (expression.length < 2) return false;
  const secondLastChar = expression[expression.length - 2];
  return isSymbol(secondLastChar);
};

const endsWithNegative = (expression: string): boolean => {
  return (
    expression.endsWith("-") && isSymbol(expression[expression.length - 2])
  );
};

const replaceOperatorsWithLast = (expression: string): string => {
  return expression.replace(/([+\-*/x])+/g, (match) => {
    return endsWithNegative(match)
      ? match[match.length - 2] + "-"
      : match[match.length - 1];
  });
};

const removeTrailingOperators = (expression: string): string => {
  while (expression.length > 0 && isSymbol(expression[expression.length - 1])) {
    expression = expression.slice(0, -1);
  }
  return expression;
};

const replaceMultiplicationSymbol = (expression: string): string => {
  return expression.replace(/x/g, "*");
};

const evaluateExpression = (expression: string): string | number => {
  expression = replaceOperatorsWithLast(expression);
  expression = removeTrailingOperators(expression);
  expression = replaceMultiplicationSymbol(expression);

  try {
    return eval(expression);
  } catch (e) {
    console.error("Error in expression evaluation:", e);
    return "Error";
  }
};

export { isSymbol, evaluateExpression, canSymbolBeUsed };
