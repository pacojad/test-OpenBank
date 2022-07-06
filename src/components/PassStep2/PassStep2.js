import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { validationInput } from '../../utils/validation'
import { MAX_TEXTAREA_PASSWORD, MAX_PASSWORD, MIN_PASSWORD } from '../../utils/constant'

import WizardButtons from '../WizardButtons/WizardButtons'
import InputEye from '../InputEye/InputEye'

import './PassStep2.scss'

import { submitForm } from '../../services/api'

/**
 * Wizard Password Step2
 * @param {any} onClose - Function to close the modal
 * @param {any} onResult - Function to next step
 */

function PassStep2(props) {
  
  const [datas, setDatas] = useState({
    pass: '',
    repass: '',
    optionalQuestion: '',
    errPass: '',
    errRepass: ''
  })
  const [isAllFill, setIsAllFill] = useState(false)

  const componentdidmount = useRef();
  useEffect(() => {
    if (!componentdidmount.current) {
      componentdidmount.current = true
    } else {
      if (validatePassRegExp()) {
        setIsAllFill(validationInput)
      }
    }
    // eslint-disable-next-line
  },[datas.pass, datas.repass])

  const validatePassRegExp = () => {
    let validityStatus = true
    let regex = /[A-Z].*[0-9]|[0-9].*[A-Z]/
    let messagePass = ''
    let messageRepass = ''

    if (datas.pass.length < MIN_PASSWORD) {
      validityStatus = false;
      messagePass = 'Longitud mínima ' + MIN_PASSWORD + ' caracteres'
    }

    if (!regex.test(datas.pass)) {
      validityStatus = false;
      messagePass = 'Al menos una mayúscula y un número'
    }

    if (datas.pass !== datas.repass) {
      validityStatus = false;
      messageRepass = 'Las contraseñas no coinciden'
    }

    setDatas({...datas,
      errPass : messagePass,
      errRepass: messageRepass
    })

    return validityStatus;
  }

  const handleInputChange = ( event ) => {
    setDatas({
        ...datas,
        [event.target.name] : event.target.value
    })
  }

  const submitData = async () => {
    try {
      await submitForm(datas.pass, datas.repass, datas.optionalQuestion)
      props.onResult('success')
    }
    catch {
      props.onResult('fail')
    }
  }



  return (
    <>
      <div className='Password-Step2'>
        <h4>Crea tu Password</h4>
        <p>Por favor teclea la contraseña.<br/>No podrás recuperar tu contraseña, así que recuérdala bien.</p>
        <div className="form-group">
            <div className="col-5">
              <label className="col-12 control-label">Crea tu Contraseña Maestra</label>
              <InputEye value={datas.pass} placeholder="Tu contraseña" className="col-12 required" onChange={handleInputChange} name="pass" maxLength={MAX_PASSWORD} /> 
              <span className='input-error'>{datas.errPass}</span>
            </div>
            <div className="col-5">
              <label className="col-12 control-label">Repite tu Contraseña Maestra</label>
              <InputEye value={datas.repass} placeholder="Repite tu contraseña" className="col-12 required" onChange={handleInputChange} name="repass" maxLength={MAX_PASSWORD} />
              <span className='input-error'>{datas.errRepass}</span>
            </div>
            <p>También puedes crear una pista que te ayude a recordar tu contraseña maestra.</p>
            <div className="col-12">
              <label className="col-12 control-label">Crea tu pista para recordar tu contraseña (opcional)</label>  
              <textarea value={datas.optionalQuestion} placeholder="Introduce tu pista" className="col-12" onChange={handleInputChange} name="optionalQuestion" maxLength={MAX_TEXTAREA_PASSWORD}></textarea>
              <span className='textareaCount'>{datas.optionalQuestion.length}/{MAX_TEXTAREA_PASSWORD}</span>
            </div>
        </div>
      </div>
      <WizardButtons onClose={props.onClose} onNext={submitData} nextButton={isAllFill}/>
    </>
  )
}

PassStep2.propTypes = {
  onClose: PropTypes.func.isRequired,
  onResult: PropTypes.func.isRequired
}

export default PassStep2
