import React from 'react'
import ReactDOM from 'react-dom'
import WizardButtonsResult from './WizardButtonsResult'

const onButtonClick = jest.fn()

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<WizardButtonsResult onButtonClick={onButtonClick} buttonText={'buttonText'}/>, div)
  ReactDOM.unmountComponentAtNode(div)
});
