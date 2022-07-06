import React from 'react'
import PropTypes from 'prop-types'

import './WizardButtonsResult.scss'

/**
 * Wizard footer button step 3
 * @param {any} onButtonClick - Function to next step
 * @param {string} buttonText - Text button
 */

function WizardButtonsResult(props) {
  return (
    <div className='WizardButtonsResult'>
        <button type='button' className='button button-secondary' onClick={props.onButtonClick}>{props.buttonText}</button>
    </div>
  )
}

WizardButtonsResult.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default WizardButtonsResult