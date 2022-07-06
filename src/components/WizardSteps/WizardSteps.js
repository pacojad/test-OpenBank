import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import './WizardSteps.scss'

import Step from '../Step/Step'

/**
 * Generate the Wizard steps
 * @param {number} number - Number of steps
 * @param {number} active - Step active
 */

const Steps = ( props ) => {
  let Steps =[]
  for (let i = 1; i<=props.number; i++) {
    if (i<props.active) {
      Steps.push(
        <Fragment key={i}>
          <Step number={i} status={'Step-prev'}/>
          <div className='line line-prev'></div>
        </Fragment>
      )
    } else if (i===props.active) {
      Steps.push(
        <Fragment key={i}>
          <div className='triangle'>
            <Step number={i} status={'Step-actual'}/>
            <div className='triangle-container'></div>
          </div>

          {(i===props.number) ? '' : <div className='line line-post'></div>}
        </Fragment>
      )
    } else {
      Steps.push(
        <Fragment key={i}>
          <Step number={i} status={'Step-post'}/>
          {(i===props.number) ? '' : <div className='line line-post'></div>}
        </Fragment>
      )
    }
  }
  return Steps
}

function WizardSteps(props) {
  return (
    <div className='WizardSteps'>
      <Steps {...props}/>
    </div>
  )
}

WizardSteps.propTypes = {
  number: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired
}

export default WizardSteps
