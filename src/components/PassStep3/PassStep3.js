import React, { useContext } from 'react'
import { TITLE_SUCCESS, TITLE_FAIL, TEXT_SUCCESS, TEXT_FAIL, TEXT_BUTTON_SUCCESS, TEXT_BUTTON_FAIL} from '../../utils/constant'

import { StoreContext } from '../../Context/store'

import WizardButtonsResult from '../WizardButtonsResult/WizardButtonsResult'

import styles from'./PassStep3.module.scss'

import imgSuccess from '../../assets/img/icon_ok.png'
import imgFail from '../../assets/img/icon_error.png'

/**
 * Wizard Password Step3
 */

function PassStep3() {

  const { password, close, initStep }  = useContext(StoreContext)
  const [passState] = password

  return (
    <>
      <div className={styles.PasswordStep3}>
        <img src={passState.result==='success' ? imgSuccess : imgFail} alt="Imagen Feedback" />
        <div className={styles.PasswordStep3_text}>
          <h4>{passState.result==='success' ? TITLE_SUCCESS : TITLE_FAIL}</h4>
          <p>{passState.result==='success' ? TEXT_SUCCESS : TEXT_FAIL}</p>  
        </div>
      </div>
      <WizardButtonsResult onButtonClick={passState.result==='success' ? close : initStep} buttonText={passState.result==='success' ? TEXT_BUTTON_SUCCESS : TEXT_BUTTON_FAIL} />
    </>
  )
}

export default PassStep3
