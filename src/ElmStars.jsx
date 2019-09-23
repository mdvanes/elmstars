import React from 'react';
import Elm from 'react-elm-components';
// import Buttons from './elm/Buttons';
// import './App.css';
const Elmx = require('./elm/Buttons.elm').Elm;
// TODO fix loading like: import Buttons from './elm/Buttons';

function ElmStars() {
  return (
    <Elm src={Elmx.Main} />
  );
}

export default ElmStars;
