import React from 'react'
import PropTypes from 'prop-types'

import "./Step.scss"

/**
 * Step icon
 * @param {number} [number] - Step number
 * @param {string} status - Step status
 */

function Step(props) {
  return (
    <div className={`Step ${props.status}`}>
      <p>{props.number}</p>
    </div>
  )
}

Step.propTypes = {
  number: PropTypes.number,
  status: PropTypes.string.isRequired
}

export default Step
