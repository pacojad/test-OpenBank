import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import StoreProvider from '../../Context/store';
import App from './App';

let container

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

beforeAll(() => {
  ReactDOM.createPortal = jest.fn((element, node) => {
      return element
  })
});

it('renders without crashing',  async () => {
  act(() => {
    ReactDOM.render((
      <StoreProvider>
        <App />
      </StoreProvider>
    ), container)

  expect(screen.getByRole('button')).toHaveTextContent('PasswordWizard')
  })
})