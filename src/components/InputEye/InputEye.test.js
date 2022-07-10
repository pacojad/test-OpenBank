import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import InputEye from './InputEye'

const onChange = jest.fn()
let container

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('renders without crashing', () => {
  act(() => {
    ReactDOM.render(<InputEye name={'name'} onChange={onChange}/>, container)
    expect(screen.getAllByRole('img'))
  });
});
