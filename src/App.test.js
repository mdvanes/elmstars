import React from 'react';
import ReactDOM from 'react-dom';
import ElmStars from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ElmStars />, div);
  ReactDOM.unmountComponentAtNode(div);
});
