function Calculator(){
  const [display,setDisplay] = React.useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp:""
  });
  function handleNumber(value){
    let newVal = value;
    if(!display.isInitial)
      newVal = display.current + value;
    setDisplay({current:newVal,total:display.total,isInitial:false,preOp:display.preOp});
  }

  function handleOperator(value){
    const total = doCalculation();
    setDisplay({current:total.toString(),total:total.toString(),isInitial:true,preOp:value});
  }
  
  function doCalculation(){
    let total = parseInt(display.total);
    switch(display.preOp){
      case "+":
        total+=parseInt(display.current);
        break;
      case "-":
        total-=parseInt(display.current);
        break;
      case "*":
        total*=parseInt(display.current);
        break;
      case "/":
        total/=parseInt(display.current);
        break;
      default:
        total = parseInt(display.current);
    }
    return total;
    
  }
  
  function renderDisplay(){
    return display.current;
  }
  
  function handleClear(){
    setDisplay({
    current: "0",
    total: "0",
    isInitial: true,
    preOp:""
  });
  }
  
  return(
  <div className="calculator">
    <div className="display">{renderDisplay()}</div>
    <CalcButton value="7" onClick={handleNumber}/>
    <CalcButton value="8" onClick={handleNumber}/>
    <CalcButton value="9" onClick={handleNumber}/>
    <CalcButton className = "operator" onClick={handleOperator} value="/"/>
    
    <CalcButton value="4" onClick={handleNumber}/>
    <CalcButton value="5" onClick={handleNumber}/>
    <CalcButton value="6" onClick={handleNumber}/>
    <CalcButton className = "operator" onClick={handleOperator} value="*"/>
    
    <CalcButton value="1" onClick={handleNumber}/>
    <CalcButton value="2" onClick={handleNumber}/>
    <CalcButton value="3" onClick={handleNumber}/>
    <CalcButton className = "operator" onClick={handleOperator} value="-"/>
 
    <CalcButton value="C" onClick={handleClear}/>
    <CalcButton value="0" onClick={handleNumber}/>
    <CalcButton value="=" onClick={handleOperator}/>
    <CalcButton className = "operator" onClick={handleOperator} value="+"/>
  </div>
  )
}
const CalcButton = (props) =>(
  <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
)

ReactDOM.render(<div className="app-container"><Calculator/></div>, document.getElementById("root"));