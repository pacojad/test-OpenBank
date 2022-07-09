import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import StoreProvider from '../../Context/store';
import WizardButtons from './WizardButtons'

const onNext = jest.fn()
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
    ReactDOM.render(<StoreProvider><WizardButtons onNext={onNext}/></StoreProvider>, container)
  });
});
