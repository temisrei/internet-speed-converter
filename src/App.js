import React, { useState } from 'react';
import UnitControl from './components/UnitControl';
import CardFooter from "./components/CardFooter";
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };  

  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <div className="converter">
          <div className="flex-1">
            <div className="converter-title">Set</div>
            <input onChange={handleInputChange}
              value={inputValue}
              type="number" className="input-number" min="0" />
          </div>
          <span className="angle-icon fa-2x" style={{marginTop: '30px'}}>
            <i className="fas fa-angle-right"></i>
          </span>
          <div className="text-right flex-1">
            <div className="converter-title">Show</div>
            <input value={inputValue / 8} 
              type="text" className="input-number text-right" disabled />
          </div>
        </div>
      </div>
      <CardFooter />
    </div>
  );
}

export default App;
