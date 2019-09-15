import React from 'react';
import Elm from 'react-elm-components';
import Buttons from './elm/Buttons';
import './App.css';

function ElmStars() {
  return (
    <div className="App">
      <header className="App-header">
        <Elm src={Buttons.Elm.Main} />
      </header>
    </div>
  );
}

export default ElmStars;
