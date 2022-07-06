import React from 'react'
import ReactDOM from 'react-dom'
import PassStep1 from './PassStep1'
import { act } from 'react-dom/test-utils'
import { validationCheck } from '../../utils/validation'

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
    ReactDOM.render(<PassStep1 onClose={onClose} onNext={onInit}/>, container)
  });
  
  const click = container.querySelector('input')
  
  act(() => {
    click.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    validationCheck()
  });
});
