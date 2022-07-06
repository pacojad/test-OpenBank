import React from 'react'
import ReactDOM from 'react-dom'
import ModalContainer from './ModalContainer'

const onClose = jest.fn()

beforeAll(() => {
  ReactDOM.createPortal = jest.fn((element, node) => {
      return element
  })
});

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ModalContainer isOpened={true} onClose={onClose}/>, div)
  ReactDOM.unmountComponentAtNode(div)
});
