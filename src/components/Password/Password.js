import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { PASSWORD_STEPS } from '../../utils/constant'

import WizardSteps from '../WizardSteps/WizardSteps'
import PassStep1 from '../PassStep1/PassStep1'
import PassStep2 from '../PassStep2/PassStep2'
import PassStep3 from '../PassStep3/PassStep3'

import './Password.scss'

/**
 * Wizard Password
 * @param {any} onClose - Function to close the modal
 */

function Password(props) {

  const [passState, setPassState] = useState(
    {
      active: 1,
      result: ''
    }
  )

  const nextStep = () => {
    setPassState({...passState, active: passState.active + 1})
  }

  const initStep = () => {
    setPassState({...passState, active: 1})
  }

  const resultPass = ( bool ) => {
    setPassState({...passState, result: bool, active: 3})
  }

  const PassStepContent = () => {
    switch (passState.active) {
      case 1:
        return <PassStep1 onClose={props.onClose} onNext={nextStep} />
      case 2:
        return <PassStep2 onClose={props.onClose} onResult={resultPass}/>
      case 3:
        return <PassStep3 onClose={props.onClose} onInit={initStep} result={passState.result} />
      default:
        return ''
    }
  }

  return (
    <div className='Password'>
      <WizardSteps number={PASSWORD_STEPS} active={passState.active} />
      <PassStepContent />
    </div>
  )
}

Password.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default Password
