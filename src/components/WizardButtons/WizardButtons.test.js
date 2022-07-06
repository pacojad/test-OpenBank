import React from 'react'
import ReactDOM from 'react-dom'
import WizardButtons from './WizardButtons'

const onClose = jest.fn()
const onNext = jest.fn()

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<WizardButtons onClose={onClose} onNext={onNext}/>, div)
  ReactDOM.unmountComponentAtNode(div)
});
