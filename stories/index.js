import React from 'react';
import { storiesOf } from '@storybook/react';
// import ElmStars from '../src/ElmStars';
import TestElem from '../src/TestElem';
import Elm from "react-elm-components";
const Elmx = require('../src/elm/Buttons.elm').Elm;

storiesOf('elm-stars', module)
  .add('default', () => (
    <Elm src={Elmx.Main} />
  ))
  .add('test', () => (
    <TestElem/>
  ));
  // .add('with emoji', () => (
  //   <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  // ));
