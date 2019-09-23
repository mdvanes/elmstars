import React from 'react';
import { storiesOf } from '@storybook/react';
import ElmStars from '../src/ElmStars';
import Fancy from '../src/index';

storiesOf('elm-stars', module)
  .add('default', () => (
    <Fancy/>
  ))
  .add('test', () => (
    <Fancy/>
  ));
  // .add('with emoji', () => (
  //   <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  // ));
