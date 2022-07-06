import React from 'react'
import ReactDOM from 'react-dom'
import { validationInput } from '../../utils/validation'
import { act } from 'react-dom/test-utils'
import PassStep2 from './PassStep2'

const onClose = jest.fn()
const onResult = jest.fn()
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
    ReactDOM.render(<PassStep2 onClose={onClose} onResult={onResult}/>, container)
    validationInput()
  });
});
