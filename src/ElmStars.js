import React from 'react';
import Elm from 'react-elm-components';
// import Buttons from './elm/Buttons';
// import './App.css';
const Elmx = require('./elm/Buttons.elm').Elm;

function ElmStars() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<Elm src={Buttons.Elm.Main} />*/}
        <Elm src={Elmx.Main} />
      </header>
    </div>
  );
}

export default ElmStars;
