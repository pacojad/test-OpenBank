import React from 'react'
import PropTypes from 'prop-types'

import styles from'./WizardButtonsResult.module.scss'

/**
 * Wizard footer button step 3
 * @param {any} onButtonClick - Function to next step
 * @param {string} buttonText - Text button
 */

function WizardButtonsResult( {onButtonClick, buttonText} ) {
  return (
    <div className={styles.WizardButtonsResult}>
        <button type='button' className='button button-secondary' onClick={onButtonClick}>{buttonText}</button>
    </div>
  )
}

WizardButtonsResult.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default WizardButtonsResult

