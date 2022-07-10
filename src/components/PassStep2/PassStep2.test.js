import React from 'react'
import ReactDOM from 'react-dom'
import { validationInput } from '../../utils/validation'
import { act } from 'react-dom/test-utils'
import { fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import StoreProvider from '../../Context/store';
import PassStep2 from './PassStep2'

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
    ReactDOM.render(<StoreProvider><PassStep2 /></StoreProvider>, container)
    validationInput()
    const nameInput = container.querySelectorAll('input')
    fireEvent.change(nameInput[0], { target: { value: "123456789A" } });
  });
});
