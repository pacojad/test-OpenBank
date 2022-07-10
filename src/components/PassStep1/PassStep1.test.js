import React from 'react'
import ReactDOM from 'react-dom'
import StoreProvider from '../../Context/store';
import PassStep1 from './PassStep1'
import { act } from 'react-dom/test-utils'

let container

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders without crashing', () => {
  act(() => {
    ReactDOM.render(<StoreProvider><PassStep1 /></StoreProvider>, container)
  });
  
  const click = container.querySelector('input')
  
  act(() => {
    click.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
});
