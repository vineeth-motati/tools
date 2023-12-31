"use client";
import React, { useState } from "react";
import * as math from "mathjs";

const Calcy: React.FC = () => {
  const [expression, setExpression] = useState<string>("");
  const [result, setResult] = useState<number | undefined>(0);

  const handleButtonClick = (value: string) => {
    if (value === "ce") {
      setExpression("");
      setResult(0);
    } else if (value === "=") {
      try {
        const answer = math.evaluate(expression);
        // setExpression(answer.toString());
        setResult(answer);
      } catch (error) {
        console.error("Error evaluating expression:", error);
        // setExpression("Error");
        setResult(undefined);
      }
    } else if (value === "x^2") {
      setExpression(`${square()}`);
      setResult(undefined);
    } else if (value === "radic") {
      setExpression(`${math.sqrt(parseFloat(expression))}`);
      setResult(undefined);
    } else if (value === "log") {
      setExpression(`${math.log(parseFloat(expression))}`);
      setResult(undefined);
    } else if (value === "sin") {
      setExpression(`${math.sin(parseFloat(expression))}`);
      setResult(undefined);
    } else if (value === "cos") {
      setExpression(`${math.cos(parseFloat(expression))}`);
      setResult(undefined);
    } else if (value === "tan") {
      setExpression(`${math.tan(parseFloat(expression))}`);
      setResult(undefined);
    } else {
      setExpression((prevExpression) => prevExpression + value);
      setResult(undefined);
    }
  };

  const square = (): number => {
    return parseFloat(expression) * parseFloat(expression);
  };

  const buttonsData = [
    ["ce", "Inv", "sin", "ln", "7", "8", "9", "/"],
    ["*(", ")", "%", "cos", "log", "4", "5", "6", "*"],
    ["e", "tan", "radic", "π", "3", "2", "1", "-"],
    ["exp", "x^2", "**", ".", "0", "=", "+"],
  ];

  return (
    <div className="flex flex-col items-start justify-end w-fit">
      <div className="p-6 bg-white border-gray-300 rounded-lg shadow-lg calculator border-1">
        <div className="mb-6 output form-group">
          <input
            type="text"
            className="w-full h-16 p-2 text-3xl text-right text-black rounded-lg ans form-control focus:outline-none"
            value={expression}
          />
          <input
            type="text"
            className="w-full h-16 p-2 text-3xl text-right text-black rounded-lg ans form-control focus:outline-none"
            value={"=" + result}
            readOnly
          />
        </div>
        <table className="table">
          <tbody className="actions">
            {buttonsData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((buttonValue, colIndex) => (
                  <td key={colIndex}>
                    <button
                      className={`btn${
                        buttonValue === "=" ? " btn-op" : ""
                      } text-2xl text-black w-16 h-16 rounded-lg shadow-md focus:outline-none`}
                      onClick={() => handleButtonClick(buttonValue)}
                    >
                      {buttonValue}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calcy;
