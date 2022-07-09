import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { DEFAULT_MAX_INPUT } from '../../utils/constant'

import styles from'./InputEye.module.scss'

import eye from '../../assets/img/ojo.png'
import invisible from '../../assets/img/invisible.png'

/**
 * Input password with eye
 * @param {string} [value] - Input value attribute
 * @param {string} [placeholder=Introduce el dato] - Input placeholder attribute
 * @param {string} [className] - Input class attribute
 * @param {any} OnChange - Function to get the input value
 * @param {string} name - Input name attribute
 * @param {number} [maxLength=DEFAULT_MAX_INPUT] - Input maxLength attribute
 */

function InputEye(props) {

  const [type, setType] = useState ('password')

  const togglePassword = () => setType((type === 'text') ? 'password' : 'text')

  return (
    <>
      <input type={type} {...props} />
      <span className={`clickEye ${styles.InputEyeShow}`} onClick={togglePassword}><img src={type==='password' ? eye : invisible} alt="Imagen Ojo"/></span>
    </>
  )
}

InputEye.defaultProps ={
  placeholder: 'Introduce el dato',
  maxLength: DEFAULT_MAX_INPUT
}

InputEye.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.number
}

export default InputEye
