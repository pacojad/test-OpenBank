import React from 'react'
import PropTypes from 'prop-types'

import styles from'./Step.module.scss'


/**
 * Step icon
 * @param {number} [number] - Step number
 * @param {string} status - Step status
 */

function Step( {number, status} ) {
  return (
    <div className={`${styles.Step} ${status}`}>
      <p>{number}</p>
    </div>
  )
}

Step.propTypes = {
  number: PropTypes.number,
  status: PropTypes.string.isRequired
}

export default Step
