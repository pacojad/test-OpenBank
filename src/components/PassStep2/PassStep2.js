import React, { useEffect, useState, useRef, useContext } from 'react'
import { validationInput, validatePassRegExp } from '../../utils/validation'
import { MAX_TEXTAREA_PASSWORD, MAX_PASSWORD, MIN_PASSWORD } from '../../utils/constant'

import { StoreContext } from '../../Context/store'

import WizardButtons from '../WizardButtons/WizardButtons'
import InputEye from '../InputEye/InputEye'

import styles from'./PassStep2.module.scss'

import imgLoading from '../../assets/img/loading.gif'

import { submitForm } from '../../services/api'

/**
 * Wizard Password Step2
 */

function PassStep2() {

  const { resultPass }  = useContext(StoreContext)
  
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
      if (validatePassRegExp(datas, setDatas, MIN_PASSWORD, MAX_PASSWORD)) {
        setIsAllFill(validationInput)
      }
    }
    // eslint-disable-next-line
  },[datas.pass, datas.repass])

  const handleInputChange = ( event ) => {
    setDatas({
        ...datas,
        [event.target.name] : event.target.value
    })
  }

  const submitData = async () => {
    document.getElementsByClassName("loading")[0].classList.remove('disabled')
    try {
      await submitForm(datas.pass, datas.repass, datas.optionalQuestion)
      resultPass('success')
    }
    catch {
      resultPass('fail')
    }
  }

  return (
    <>
      <div className={styles.PasswordStep2}>
        <h4>Crea tu Password</h4>
        <p>Por favor teclea la contraseña.<br/>No podrás recuperar tu contraseña, así que recuérdala bien.</p>
        <div className="form-group inputStep2">
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
              <span className={styles.textareaCount}>{datas.optionalQuestion.length}/{MAX_TEXTAREA_PASSWORD}</span>
            </div>
        </div>
      </div>
      <WizardButtons onNext={submitData} nextButton={isAllFill}/>
      <div className='loading disabled'>
        <img src={imgLoading} alt="Imagen Loading"/>
      </div>
    </>
  )
}

export default PassStep2

