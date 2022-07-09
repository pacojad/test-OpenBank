import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import StoreProvider from '../../Context/store';
import Password from './Password'

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
    ReactDOM.render(<StoreProvider><Password /></StoreProvider>, container)
  });
});
