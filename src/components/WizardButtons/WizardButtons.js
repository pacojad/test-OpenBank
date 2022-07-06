import React from 'react'
import PropTypes from 'prop-types'

import './WizardButtons.scss'

/**
 * Wizard footer buttom steps 1 and 2
 * @param {any} onClose - Function to close the modal
 * @param {any} onNext - Function to next step
 * @param {boolean} [nextButton=true] - Disable button
 */

function WizardButtons(props) {
  return (
    <div className='WizardButtons'>
        <button type='button' className='button button-secondary' onClick={props.onClose}>Cancelar</button>
        <button type='button' className={`button button-primary ${props.nextButton===false ? 'disabled' : ''}`} onClick={props.onNext} >Siguiente</button>
    </div>
  )
}

WizardButtons.defaultProps ={
  nextButton: true
}

WizardButtons.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  nextButton: PropTypes.bool
}

export default WizardButtons
