import React from 'react';
import { storiesOf } from '@storybook/react';
import Fancy from '../src/index';

storiesOf('Button', module)
  .add('with text', () => (
    <Fancy/>
  ));
  // .add('with emoji', () => (
  //   <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  // ));
