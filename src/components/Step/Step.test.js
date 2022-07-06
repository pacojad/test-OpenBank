import React from 'react'
import ReactDOM from 'react-dom'
import Step from './Step'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Step number={5} status={'step-actual'} />, div)
  ReactDOM.unmountComponentAtNode(div)
});
