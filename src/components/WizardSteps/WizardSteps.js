import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'

import styles from'./WizardSteps.module.scss'

import Step from '../Step/Step'

import { StoreContext } from '../../Context/store'

/**
 * Generate the Wizard steps
 * @param {number} number - Number of steps
 */

const Steps = ( {number} ) => {

  const { password } = useContext(StoreContext)
  const [passState] = password

  let Steps =[]
  for (let i = 1; i<=number; i++) {
    if (i<passState.active) {
      Steps.push(
        <Fragment key={`step${i}`}>
          <Step number={i} status={'Step_prev'}/>
          <div className={`${styles.line} ${styles.line_prev}`}></div>
        </Fragment>
      )
    } else if (i===passState.active) {
      Steps.push(
        <Fragment key={`step${i}`}>
          <div className={styles.triangle}>
            <Step number={i} status={'Step_actual'}/>
            <div className={styles.triangle_container}></div>
          </div>
          {(i===number) ? '' : <div className={`${styles.line} ${styles.line_post}`}></div>}
        </Fragment>
      )
    } else {
      Steps.push(
        <Fragment key={`step${i}`}>
          <Step number={i} status={'Step_post'}/>
          {(i===number) ? '' : <div className={`${styles.line} ${styles.line_post}`}></div>}
        </Fragment>
      )
    }
  }
  return Steps
}

function WizardSteps(props) {
  return (
    <div className={styles.WizardSteps}>
      <Steps {...props}/>
    </div>
  )
}

WizardSteps.propTypes = {
  number: PropTypes.number.isRequired
}

export default WizardSteps
