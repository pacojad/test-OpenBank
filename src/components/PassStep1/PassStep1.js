import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { validationCheck } from '../../utils/validation'

import WizardButtons from '../WizardButtons/WizardButtons'

import imgStep1 from '../../assets/img/openclose.jpg'

/**
 * Wizard Password Step1
 * @param {any} onClose - Function to close the modal
 * @param {any} onNext - Function to next step
 */

function PassStep1(props) {

  const [isAllChecked, setIsAllChecked] = useState(false)

  const handleOnCheck = () => {
    setIsAllChecked(validationCheck)
  }

  return (
    <>
      <div className='Password-Step1'>
        <h4>Cuenta Corriente OpenClose</h4>
        <img src={imgStep1} alt="Imagen Step1"/>
        <p>Bienvenido al asistente de creación de contraseña para tu <strong>Cuenta Corriente OpenClose.</strong></p>
        <h5>Siguientes pasos</h5>
        <p>En los siguientes pasos te solicitaremos los minimos datos necesarios para poder crear tu contraseña.</p>
        <div className='check-label'>
          <input className='required' type="checkbox" name="edad" value="false" onClick={handleOnCheck} id="input_step1_edad" /><label htmlFor="input_step1_edad">¿Es mayor de edad?</label>   
        </div>
        <div className='check-label'>
          <input className='required' type="checkbox" name="datos" value="false" onClick={handleOnCheck} id="input_step1_datos"/><label htmlFor="input_step1_datos">¿Acepta que tratemos sus datos según la política de protección de datos?</label>
        </div>
      </div>
      <WizardButtons onClose={props.onClose} onNext={props.onNext} nextButton={isAllChecked}/>
    </>
  )
}

PassStep1.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired
}

export default PassStep1
