import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import StoreProvider from '../../Context/store';
import WizardButtonsResult from './WizardButtonsResult'

const onButtonClick = jest.fn()
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
    ReactDOM.render(<StoreProvider><WizardButtonsResult onButtonClick={onButtonClick} buttonText={'buttonText'}/></StoreProvider>, container)
  });
});
