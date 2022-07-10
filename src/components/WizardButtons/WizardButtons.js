import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { StoreContext } from '../../Context/store'

import styles from'./WizardButtons.module.scss'

/**
 * Wizard footer buttom steps 1 and 2
 * @param {any} onNext - Function to next step
 * @param {boolean} [nextButton=true] - Disable button
 */

function WizardButtons( {onNext, nextButton} ) {

  const { close }  = useContext(StoreContext)

  return (
    <div className={styles.WizardButtons}>
        <button type='button' className='button button-secondary' onClick={close}>Cancelar</button>
        <button type='button' className={`button button-primary ${nextButton===false ? 'disabled' : ''}`} onClick={onNext} >Siguiente</button>
    </div>
  )
}

WizardButtons.defaultProps ={
  nextButton: true
}

WizardButtons.propTypes = {
  onNext: PropTypes.func.isRequired,
  nextButton: PropTypes.bool
}

export default WizardButtons
