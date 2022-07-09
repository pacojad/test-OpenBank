import React, { useContext } from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types'

import { StoreContext } from '../../Context/store'

import styles from'./ModalContainer.module.scss'

/**
 * Modal Portal
 * @param {element} [children] - Component
 */

const modalContainer = document.querySelector("#modalContainer");

const ModalContainer = ( {children} ) => {

  const { password }  = useContext(StoreContext)
  const [passState] = password

  return (
      passState.wizard
      ? ReactDOM.createPortal(
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            {children}   
          </div>
        </div>
        ,
        modalContainer
      )
      : null
  )
}

ModalContainer.propTypes = {
  children: PropTypes.element
}

export default ModalContainer
