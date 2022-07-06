import React from 'react'
import ReactDOM from 'react-dom'
import WizardSteps from './WizardSteps'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<WizardSteps number={5} active={3}/>, div);
  ReactDOM.render(<WizardSteps number={3} active={3}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
