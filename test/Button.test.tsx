import React from 'react';
import * as ReactDOM from 'react-dom';
import { Solid, Outlined } from '../stories/Button.stories';

describe('Button Solid', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Solid />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Button Outlined', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Outlined />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
