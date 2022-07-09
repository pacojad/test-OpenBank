import React, { useContext } from 'react'
import { PASSWORD_STEPS } from '../../utils/constant'

import { StoreContext } from '../../Context/store'

import WizardSteps from '../WizardSteps/WizardSteps'
import PassStep1 from '../PassStep1/PassStep1'
import PassStep2 from '../PassStep2/PassStep2'
import PassStep3 from '../PassStep3/PassStep3'

import styles from'./Password.module.scss'

/**
 * Wizard Password
 */

function Password() {

  const { password }  = useContext(StoreContext)
  const [passState] = password

  const PassStepContent = () => {
    switch (passState.active) {
      case 1:
        return <PassStep1 />
      case 2:
        return <PassStep2 />
      case 3:
        return <PassStep3 />
      default:
        return ''
    }
  }

  return (
      <div className={styles.Password}>
        <WizardSteps number={PASSWORD_STEPS} />
        <PassStepContent />
      </div>
  )
}

export default Password
