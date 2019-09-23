import React from 'react';
import { storiesOf } from '@storybook/react';
import ElmStars from "../src/ElmStars";
import TestElem from '../src/TestElem';

storiesOf('elm-stars', module)
  .add('default', () => (
    <ElmStars />
  ))
  .add('test', () => (
    <TestElem/>
  ));
