function Calculator() {
  const [display, setDisplay] = React.useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: "" });

  function handleNumber(value) {
    let newVal = value;
    if (!display.isInitial)
    newVal = display.current + value;
    setDisplay({ current: newVal, total: display.total, isInitial: false, preOp: display.preOp });
  }

  function handleOperator(value) {
    const total = doCalculation();
    setDisplay({ current: total.toString(), total: total.toString(), isInitial: true, preOp: value });
  }

  function doCalculation() {
    let total = parseInt(display.total);
    switch (display.preOp) {
      case "+":
        total += parseInt(display.current);
        break;
      case "-":
        total -= parseInt(display.current);
        break;
      case "*":
        total *= parseInt(display.current);
        break;
      case "/":
        total /= parseInt(display.current);
        break;
      default:
        total = parseInt(display.current);}

    return total;

  }

  function renderDisplay() {
    return display.current;
  }

  function handleClear() {
    setDisplay({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: "" });

  }

  return /*#__PURE__*/(
    React.createElement("div", { className: "calculator" }, /*#__PURE__*/
    React.createElement("div", { className: "display" }, renderDisplay()), /*#__PURE__*/
    React.createElement(CalcButton, { value: "7", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { value: "8", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { value: "9", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { className: "operator", onClick: handleOperator, value: "/" }), /*#__PURE__*/

    React.createElement(CalcButton, { value: "4", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { value: "5", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { value: "6", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { className: "operator", onClick: handleOperator, value: "*" }), /*#__PURE__*/

    React.createElement(CalcButton, { value: "1", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { value: "2", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { value: "3", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { className: "operator", onClick: handleOperator, value: "-" }), /*#__PURE__*/

    React.createElement(CalcButton, { value: "C", onClick: handleClear }), /*#__PURE__*/
    React.createElement(CalcButton, { value: "0", onClick: handleNumber }), /*#__PURE__*/
    React.createElement(CalcButton, { value: "=", onClick: handleOperator }), /*#__PURE__*/
    React.createElement(CalcButton, { className: "operator", onClick: handleOperator, value: "+" })));


}
const CalcButton = (props) => /*#__PURE__*/
React.createElement("button", { className: props.className, onClick: () => props.onClick(props.value) }, props.value);


ReactDOM.render( /*#__PURE__*/React.createElement("div", { className: "app-container" }, /*#__PURE__*/React.createElement(Calculator, null)), document.getElementById("root"));