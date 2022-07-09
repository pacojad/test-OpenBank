import React, { useState, useRef, useContext } from 'react'
import { validationCheck } from '../../utils/validation'

import { StoreContext } from '../../Context/store'

import WizardButtons from '../WizardButtons/WizardButtons'

import styles from'./PassStep1.module.scss'

import imgStep1 from '../../assets/img/openclose.jpg'

/**
 * Wizard Password Step1
 */

function PassStep1() {

  const { nextStep }  = useContext(StoreContext)

  const [isAllChecked, setIsAllChecked] = useState(false)
  const inputRefEdad = useRef();
  const inputRefDatos = useRef();

  const handleOnCheck = () => {
    setIsAllChecked(validationCheck([inputRefEdad, inputRefDatos]))
  }

  return (
    <>
      <div className={styles.PasswordStep1}>
        <h4>Cuenta Corriente OpenClose</h4>
        <img src={imgStep1} alt="Imagen Step1"/>
        <p>Bienvenido al asistente de creación de contraseña para tu <strong>Cuenta Corriente OpenClose.</strong></p>
        <h5>Siguientes pasos</h5>
        <p>En los siguientes pasos te solicitaremos los minimos datos necesarios para poder crear tu contraseña.</p>
        <div className='check-label'>
          <input className='required' ref={inputRefEdad} type="checkbox" name="edad" value="false" onClick={handleOnCheck} id="input_step1_edad" /><label htmlFor="input_step1_edad">¿Es mayor de edad?</label>   
        </div>
        <div className='check-label'>
          <input className='required' ref={inputRefDatos} type="checkbox" name="datos" value="false" onClick={handleOnCheck} id="input_step1_datos"/><label htmlFor="input_step1_datos">¿Acepta que tratemos sus datos según la política de protección de datos?</label>
        </div>
      </div>
      <WizardButtons onNext={nextStep} nextButton={isAllChecked}/>
    </>
  )
}

export default PassStep1
