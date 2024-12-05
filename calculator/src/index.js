import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const calculatorData = [
  { id: "clear", value : "AC"},
  { id: "divide", value : "/"},
  { id: "multiply", value : "x"},
  { id: "seven", value : 7},
  { id: "eight", value : 8},
  { id: "nine", value : 9},
  { id: "subtract", value : "-"},
  { id: "four", value : 4},
  { id: "five", value : 5},
  { id: "six", value : 6},
  { id: "add", value : "+"},
  { id: "one", value : 1},
  { id: "two", value : 2},
  { id: "three", value : 3},
  { id: "equals", value : "="},
  { id: "zero", value : 0},
  { id: "decimal", value : "."}
];

const operators = ["AC", "/", "x", "+", "-", "="];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Display = ({input, output}) => (
  <div className="output">
    <span className="result">{output}</span>
    <span id="display" className="input">{input}</span>
  </div>
);

const Key = ({keyData: {id, value}, handleInput}) => (
  <button class="buttons" id={id} onClick={() => handleInput(value)} >{value}</button>
)

const Keyboard = ({ handleInput }) => (
  <div className="buttonsContainer">{calculatorData.map(key => (
    <Key key={key.id} keyData={key} handleInput={handleInput} />
  ))}</div>
)

const App = () => {
  const [input, setInput] = React.useState("0");
  const [output, setOutput] = React.useState("");
  const [calculatorData, setCalculatorData] = React.useState("");

  const handleSubmit = () => {
    const result = eval(calculatorData);
    setInput(result);
    setOutput(`${result}`);
    setCalculatorData(`${result}`);
  }

  const handleClear = () => {
    setInput("0");
    setCalculatorData("");
  }

  const handleNumbers = (value) => {
    if(!calculatorData.length) {
      setInput(`${value}`);
      setCalculatorData(`${value}`);
    } else {
      if(value === 0 && (calculatorData === "0" || input === "0")) {
        setCalculatorData(`${calculatorData}`);
      } else {
        const lastChar = calculatorData.charAt(calculatorData.length - 1)
        const isLastCharOperator = lastChar === "*" || operators.includes(lastChar);

        setInput(isLastCharOperator ? `${value}`: `${input}${value}`);
        setCalculatorData(`${calculatorData}${value}`);
      }
    }


  }

  const handleDot = () => {
    const lastChar = calculatorData.charAt(calculatorData.length - 1);
    if(!calculatorData.length) {
      setInput("0.");
      setCalculatorData("0.");
    } else {
      if(lastChar === "*" ||operators.includes(lastChar)) {
        setInput("0.");
        setCalculatorData(`${calculatorData} 0.`);
      } else {
        setInput(lastChar === "." || input.includes(".")? `${input}`: `${input}.`);
        const formattedValue = lastChar === "." || input.includes(".")? `${calculatorData}`: `${calculatorData}.`;
        setCalculatorData(formattedValue);
      }
    }
  }

  const handleOperators = (value) => {
    if(calculatorData.length) {
      setInput(`${value}`);
      const secondLastChar = calculatorData.charAt(calculatorData.length - 2);
      const isSecondLastCharOperator = operators.includes(secondLastChar) || secondLastChar === "*";

      const lastChar = calculatorData.charAt(calculatorData.length - 1);
      const isLastCharOperator = operators.includes(lastChar) || lastChar === "*";

      const validOp = value === "x"? "*": value;
      if((isLastCharOperator && value !== "-") || (isSecondLastCharOperator && isLastCharOperator)) {
        if(isSecondLastCharOperator) {
          const updatedValue = `${calculatorData.substring(0,calculatorData.length - 2)}${value}`;
          setCalculatorData(updatedValue);
        } else {
          setCalculatorData(`${calculatorData.substring(0, calculatorData.length -1)}${validOp}`)
        }
       } else {
          setCalculatorData(`${calculatorData}${validOp}`);
       }
    }
  }

  const handleInput = (value) => {
    const number = numbers.find(number => number === value);
    const operator = operators.find(op => op === value);

    switch (value) {
      case "=":
        handleSubmit();
        break;
      case "AC":
        handleClear();
        break;
      case number:
        handleNumbers(value);
        break;
      case ".":
        handleDot(value);
        break;
      case operator:
        handleOperators(value);
        break;
      default:
        break;
    }
  }

  const handleOutput = () => {
    setOutput(calculatorData)
  }

  React.useEffect(() => {
    handleOutput()
  }, [calculatorData])

  return (
    <div id="calculator">
      <Display input={input} output={output} />
      <Keyboard handleInput={handleInput} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);