import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
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

// it('renders without crashing', () => {
//   act(() => {
//     ReactDOM.render((
//       <StoreProvider>
//         <App />
//       </StoreProvider>
//     ), container)
//     
//   })
// });

test('loads and displays greeting',  async () => {
  render(<StoreProvider><App  /></StoreProvider>)
  expect(screen.getByRole('button')).toHaveTextContent('PasswordWizard')
  fireEvent.click(screen.getByText('PasswordWizard'))

  await waitFor(() => screen.getByText('OpenClose'))
  expect(screen.getByText('OpenClose')).toBeInTheDocument()
})