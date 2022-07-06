import React from 'react'
import ReactDOM from 'react-dom'
import PassStep3 from './PassStep3'

const onClose = jest.fn()
const onInit = jest.fn()

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PassStep3 onClose={onClose} onInit={onInit} result={'success'}/>, div)
  ReactDOM.unmountComponentAtNode(div)
});
