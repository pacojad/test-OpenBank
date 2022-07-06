import React from 'react'
import PropTypes from 'prop-types'
import { TITLE_SUCCESS, TITLE_FAIL, TEXT_SUCCESS, TEXT_FAIL, TEXT_BUTTON_SUCCESS, TEXT_BUTTON_FAIL} from '../../utils/constant'

import WizardButtonsResult from '../WizardButtonsResult/WizardButtonsResult'

import './PassStep3.scss'

import imgSuccess from '../../assets/img/icon_ok.png'
import imgFail from '../../assets/img/icon_error.png'

/**
 * Wizard Password Step3
 * @param {any} onClose - Function to close the modal
 * @param {any} onInit - Function to next step
 * @param {string} result - Password creation result
 */

function PassStep3(props) {

  return (
    <>
      <div className='Password-Step3'>
        <img src={props.result==='success' ? imgSuccess : imgFail} alt="Imagen Feedback" />
        <div className='Password-Step3-text'>
          <h4>{props.result==='success' ? TITLE_SUCCESS : TITLE_FAIL}</h4>
          <p>{props.result==='success' ? TEXT_SUCCESS : TEXT_FAIL}</p>  
        </div>
      </div>
      <WizardButtonsResult onButtonClick={props.result==='success' ? props.onClose : props.onInit} buttonText={props.result==='success' ? TEXT_BUTTON_SUCCESS : TEXT_BUTTON_FAIL} />
    </>
  )
}

PassStep3.propTypes = {
  onClose: PropTypes.func.isRequired,
  onInit: PropTypes.func.isRequired,
  result: PropTypes.string.isRequired
}

export default PassStep3
