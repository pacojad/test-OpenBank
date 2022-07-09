import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import StoreProvider from '../../Context/store';
import PassStep3 from './PassStep3'

const onClose = jest.fn()
const onInit = jest.fn()
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
    ReactDOM.render(<StoreProvider><PassStep3 /></StoreProvider>, container)
  });
});
