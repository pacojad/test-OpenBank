import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import StoreProvider from '../../Context/store';
import ModalContainer from './ModalContainer'

let container

beforeEach(() => {
  container = document.createElement('div');
  container.id = 'modalContainer'
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

it('renders without crashing', () => {
  act(() => {
    ReactDOM.render(<StoreProvider><ModalContainer /></StoreProvider>, container)
  });
});
