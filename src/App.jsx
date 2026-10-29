
import { useState } from 'react';
import './App.css';

function CalcDisplay({ dispValue }) {
  return (
    <div className="CalcDisplay">
      {dispValue}
    </div>
  );
}

function CalcButton({ label, onClick, buttonClassName = '' }) {
  return (
    <button
      className={`CalcButton ${buttonClassName}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState(
    '10 Things That Require Zero Talent'
  );

  const numClickHandler = (value) => {
    const things = {
      '1': 'Being On Time',
      '2': 'Making An Effort',
      '3': 'Being High Energy',
      '4': 'Having A Positive Attitude',
      '5': 'Being Passionate',
      '6': 'Using Good Body Language',
      '7': 'Being Coachable',
      '8': 'Doing A Little Extra',
      '9': 'Being Prepared',
      '0': 'Having A Strong Work Ethic'
    };

    setDisp(things[value]);
  };

  const opClickHandler = (value) => {
    if (value === 'NAME') {
      setDisp('JOEFER MIGUEL TULABUT');
    } else if (value === 'SUBJ') {
      setDisp('C-PCIT9');
    }
  };

  const eqClickHandler = () => {
    setDisp('10 Things That Require Zero Talent');
  };

  const clrClickHandler = () => {
    setDisp('10 Things That Require Zero Talent');
  };

  const onClickHandler = (value) => {
    if (/^[0-9]$/.test(value)) {
      numClickHandler(value);
    } else if (value === 'NAME' || value === 'SUBJ') {
      opClickHandler(value);
    } else if (value === '=') {
      eqClickHandler();
    } else if (value === 'CLR') {
      clrClickHandler();
    }
  };

  return (
    <div className="App">
      <div className="Header">
        JOEFER MIGUEL TULABUT - DA3A
      </div>

      <div className="Calculator">
        <CalcDisplay dispValue={disp} />

        <div className="CalcButtons">
          <CalcButton label="7" onClick={onClickHandler} />
          <CalcButton label="8" onClick={onClickHandler} />
          <CalcButton label="9" onClick={onClickHandler} />

          <CalcButton label="4" onClick={onClickHandler} />
          <CalcButton label="5" onClick={onClickHandler} />
          <CalcButton label="6" onClick={onClickHandler} />

          <CalcButton label="1" onClick={onClickHandler} />
          <CalcButton label="2" onClick={onClickHandler} />
          <CalcButton label="3" onClick={onClickHandler} />

          <CalcButton
            label="NAME"
            buttonClassName="SpecialButton"
            onClick={onClickHandler}
          />
          <CalcButton label="0" onClick={onClickHandler} />
          <CalcButton
            label="SUBJ"
            buttonClassName="SpecialButton"
            onClick={onClickHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
