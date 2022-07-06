import React from 'react'
import ReactDOM from 'react-dom'
import InputEye from './InputEye'

const onChange = jest.fn()

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InputEye name={'name'} onChange={onChange}/>, div)
  ReactDOM.unmountComponentAtNode(div)
});
