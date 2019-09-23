import React from 'react';
import { storiesOf } from '@storybook/react';
// import ElmStars from '../src/ElmStars';
import TestElem from '../src/TestElem';
import ElmStars from "../src/ElmStars";
import Elm from "react-elm-components";
// const Elmx = require('../src/elm/Buttons.elm').Elm;
// const Button = require('./elm/Buttons.elm'); // TODO fix loading like: import Buttons from './elm/Buttons';


storiesOf('elm-stars', module)
  .add('default', () => (
    <ElmStars />
  ))
  .add('test', () => (
    <TestElem/>
  ));
  // .add('with emoji', () => (
  //   <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  // ));
